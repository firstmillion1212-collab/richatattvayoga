"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./Chatbot.module.css";
import { MessageSquare, X } from "lucide-react";

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Namaste! 🙏 Welcome to Richa Tattva Yoga. How can I assist you today?", sender: "bot" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleOptionClick = (optionText: string) => {
    // Add user message
    const userMsg: Message = { id: Date.now(), text: optionText, sender: "user" };
    setMessages(prev => [...prev, userMsg]);

    // Simulate bot thinking
    setTimeout(() => {
      let botResponse = "";
      
      if (optionText === "Pricing") {
        botResponse = "We offer both 1-on-1 personalized sessions and Group sessions. Prices start at 4 sessions/month. You can find full details in our Pricing section!";
      } else if (optionText === "Schedule") {
        botResponse = "We have morning and evening classes from Mon to Sat. For example, Morning Flow at 6:30 AM and Hatha Yoga at 5:00 PM. Check out the Schedule section for the full timetable.";
      } else if (optionText === "Book a Demo") {
        botResponse = "That's wonderful! You can click the 'Book a Free Demo Class' button anywhere on the page to submit your request, and Richa will reach out to confirm the timing.";
      } else {
        botResponse = "For more specific queries, please use the Contact Form or message us directly on WhatsApp!";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: "bot" }]);
    }, 600);
  };

  return (
    <div className={styles.chatbotContainer}>
      {!isOpen && (
        <button className={styles.toggleBtn} onClick={() => setIsOpen(true)} aria-label="Open Chat">
          <MessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.header}>
            <span>Tattva Assistant</span>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>
          
          <div className={styles.messages}>
            {messages.map(msg => (
              <div key={msg.id} className={`${styles.message} ${styles[msg.sender]}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.options}>
            <button className={styles.optionBtn} onClick={() => handleOptionClick("Pricing")}>
              Pricing
            </button>
            <button className={styles.optionBtn} onClick={() => handleOptionClick("Schedule")}>
              Schedule
            </button>
            <button className={styles.optionBtn} onClick={() => handleOptionClick("Book a Demo")}>
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
