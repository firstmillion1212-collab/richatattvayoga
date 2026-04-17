"use client";

import styles from "./Testimonials.module.css";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    role: "Regular Student",
    review: "Richa is an exceptional instructor. Her personalized attention in the 1-on-1 sessions helped me overcome my chronic back pain. I feel more energetic and alive!",
    initials: "PS"
  },
  {
    name: "Rohan Desai",
    role: "Corporate Professional",
    review: "Joining the group sessions was the best decision for my mental health. The environment is calm, and the guided meditation at the end of class is profoundly relaxing.",
    initials: "RD"
  },
  {
    name: "Anjali Gupta",
    role: "Beginner",
    review: "As a complete beginner, I was intimidated by yoga. Richa's patient approach and clear instructions made me fall in love with the practice. Highly recommended!",
    initials: "AG"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={`section ${styles.testimonials}`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Stories of Transformation</h2>
          <p>Hear from our community members about their journey with us.</p>
        </div>

        <div className={styles.grid}>
          {reviews.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <svg className={styles.quoteIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <div className={styles.rating}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className={styles.review}>"{item.review}"</p>
              
              <div className={styles.author}>
                <div className={styles.avatar}>{item.initials}</div>
                <div className={styles.authorInfo}>
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
