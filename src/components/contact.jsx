import { useState, useCallback } from "react";
import emailjs from '@emailjs/browser';

import palmUp from "../assets/collages/palm-up.png";
import reachingOut from "../assets/collages/reaching-out.png";

import "../styles/contact.css";

const EMAIL_CONFIG = {
  userId: import.meta.env.VITE_EMAILJS_USER_ID,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
};

const CONTACT_INFO = "If you would like to connect with me, please feel free to reach out via email or connect with me on social media.";

const BUTTON_STATES = {
  IDLE: "Send Message",
  SENDING: "Sending...",
};

const MESSAGE_STATUS = {
  SUCCESS: "✅ Sent Successfully!",
  ERROR: "❌ Failed to send message.",
  MISSING_CONFIG: "❌ Email service not configured.",
};

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const validateConfig = useCallback(() => {
    return EMAIL_CONFIG.serviceId && EMAIL_CONFIG.templateId && EMAIL_CONFIG.userId;
  }, []);

  const sendEmail = useCallback(async (e) => {
    e.preventDefault();

    if (!validateConfig()) {
      setStatusMessage(MESSAGE_STATUS.MISSING_CONFIG);
      return;
    }

    setIsLoading(true);
    setStatusMessage("");

    try {
      await emailjs.sendForm(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        e.target,
        EMAIL_CONFIG.userId
      );

      setStatusMessage(MESSAGE_STATUS.SUCCESS);
      e.target.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatusMessage(MESSAGE_STATUS.ERROR);
    } finally {
      setIsLoading(false);
    }
  }, [validateConfig]);

  return (
    <section id="contact">
      <h2>Get in Touch</h2>

      <img 
        id="palm-up" 
        src={palmUp} 
        alt="Collage Palm Up" 
        className="collage" 
      />

      <div className="content">
        <p>{CONTACT_INFO}</p>
        
        <form onSubmit={sendEmail}>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            required 
            disabled={isLoading}
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            required 
            disabled={isLoading}
          />
          <textarea 
            name="subject" 
            placeholder="Subject" 
            required 
            disabled={isLoading}
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            required 
            disabled={isLoading}
          />
          
          {statusMessage && (
            <p className="status-message">{statusMessage}</p>
          )}

          <img 
            id="reaching-out" 
            src={reachingOut} 
            alt="Collage Reaching Out" 
            className="collage" 
          />
          
          <button 
            type="submit" 
            disabled={isLoading}
            aria-label={isLoading ? "Sending message" : "Send message"}
          >
            {isLoading ? BUTTON_STATES.SENDING : BUTTON_STATES.IDLE}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;