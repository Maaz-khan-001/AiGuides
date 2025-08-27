# EmailJS Setup Guide for Contact Form

To make your contact form functional and send emails to `maazswat942@gmail.com`, follow these steps:

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account (`maazswat942@gmail.com`)
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your AiGuide contact form.
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Update Your Code
Replace the placeholder values in `src/pages/Contact.jsx`:

```javascript
// Line 15: Replace "YOUR_PUBLIC_KEY"
emailjs.init("your_actual_public_key");

// Lines 40-44: Replace the placeholder values
const result = await emailjs.send(
  'your_service_id',        // Replace with your Service ID
  'your_template_id',       // Replace with your Template ID
  templateParams,
  'your_public_key'         // Replace with your Public Key
);
```

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email (`maazswat942@gmail.com`) for the message

## Alternative: Using Formspree (Easier Setup)
If EmailJS seems complex, you can use Formspree instead:

1. Go to [Formspree.io](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Get your form endpoint URL
5. Replace the `handleSubmit` function with:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError('');
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    console.error('Email sending failed:', error);
    setError('Failed to send message. Please try again or contact us directly at maazswat942@gmail.com');
  } finally {
    setIsSubmitting(false);
  }
};
```

## Notes:
- EmailJS free plan allows 200 emails per month
- Formspree free plan allows 50 submissions per month
- Both services are reliable and widely used
- Your email address (`maazswat942@gmail.com`) will receive all contact form submissions
