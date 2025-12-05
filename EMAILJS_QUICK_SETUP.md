# EmailJS Setup Guide - Simple Steps

## Step 1: Sign Up for EmailJS
1. Go to https://www.emailjs.com/
2. Click "Sign Up" (it's FREE - 200 emails/month)
3. Sign up with your Google account (ridu3668@gmail.com)

## Step 2: Add Email Service
1. After login, go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose "Gmail"
4. Click "Connect Account" and authorize with your Gmail
5. Copy the **Service ID** (looks like: service_xxxxxxx)

## Step 3: Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:**
```
New Contact from {{from_name}} - {{subject}}
```

**Body:**
```
You have a new message from your portfolio website!

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{from_email}}
```

4. Save the template
5. Copy the **Template ID** (looks like: template_xxxxxxx)

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (looks like: xxxxxxxxxxxxxxxxxx)

## Step 5: Update Your Code
Open `src/components/Contact.js` and replace:
```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

## Step 6: Install EmailJS Package
Run in terminal:
```bash
npm install @emailjs/browser
```

## Done!
Your contact form will now send emails directly to ridu3668@gmail.com

## Test It
1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your Gmail inbox!
