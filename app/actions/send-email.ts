'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  if (!email) {
    return { error: 'Missing required fields' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@vosquery-lab.site>',
      to: ['vosquery@gmail.com'],
      subject: `New Inquiry from ${name}`,
      text: `Name: ${name} \nEmail: ${email} \nPhone: ${phone} \nMessage: ${message}`,
    });

    if (error) {
      return { error: error.message };
    }

    await resend.emails.send({
      from: 'Vosquery Lab <onboarding@vosquery-lab.site>',
      to: [email],
      subject: 'We received your inquiry',
      text: `Hi ${name},\n\nThank you for contacting Vosquery Lab. We have received your message and will get back to you shortly.\n\nBest regards,\nThe Vosquery Lab Team`,
    });

    return { success: true, data };
  } catch (err) {
    console.log('Failed to send email', err);
    return { error: 'Failed to send email' };
  }
}
