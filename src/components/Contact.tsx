"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Get in Touch</h2>
          <p>Have questions? We'd love to hear from you.</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.infoCards}>

            <div className={styles.card}>
              <div className={styles.icon}><Phone size={24} /></div>
              <div className={styles.cardContent}>
                <h4>Call Us</h4>
                <p>+91 7204637222<br/>Mon-Sat: 6am to 8pm</p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}><Mail size={24} /></div>
              <div className={styles.cardContent}>
                <h4>Email Us</h4>
                <p>richatattvayoga@gmail.com<br/>We'll reply within 24 hours</p>
              </div>
            </div>
          </div>

          <div className={styles.formContainer}>
            {status === "success" && (
              <div className={styles.successMsg}>
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {status === "error" && (
              <div className={styles.errorMsg}>
                Something went wrong. Please try again later or contact us directly.
              </div>
            )}
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input type="text" id="name" name="name" className={styles.input} required />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input type="email" id="email" name="email" className={styles.input} required />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="subject" className={styles.label}>Subject</label>
                <input type="text" id="subject" name="subject" className={styles.input} required />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea id="message" name="message" className={styles.textarea} required></textarea>
              </div>
              
              <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
