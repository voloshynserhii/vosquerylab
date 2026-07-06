'use client'

import { useRef, useState } from 'react';
import { sendEmail } from '@/actions/send-email';
import { cn, colors, radius, transitions, typography } from '../../src/theme';

const fieldClass = cn(
  "w-full border border-white/10 bg-white/6 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-300/60 focus:bg-white/9",
  typography.bodySmall,
  radius.lg,
  transitions.base,
);

const labelClass = cn("mb-2 block", typography.caption, colors.textMutedDark);

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
    <form ref={formRef} action={handleSubmit} className="mx-auto mt-12 max-w-2xl space-y-6 text-left">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={fieldClass}
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={fieldClass}
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={fieldClass}
          placeholder="john@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={cn(fieldClass, "resize-none")}
          placeholder="Tell us about your project..."
        />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className={cn(
          "w-full cursor-pointer bg-white py-4 font-semibold text-slate-950 hover:bg-violet-100 disabled:cursor-not-allowed disabled:opacity-50",
          radius.lg,
          transitions.base,
        )}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
      </button>
      {status === 'success' && (
        <p className={cn("text-center", colors.success)}>Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className={cn("text-center", colors.danger)}>Failed to send message. Please try again.</p>
      )}
    </form>
  );
}
