import styles from "./WhatsAppButton.module.css";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "917204637222";
  const message = "Hi, I'm interested in your yoga sessions";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.whatsappBtn}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className={styles.tooltip}>Chat with us!</span>
    </a>
  );
}
