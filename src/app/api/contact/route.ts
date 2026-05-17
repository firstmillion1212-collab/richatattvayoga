import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key_for_build');
const adminEmail = 'richatattvayoga@gmail.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Insert into Supabase
    // Note: ensure table `contact_messages` exists in Supabase
    const { error: dbError } = await supabase
      .from('contact_messages')
      .insert([
        { name, email, subject, message }
      ]);

    if (dbError) {
      console.error("Supabase Error:", dbError);
    }

    // 2. Send email notification to admin
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Richa Tattva Yoga Contact Form <onboarding@resend.dev>',
        to: [adminEmail],
        subject: `Contact Form: ${subject}`,
        html: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
