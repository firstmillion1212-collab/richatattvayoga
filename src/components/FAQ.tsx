"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";
import { ChevronDown } from "lucide-react";
import classNames from "classnames";

const faqs = [
  {
    question: "Do I need any prior experience to join the classes?",
    answer: "Not at all! We have classes tailored for all levels, including complete beginners. I will guide you step-by-step to ensure you feel comfortable and safe."
  },
  {
    question: "What should I wear to a class?",
    answer: "Wear comfortable, breathable clothing that allows you to move freely. Keep a water bottle and a small towel nearby. Yoga is typically practiced barefoot, so no special footwear is needed."
  },
  {
    question: "How long is each session?",
    answer: "A typical group session lasts for 60 minutes. 1-on-1 sessions are customized based on your specific requirements."
  },
  {
    question: "Can I do yoga if I have a pre-existing injury or medical condition?",
    answer: "Yes, but it's important to consult your physician first. Please inform me about any injuries or conditions before the class so I can provide suitable modifications for the poses."
  },
  {
    question: "Are your yoga classes online or in-person?",
    answer: "All of our yoga classes and teacher training programs are conducted 100% online via live video sessions. This allows you to practice from the comfort of your home while receiving dedicated, personalized instruction."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className={`section ${styles.faq}`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before stepping onto the mat.</p>
        </div>

        <div className={styles.accordion}>
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={classNames(styles.item, { [styles.open]: openIdx === idx })}
            >
              <button 
                className={styles.question}
                onClick={() => toggleFaq(idx)}
              >
                {faq.question}
                <ChevronDown className={styles.icon} size={20} />
              </button>
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
