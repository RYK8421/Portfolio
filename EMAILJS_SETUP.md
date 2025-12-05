# EmailJS Setup Guide

Follow these steps to enable email functionality in your contact form:

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service
1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose Gmail (or any email provider)
4. Connect your Gmail account (ridu3668@gmail.com)
5. Copy the **Service ID** (looks like: service_xxxxxxx)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:**
```
New Contact Form Message: {{subject}}
```

**Body:**
```
You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Save the template and copy the **Template ID** (looks like: template_xxxxxxx)

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (looks like: xxxxxxxxxxxxxxxxxx)

## Step 5: Update Contact.js
Open `src/components/Contact.js` and replace these values in the `handleSubmit` function:

```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

## Step 6: Test
1. Run your app: `npm start`
2. Fill out the contact form
3. Click "Send Message"
4. Check your email at ridu3668@gmail.com

## Troubleshooting
- If emails don't arrive, check your EmailJS dashboard logs
- Make sure you verified your email with EmailJS
- Check spam folder
- Ensure all IDs are correctly copied

## Alternative: Use Environment Variables (Recommended)
Create a `.env` file in your project root:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update Contact.js:
```javascript
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
```

Don't forget to add `.env` to your `.gitignore` file!
