# Email Backend Setup

## Steps to enable email sending:

### 1. Install nodemailer
```bash
npm install nodemailer
```

### 2. Setup Gmail App Password
1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to Security > App passwords
4. Generate a new app password for "Mail"
5. Copy the 16-character password

### 3. Add Environment Variables

**For local development:**
Create `.env.local` file with:
```
EMAIL_USER=ridu3668@gmail.com
EMAIL_PASS=your_16_character_app_password
```

**For Vercel deployment:**
1. Go to your Vercel project settings
2. Navigate to Environment Variables
3. Add:
   - `EMAIL_USER` = ridu3668@gmail.com
   - `EMAIL_PASS` = your_16_character_app_password

### 4. Deploy
The `/api/send-email.js` serverless function will automatically work on Vercel.

## Alternative: Use EmailJS (Easier)
If you prefer not to set up a backend, use EmailJS as originally configured.
