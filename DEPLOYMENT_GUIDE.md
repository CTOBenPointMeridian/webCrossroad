# Crossroads Healing Center - Development & Deployment Guide

## Project Overview
Next.js website for Crossroads Healing Center with React, Tailwind CSS, and Framer Motion animations. Includes comprehensive mental health assessment quiz with Google Sheets and Google Drive integration.

## Local Development

### Starting the Dev Server
```bash
npm run dev
```
The dev server will attempt to run on port 3000, but will use 3001 if 3000 is occupied.

### Common Issues
- **Lock file error**: If you see "Unable to acquire lock at .next/dev/lock", remove the `.next/dev` directory:
  ```bash
  rm -rf .next/dev
  ```

## Vercel Deployment

### Important Note
**GitHub pushes DO NOT automatically trigger Vercel deployments** for this project. You must manually trigger deployments after pushing to GitHub.

### Environment Variables
Vercel API token is stored in `.env.local`:
```
VERCEL_TOKEN=IGMI5rAk6CGzMvzVsvq4w6Ih
```

### Deployment Process

1. **Make your code changes and commit**:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Trigger Vercel deployment via API**:
   ```bash
   curl -X POST "https://api.vercel.com/v13/deployments?skipAutoDetectionConfirmation=1" \
     -H "Authorization: Bearer IGMI5rAk6CGzMvzVsvq4w6Ih" \
     -H "Content-Type: application/json" \
     -d '{
       "name": "crossroads-healing",
       "target": "production",
       "gitSource": {
         "type": "github",
         "org": "bencastro",
         "repo": "webCrossroad",
         "ref": "main"
       },
       "projectSettings": {
         "framework": "nextjs",
         "buildCommand": "next build",
         "installCommand": "npm install",
         "outputDirectory": null,
         "devCommand": "next dev --port $PORT"
       }
     }'
   ```

3. **Monitor deployment status**:
   The API response will include a deployment ID. Check status with:
   ```bash
   curl -H "Authorization: Bearer IGMI5rAk6CGzMvzVsvq4w6Ih" \
     "https://api.vercel.com/v13/deployments/[DEPLOYMENT_ID]"
   ```

### Alternative: Force Empty Commit to Trigger Deployment
If you need to trigger a fresh deployment without code changes:
```bash
git commit --allow-empty -m "Trigger Vercel deployment"
git push origin main
# Then use the curl command above to trigger deployment
```

### Deployment Success Indicators
In the API response, look for:
- `"status": "QUEUED"` (deployment starting)
- `"status": "BUILDING"` (build in progress)
- `"status": "READY"` (deployment complete)
- `"readyState": "READY"`
- `"readySubstate": "PROMOTED"` (indicates live on production)

### Vercel Project Details
- **Project Name**: crossroads-healing
- **Project URL**: https://vercel.com/bencastro/crossroads-healing
- **Production Domain**: [Your production domain]
- **Repository**: bencastro/webCrossroad
- **Git Branch**: main

### Common Deployment Issues

1. **SSL/TLS Errors with CLI**:
   - Direct `vercel deploy` commands may fail with SSL errors
   - Use the API method instead (shown above)

2. **Old Commit Being Deployed**:
   - If Vercel deploys an old commit, ensure your local main matches remote:
     ```bash
     git log --oneline -5
     git log origin/main --oneline -5
     ```
   - Push an empty commit to force a new deployment trigger

3. **TypeScript Build Errors**:
   - Always test the build locally before deploying:
     ```bash
     npm run build
     ```

## Git Workflow

### Current Branch
```bash
git branch --show-current  # Should be 'main'
```

### Recent Commits
```bash
git log --oneline -10
```

### Verify Remote Sync
```bash
git status
git log origin/main --oneline -5
```

## Key Files & Components

### Styling
- [src/app/globals.css](src/app/globals.css) - Global styles, CSS variables
- Colors: Teal (#6B8E7F) primary, cream (#F5F1EB) backgrounds

### API Routes
- [src/app/api/submit-quiz/route.ts](src/app/api/submit-quiz/route.ts) - Quiz submission handler with Google Sheets & Drive integration

### Pages
- [src/app/quiz/page.tsx](src/app/quiz/page.tsx) - 15-step mental health assessment quiz
- [src/app/page.tsx](src/app/page.tsx) - Home page
- [src/app/about/](src/app/about/) - About section

### Components
- [src/components/shared/Header.tsx](src/components/shared/Header.tsx) - Navigation header with ADMISSIONS button linking to `/quiz`

### Environment Variables Required
Set these in your `.env.local` file (do not commit):
```
# Google OAuth Configuration (from Google Cloud Console)
GOOGLE_REFRESH_TOKEN=your_refresh_token_here
GOOGLE_CLIENT_ID=your_client_id_here
GOOGLE_CLIENT_SECRET=your_client_secret_here

# Google Sheet & Drive IDs
GOOGLE_SHEET_ID=your_sheet_id_here
GOOGLE_DRIVE_FOLDER_ID=your_folder_id_here

# Vercel Deployment
VERCEL_TOKEN=your_vercel_token_here
```

**Note:** Never commit `.env.local` or real credentials. Store them securely in your CI/CD platform or Vercel dashboard.

## Quiz Data Flow

1. User accesses `/quiz` via ADMISSIONS button in header
2. User completes 15-step mental health assessment
3. Form data submitted to `/api/submit-quiz`
4. API handler:
   - Authenticates with Google via OAuth refresh token
   - Fetches spreadsheet metadata to find correct sheet name
   - Uploads insurance card image to Google Drive (if provided)
   - Appends quiz responses to Google Sheets "leads" sheet
   - Returns success response (always succeeds, even if Google Sheets fails)
5. Results saved with 18 columns:
   - Timestamp, Seeking Help For, Primary Condition
   - Duration, Severity, Previous Treatment
   - Mental Health Concerns, Insurance Type, Insurance Provider
   - Insurance Card Link, Insurance Received How, Recovery Readiness
   - Date of Birth, Timeframe, Full Name, Phone, Email, Consent to Contact

## Testing Checklist Before Deployment

- [ ] Local dev server runs without errors (`npm run dev`)
- [ ] Build completes successfully (`npm run build`)
- [ ] No TypeScript errors
- [ ] Quiz submission working (test with dummy data)
- [ ] Google Sheets/Drive integration functioning
  - [ ] Data appears in "leads" sheet
  - [ ] Insurance images upload to Drive folder
- [ ] ADMISSIONS button navigates to quiz correctly
- [ ] Changes committed to git
- [ ] Changes pushed to GitHub
- [ ] Deployment triggered via API
- [ ] Deployment status verified as READY
- [ ] Live site tested at production URL
- [ ] Quiz submission works on live site

## Troubleshooting

### Google Sheets Not Receiving Data
1. Verify service account email is shared with Editor permissions:
   - Service account: `crossroad@crossroad-480121.iam.gserviceaccount.com`
2. Check that the sheet name is correct (should be "leads")
3. Verify environment variables are set in Vercel
4. Check server logs for "Successfully appended to Google Sheets" message

### Quiz Not Loading
1. Check that all required components are deployed
2. Verify `/quiz` route exists
3. Check browser console for JavaScript errors
4. Verify Framer Motion library is installed

### Insurance Image Upload Failed
1. Verify GOOGLE_DRIVE_FOLDER_ID is correct
2. Check that folder is shared with service account email
3. Verify Google Drive API is enabled
4. Check file size limits (max ~25MB)

## Contact Information

- **Phone**: (866) 647-0621
- **Service Account Email**: crossroad@crossroad-480121.iam.gserviceaccount.com
- **Google Sheet**: https://docs.google.com/spreadsheets/d/1pS7j0UNGBPthik-y3_EHapUBvu61nE03IfdQ9E0B6aA
- **Google Drive Folder**: https://drive.google.com/drive/folders/1GeHiCaK2Wz4iel_sb_qul2FdWtRCCwZN
