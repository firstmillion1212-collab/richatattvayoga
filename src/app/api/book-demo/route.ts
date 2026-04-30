import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key_for_build');
const adminEmail = 'firstmillion1212@gmail.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, session_type, message } = body;

    if (!name || !email || !phone || !session_type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Insert into Supabase
    // Note: ensure table `bookings` exists in Supabase
    const { error: dbError } = await supabase
      .from('bookings')
      .insert([
        { name, email, phone, session_type, message }
      ]);

    if (dbError) {
      console.error("Supabase Error:", dbError);
      // Even if DB fails (e.g. not configured yet), we might still want to try sending emails.
      // But for a true production app, we'd handle this strictly. Let's proceed to email.
    }

    // 2. Send email notification to admin
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Richa Tattva Yoga <onboarding@resend.dev>', // Update to verified domain in production
        to: [adminEmail],
        subject: `New Demo Booking: ${name}`,
        html: `
          <h2>New Demo Booking Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Session Type:</strong> ${session_type}</p>
          <p><strong>Message/Conditions:</strong> ${message || 'None provided'}</p>
        `
      });

      // 3. Send auto-reply to user
      await resend.emails.send({
        from: 'Richa Tattva Yoga <onboarding@resend.dev>', // Update to verified domain
        to: [email],
        subject: 'Booking Confirmation - Richa Tattva Yoga',
        html: `
          <h2>Thank you for contacting Richa Tattva Yoga!</h2>
          <p>Hi ${name},</p>
          <p>We have received your request for a ${session_type} demo session. We will review your details and reach out shortly to confirm the timing.</p>
          <p>Warm regards,<br/>Richa Mishra<br/>Richa Tattva Yoga</p>
        `
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
