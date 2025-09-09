# EmailJS Setup Instructions

To complete the contact form setup, you need to configure EmailJS:

## Steps:

1. **Create EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up with your Gmail account (sokcheahy57@gmail.com)

2. **Connect Gmail Service**
   - In EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Select "Gmail"
   - Follow the OAuth flow to connect your Gmail

3. **Create Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template:
   ```
   Subject: New Contact Form Message from {{from_name}}
   
   You have received a new message from your portfolio website:
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   
   ---
   This message was sent from your portfolio contact form.
   ```

4. **Get Your Credentials**
   - Public Key: Found in "Account" → "General"
   - Service ID: Found in "Email Services"
   - Template ID: Found in "Email Templates"

5. **Update ContactSection.tsx**
   Replace these placeholders in the code:
   - `YOUR_PUBLIC_KEY` with your actual public key
   - `YOUR_SERVICE_ID` with your service ID
   - `YOUR_TEMPLATE_ID` with your template ID

6. **Test the Form**
   - Submit a test message through your contact form
   - Check your Gmail for the received message

## Security Note:
EmailJS public key is safe to use in frontend code as it's designed for client-side usage.