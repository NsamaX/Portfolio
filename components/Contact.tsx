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
          </div>
        </div>
      </div>
    </section>
  );
}
