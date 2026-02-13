'use client'

import { useRef, useState } from 'react';
import { sendEmail } from '@/actions/send-email';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(formData: FormData) {
    setStatus('submitting');
    const result = await sendEmail(formData);

    if (result?.success) {
      setStatus('success');
      formRef.current?.reset();
    } else {
      setStatus('error');
    }
  }

  return (
    <form ref={formRef} action={handleSubmit} className="mt-12 max-w-2xl mx-auto space-y-6 text-left">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-white transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-white transition-colors"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-white transition-colors"
          placeholder="john@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-white transition-colors resize-none"
          placeholder="Tell us about your project..."
        />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
      </button>
      {status === 'success' && (
        <p className="text-green-400 text-center">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
      )}
    </form>
  );
}
