# EmailJS Setup - 5 Minutes

## Why EmailJS?
Your backend API won't work in local development (only on Vercel). EmailJS works everywhere immediately.

## Quick Setup:

### 1. Sign Up (1 minute)
- Go to: https://www.emailjs.com/
- Click "Sign Up Free"
- Use your Google account (ridu3668@gmail.com)

### 2. Add Gmail Service (1 minute)
- Dashboard → "Email Services" → "Add New Service"
- Choose "Gmail"
- Click "Connect Account" → Authorize with ridu3668@gmail.com
- **Copy the Service ID** (looks like: `service_abc123`)

### 3. Create Template (2 minutes)
- Dashboard → "Email Templates" → "Create New Template"
- Template Name: "Portfolio Contact"

**Subject:**
```
Portfolio: {{subject}} - from {{from_name}}
```

**Content:**
```
New message from your portfolio!

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{from_email}}
```

- Click "Save"
- **Copy the Template ID** (looks like: `template_xyz789`)

### 4. Get Public Key (30 seconds)
- Dashboard → "Account" → "General"
- Find "Public Key" section
- **Copy your Public Key** (looks like: `abcXYZ123_456`)

### 5. Update Your Code (30 seconds)
Open `src/components/Contact.js` and replace:

```javascript
emailjs.init('YOUR_PUBLIC_KEY');  // Replace with your Public Key

await emailjs.send(
    'YOUR_SERVICE_ID',    // Replace with your Service ID
    'YOUR_TEMPLATE_ID',   // Replace with your Template ID
```

## Done! 
Test your contact form - it will work immediately!

## Free Tier:
- 200 emails per month
- No credit card required
- Perfect for portfolio websites
