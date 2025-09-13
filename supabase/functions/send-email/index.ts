import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, message } = await req.json()

    // Get email credentials from Supabase secrets
    const EMAIL_USER = Deno.env.get('EMAIL_USER')
    const EMAIL_PASS = Deno.env.get('EMAIL_PASS')
    const EMAIL_HOST = Deno.env.get('EMAIL_HOST') || 'smtp.gmail.com'
    const EMAIL_PORT = parseInt(Deno.env.get('EMAIL_PORT') || '587')

    if (!EMAIL_USER || !EMAIL_PASS) {
      throw new Error('Email credentials not configured')
    }

    // Send email using Gmail API
    const emailBody = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `

    // Create the email content in RFC 2822 format
    const emailContent = [
      `From: ${EMAIL_USER}`,
      `To: ${EMAIL_USER}`,
      `Subject: New Contact Form Message from ${name}`,
      `Content-Type: text/html; charset=utf-8`,
      '',
      emailBody
    ].join('\r\n')

    // Encode the email content in base64
    const encodedEmail = btoa(emailContent)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '')

    // Send email using Gmail API
    const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${EMAIL_PASS}`, // Use app password as bearer token
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        raw: encodedEmail
      })
    })

    if (!response.ok) {
      // Fallback: Try using a different approach if Gmail API fails
      throw new Error(`Failed to send email: ${response.status} ${response.statusText}`)
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})