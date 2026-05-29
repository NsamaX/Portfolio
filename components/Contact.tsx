'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import translations, { Lang } from '@/lib/translations';

interface ContactProps {
  lang: Lang;
}

type Status = 'idle' | 'sending' | 'sent' | 'error';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function Contact({ lang }: ContactProps) {
  const t = translations[lang].contact;
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [fields, setFields] = useState({ from_name: '', reply_to: '', message: '' });

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.reply_to);
  const allFilled = fields.from_name.trim() !== '' && validEmail && fields.message.trim() !== '';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'sending') return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || !formRef.current) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      formRef.current.reset();
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  }

  const btnLabel = status === 'sending' ? t.sending : status === 'sent' ? t.sent : t.send;

  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner">
        <div className="section-label-wrap">
          <span className="mono-section-label">{t.label}</span>
          <div className="label-dashed-line"></div>
        </div>

        <div className="contact-grid">
          <div className="contact-form-wrap">
            <p className="contact-intro">{t.intro}</p>

            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label className="form-label">{t.name}</label>
                <input className="form-input" type="text" name="from_name" placeholder={t.name_ph} required onChange={e => setFields(f => ({ ...f, from_name: e.target.value }))} />
              </div>
              <div className="form-field">
                <label className="form-label">{t.email}</label>
                <input className="form-input" type="email" name="reply_to" placeholder={t.email_ph} required onChange={e => setFields(f => ({ ...f, reply_to: e.target.value }))} />
              </div>
              <div className="form-field">
                <label className="form-label">{t.message}</label>
                <textarea className="form-input form-textarea" name="message" placeholder={t.message_ph} rows={4} required onChange={e => setFields(f => ({ ...f, message: e.target.value }))}></textarea>
              </div>
              <button type="submit" className="send-btn" disabled={!allFilled || status === 'sending'}>
                {btnLabel}
              </button>
              {status === 'error' && <p className="form-error">{t.error}</p>}
            </form>

            <div className="social-row">
              <a href="https://github.com/vijuksama" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/vijuksama" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
