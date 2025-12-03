import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { success: false, error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    // Format the callback data for storage
    const callbackData = {
      timestamp: new Date().toISOString(),
      name: data.name,
      phone: data.phone,
      message: data.message || '',
    };

    // Option 1: If using Google Sheets integration
    if (process.env.GOOGLE_REFRESH_TOKEN && process.env.GOOGLE_SHEET_ID) {
      try {
        await submitToGoogleSheets(callbackData);
      } catch (error) {
        console.error('Google Sheets submission failed, but continuing with console log:', error);
      }
    }

    // Always log to console (development backup)
    console.log('Callback request received and logged:', callbackData);
    return NextResponse.json(
      { success: true, message: 'Callback request received' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing callback submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process callback request' },
      { status: 500 }
    );
  }
}

async function submitToGoogleSheets(
  callbackData: Record<string, any>
): Promise<void> {
  try {
    // Get access token
    const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

    if (!refreshToken || !clientId || !clientSecret) {
      throw new Error('Google OAuth credentials not configured');
    }

    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
      }).toString(),
    });

    if (!tokenResponse.ok) {
      throw new Error(`Failed to refresh token: ${await tokenResponse.text()}`);
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Get spreadsheet metadata to find the actual sheet name
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    let sheetName = 'callbacks'; // default sheet name for callbacks

    try {
      const metadataResponse = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        }
      );

      if (metadataResponse.ok) {
        const metadata = await metadataResponse.json();
        // Look for a sheet named 'callbacks', otherwise use first sheet
        if (metadata.sheets && metadata.sheets.length > 0) {
          const callbacksSheet = metadata.sheets.find((s: any) => s.properties.title.toLowerCase() === 'callbacks');
          if (callbacksSheet) {
            sheetName = callbacksSheet.properties.title;
          } else {
            // If no callbacks sheet, create row in second sheet if available, otherwise use leads
            sheetName = metadata.sheets.length > 1 ? metadata.sheets[1].properties.title : 'leads';
          }
        }
      }
    } catch (error) {
      console.error('Failed to fetch sheet metadata, using default:', error);
    }

    // Prepare row for Google Sheets (name, phone, message, timestamp)
    const row = [
      callbackData.timestamp,
      callbackData.name,
      callbackData.phone,
      callbackData.message,
    ];

    // Append to Google Sheets
    const encodedSheetName = sheetName.includes(' ') ? `'${sheetName}'` : sheetName;
    const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodedSheetName}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;

    console.log('Appending callback to Google Sheets...');
    console.log('Sheet name:', sheetName);

    const sheetsResponse = await fetch(sheetsUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [row],
      }),
    });

    if (!sheetsResponse.ok) {
      const errorText = await sheetsResponse.text();
      console.error('Google Sheets API error response:', errorText);
      console.error('Status code:', sheetsResponse.status);
      // Don't throw - fall back to console logging
      console.log('Note: Google Sheets failed. Data logged to console above.');
    } else {
      console.log('Successfully appended callback to Google Sheets');
    }

  } catch (error) {
    console.error('Error submitting callback to Google Sheets:', error);
    throw error;
  }
}
