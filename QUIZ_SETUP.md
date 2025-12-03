# Crossroads Quiz Setup Guide

## Overview

The quiz has been successfully integrated into the Crossroads Healing Center website. Clicking the **ADMISSIONS** button now directs users to `/quiz` where they complete a comprehensive mental health assessment.

## Files Created

1. **[src/app/quiz/page.tsx](src/app/quiz/page.tsx)** - Main quiz component
   - 15-step assessment form with adaptive question types
   - Framer Motion animations for smooth transitions
   - Progress bar tracking
   - File upload support for insurance cards
   - Responsive design (mobile-friendly)

2. **[src/app/api/submit-quiz/route.ts](src/app/api/submit-quiz/route.ts)** - Backend API
   - Handles quiz form submissions
   - Supports Google Sheets integration
   - Supports Google Drive image uploads
   - Fallback email integration option

3. **.env.example** - Configuration template
   - Detailed setup instructions
   - Required environment variables

4. **[src/components/shared/Header.tsx](src/components/shared/Header.tsx)** - Updated
   - ADMISSIONS button now links to `/quiz` (both desktop and mobile)

## Quiz Flow

The assessment consists of 15 steps:

1. **Intro Screen** - Welcome message
2. **Seeking Help For** - Who are they seeking help for
3. **Primary Condition** - Type of condition (Anxiety, Depression, Bipolar, PTSD, OCD, Trauma, Substance Abuse, Dual Diagnosis, Other, or Not Sure)
4. **Duration** - How long has this been a concern
5. **Severity** - Current severity level
6. **Previous Treatment** - Past treatment history
7. **Additional Concerns** - Multi-select mental health concerns (optional)
8. **Insurance Type** - Type of insurance coverage
9. **Insurance Provider** - Name of provider
10. **Insurance Card Upload** - Optional photo of insurance card
11. **Insurance Received How** - How they receive insurance
12. **Recovery Readiness** - 0-10 scale rating
13. **Date of Birth** - User age
14. **Timeframe** - When they need help
15. **Contact Information** - Name, phone, email
16. **Final Thank You** - Confirmation screen with call to action

## Setting Up Google Sheets & Drive (Recommended)

To enable automatic data storage and insurance card uploads, follow these steps:

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project named "Crossroads Healing Center"
3. Enable these APIs:
   - Google Sheets API
   - Google Drive API

### 2. Create a Service Account

1. In Google Cloud Console, navigate to **Service Accounts**
2. Create a new service account
3. Create a JSON key and download it
4. Store the key securely (never commit to git)

### 3. Get OAuth Credentials

1. Go to **APIs & Services** > **Credentials**
2. Create **OAuth 2.0 credentials** (Web application type)
3. Set authorized redirect URIs:
   ```
   http://localhost:3000/api/auth/callback
   https://yourdomain.com/api/auth/callback
   ```
4. Save your Client ID and Client Secret

### 4. Create Google Sheet

1. Create a new Google Sheet named "Crossroads Quiz Responses"
2. Add these headers in the first row (columns A-R):
   ```
   Timestamp
   Seeking Help For
   Primary Condition
   Duration
   Severity
   Previous Treatment
   Mental Health Concerns
   Insurance Type
   Insurance Provider
   Insurance Card Link
   Insurance Received How
   Recovery Readiness
   Date of Birth
   Timeframe
   Full Name
   Phone
   Email
   Consent to Contact
   ```
3. Share the sheet with your service account email (from the JSON key)
4. Get the Sheet ID from the URL: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit`

### 5. Create Google Drive Folder

1. Create a folder in Google Drive named "Crossroads Insurance Cards"
2. Get the folder ID from the URL: `https://drive.google.com/drive/folders/{FOLDER_ID}`
3. Share the folder with your service account email

### 6. Set Environment Variables

Create a `.env.local` file in the project root:

```env
GOOGLE_REFRESH_TOKEN=your_refresh_token_here
GOOGLE_CLIENT_ID=your_client_id_here
GOOGLE_CLIENT_SECRET=your_client_secret_here
GOOGLE_SHEET_ID=your_sheet_id_here
GOOGLE_DRIVE_FOLDER_ID=your_folder_id_here
```

## Alternative: Email-Only Setup (Simpler)

If you prefer to skip Google Sheets integration, the system will work with just email:

```env
QUIZ_EMAIL=admissions@crossroadsin.com
```

Quiz submissions will be logged to console (development) or require additional email service setup.

## Testing the Quiz

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Navigate to the quiz:**
   - Click ADMISSIONS button on header
   - Or go directly to `http://localhost:3000/quiz`

3. **Fill out a test submission:**
   - Complete all required fields
   - Upload a test image (optional)
   - Submit the form

4. **Verify data storage:**
   - Check your Google Sheet for the new row
   - If image uploaded, verify it's in the Drive folder

## Customization

### Change Quiz Questions

Edit the `steps` array in [src/app/quiz/page.tsx](src/app/quiz/page.tsx) (starting around line 45):

```typescript
const steps: StepType[] = [
  {
    type: 'single-choice',
    question: 'Your question here',
    options: ['Option 1', 'Option 2', 'Option 3'],
    key: 'fieldName',
  },
  // ... more steps
];
```

### Change Branding Colors

The quiz uses Crossroads brand colors:
- Primary: `#6B8E7F` (teal)
- Light background: `#F5F1EB` (cream)
- Dark background: `#EFE9E0` (light cream)

To change, replace these hex values throughout the component.

### Change Call-to-Action Phone Number

Update the phone number in the final screen (line 374):

```typescript
href="tel:+18666470621"
Call Now: (866) 647-0621
```

## Deployment Considerations

1. **Environment Variables:** Ensure all Google credentials are properly set in your production environment (Vercel, Netlify, etc.)

2. **Google OAuth Token:** The refresh token allows the API to generate new access tokens without user interaction. Keep this secure.

3. **CORS:** If the quiz is accessed from a different domain, ensure your Google API credentials allow it.

4. **Rate Limiting:** Consider adding rate limiting to the `/api/submit-quiz` endpoint in production.

5. **Error Handling:** Users see generic error messages. For production, add more specific error feedback or notification system.

## Troubleshooting

### "Module not found: Can't resolve 'lucide-react'"
Solution: Run `npm install lucide-react`

### Google Sheet isn't receiving data
- Verify the Google Sheet was shared with your service account email
- Check that column headers exactly match the code (line 129-150 in route.ts)
- Verify GOOGLE_SHEET_ID and GOOGLE_REFRESH_TOKEN are correct

### Images aren't uploading to Drive
- Verify Google Drive API is enabled
- Check that the folder was shared with service account email
- Ensure GOOGLE_DRIVE_FOLDER_ID is correct

### SSL/Certificate errors with Google APIs
- Usually only happens in development
- Ensure you're using https in production

## Files to Remember

- **Quiz Page:** [src/app/quiz/page.tsx](src/app/quiz/page.tsx)
- **API Route:** [src/app/api/submit-quiz/route.ts](src/app/api/submit-quiz/route.ts)
- **Header (with ADMISSIONS link):** [src/components/shared/Header.tsx](src/components/shared/Header.tsx)
- **Config Template:** [.env.example](.env.example)

## Future Enhancements

1. Add email confirmation to users
2. Add internal email notification when quiz submitted
3. Add SMS notifications
4. Create user dashboard to view quiz history
5. Add conditional logic (branch based on answers)
6. Integrate with CRM system (Salesforce, HubSpot, etc.)
7. Add payment/insurance verification
8. Add doctor/referrer information section
