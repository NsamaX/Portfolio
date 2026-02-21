import { useState, useCallback, useRef } from "react";
import { Pen } from "lucide-react";
import emailjs from "@emailjs/browser";

import palmUp from "../assets/collages/palm-up.png";
import reachingOut from "../assets/collages/reaching-out.png";

import { useI18n } from "../locales/i18n";

import "../styles/contact.css";

const EMAIL_CONFIG = {
  userId: import.meta.env.VITE_EMAILJS_USER_ID,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
};

function Contact() {
  const { t } = useI18n();
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const formRef = useRef(null);

  const validateConfig = useCallback(() => {
    return (
      EMAIL_CONFIG.serviceId && EMAIL_CONFIG.templateId && EMAIL_CONFIG.userId
    );
  }, []);

  const sendEmail = useCallback(
    async (e) => {
      e.preventDefault();

      if (!validateConfig()) {
        setStatusMessage(t("contact.status.missingConfig"));
        return;
      }

      setIsLoading(true);
      setStatusMessage("");

      try {
        await emailjs.sendForm(
          EMAIL_CONFIG.serviceId,
          EMAIL_CONFIG.templateId,
          e.target,
          EMAIL_CONFIG.userId,
        );

        setStatusMessage(t("contact.status.success"));
        e.target.reset();
        setIsFormValid(false);
      } catch (error) {
        console.error("Failed to send email:", error);
        setStatusMessage(t("contact.status.error"));
      } finally {
        setIsLoading(false);
      }
    },
    [validateConfig, t],
  );

  const handleFieldChange = useCallback(() => {
    if (formRef.current) {
      setIsFormValid(formRef.current.checkValidity());
    }
  }, []);

  return (
    <section id="contact">
      <h2>{t("contact.sectionTitle")}</h2>

      <img
        id="palm-up"
        src={palmUp}
        alt="Collage Palm Up"
        className="collage"
      />

      <div className="content">
        <p>{t("contact.info")}</p>

        <form ref={formRef} onSubmit={sendEmail}>
          <div className="form-field">
            <input
              type="text"
              name="name"
              placeholder={t("contact.placeholders.name")}
              required
              disabled={isLoading}
              onChange={handleFieldChange}
            />
            <Pen className="field-icon" aria-hidden="true" />
          </div>
          <div className="form-field">
            <input
              type="email"
              name="email"
              placeholder={t("contact.placeholders.email")}
              required
              disabled={isLoading}
              onChange={handleFieldChange}
            />
            <Pen className="field-icon" aria-hidden="true" />
          </div>
          <div className="form-field">
            <textarea
              name="subject"
              placeholder={t("contact.placeholders.subject")}
              required
              disabled={isLoading}
              onChange={handleFieldChange}
            />
            <Pen className="field-icon" aria-hidden="true" />
          </div>
          <div className="form-field message-field">
            <textarea
              name="message"
              placeholder={t("contact.placeholders.message")}
              required
              disabled={isLoading}
              onChange={handleFieldChange}
            />
            <Pen className="field-icon" aria-hidden="true" />
          </div>

          {statusMessage && <p className="status-message">{statusMessage}</p>}

          <img
            id="reaching-out"
            src={reachingOut}
            alt="Collage Reaching Out"
            className="collage"
          />

          <button
            type="submit"
            disabled={isLoading || !isFormValid}
            aria-label={
              isLoading ? t("contact.button.sending") : t("contact.button.idle")
            }
          >
            {isLoading ? t("contact.button.sending") : t("contact.button.idle")}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
