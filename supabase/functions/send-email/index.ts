import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createTransporter } from "https://deno.land/x/nodemailer@1.0.0/mod.ts"

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

    // Create transporter
    const transporter = createTransporter({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: false,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    })

    // Send email
    await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_USER, // Send to yourself
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

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