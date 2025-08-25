import { useState } from "react";

import emailjs from '@emailjs/browser';

import palmUp from "../assets/collage/palm-up.png";
import reachingOut from "../assets/collage/reaching-out.png";

import "../styles/contact.css";

function Contact() {
  const emailJsKey = {
    userId: import.meta.env.VITE_EMAILJS_USER_ID,
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  };

  const [buttonState, setButtonState] = useState("Send Message");
  const [messageStatus, setMessageStatus] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    setButtonState("Sending...");
    setMessageStatus("");

    if (!emailJsKey.serviceId || !emailJsKey.templateId || !emailJsKey.userId) {
      return;
    }

    emailjs.sendForm(emailJsKey.serviceId, emailJsKey.templateId, e.target, emailJsKey.userId)
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          setMessageStatus("✅ Sent Successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setMessageStatus("❌ Failed to send message.");
        }
      )
      .finally(() => {
        setButtonState("Send Message");
      });
  }

  return (
    <>
      <section id="contact">
        <h2>Get in Touch</h2>
        <div className="content">
          <p>
            If you would like to connect with me, please feel free to reach out via email or connect with me on social media.
          </p>
          <img id="palm-up" src={palmUp} alt="Collage Palm Up" className="collage" />
          <form onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="subject" placeholder="Subject" required ></textarea>
            <textarea name="message" placeholder="Message" required ></textarea>
            <p style={{ display: messageStatus ? "block" : "none" }}>{messageStatus}</p>
            <button type="submit">{buttonState}</button>
          </form>
        </div>
        <img id="reaching-out" src={reachingOut} alt="Collage Reaching Out" className="collage" />
      </section>
    </>
  );
}

export default Contact;