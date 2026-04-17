"use client";

import { useState } from "react";
import styles from "./BookDemoModal.module.css";
import { X } from "lucide-react";

export default function BookDemoModal() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const close = () => {
    const modal = document.getElementById('book-demo') as HTMLDialogElement;
    if (modal) {
      modal.close();
      setTimeout(() => setStatus("idle"), 300); // reset status after closing animation
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      session_type: formData.get("session_type"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
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
    <dialog id="book-demo" className={styles.modal}>
      <div className={styles.header}>
        <h3>Book a Free Demo Class</h3>
        <button className={styles.closeBtn} onClick={close}>
          <X size={24} />
        </button>
      </div>
      
      <div className={styles.body}>
        {status === "success" ? (
          <div className={styles.successMsg}>
            <h4>Thank you!</h4>
            <p>Your demo request has been received. We will contact you shortly to confirm the timing.</p>
            <button className="btn-secondary" onClick={close} style={{ marginTop: '1.5rem', width: '100%' }}>
              Close
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            {status === "error" && (
              <div className={styles.errorMsg}>
                Something went wrong. Please try again or contact us directly.
              </div>
            )}
            
            <div className={styles.inputGroup}>
              <label htmlFor="demo-name" className={styles.label}>Full Name</label>
              <input type="text" id="demo-name" name="name" className={styles.input} required />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="demo-email" className={styles.label}>Email Address</label>
              <input type="email" id="demo-email" name="email" className={styles.input} required />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="demo-phone" className={styles.label}>Phone Number</label>
              <input type="tel" id="demo-phone" name="phone" className={styles.input} required />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="demo-session" className={styles.label}>Preferred Session Type</label>
              <select id="demo-session" name="session_type" className={styles.select} required>
                <option value="">Select an option</option>
                <option value="one-on-one">1-on-1 Personalized Session</option>
                <option value="group">Group Class</option>
              </select>
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="demo-message" className={styles.label}>Any medical conditions or focus areas?</label>
              <textarea id="demo-message" name="message" className={styles.textarea}></textarea>
            </div>
            
            <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={loading}>
              {loading ? "Submitting..." : "Book Demo"}
            </button>
          </form>
        )}
      </div>
    </dialog>
  );
}
