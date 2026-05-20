"use client";

import { useState } from "react";
import styles from "./Pricing.module.css";
import { Check } from "lucide-react";
import classNames from "classnames";

const plans = {
  oneOnOne: [
    {
      name: "Customized Private Journey",
      price: "Flexible Pricing",
      sessions: "Personalized Schedule",
      features: [
        "Fully customizable according to student needs",
        "Personalized one-on-one sessions",
        "Pricing depends on requirements/goals",
        "ONLINE ONLY via live video sessions"
      ],
      highlight: true,
      customCTA: "Contact us to know pricing based on your requirements."
    }
  ],
  group: [
    {
      name: "2 Days / Week",
      originalPrice: "₹1500",
      price: "₹999 / month",
      sessions: "Days: Monday, Wednesday, Friday\nTimings: 7:00 AM – 8:00 AM or 6:15 PM – 7:15 PM",
      features: [
        "Days can be chosen out of Mon/Wed/Fri",
        "Timings can be chosen",
        "Access to live group classes",
        "Beginner and all levels friendly",
        "ONLINE ONLY via live video sessions"
      ],
      highlight: false
    },
    {
      name: "3 Days / Week",
      originalPrice: "₹2000",
      price: "₹1499 / month",
      sessions: "Days: Monday, Wednesday, Friday\nTimings: 7:00 AM – 8:00 AM or 6:15 PM – 7:15 PM",
      features: [
        "Timings can be chosen",
        "Access to live group classes",
        "Beginner and all levels friendly",
        "ONLINE ONLY via live video sessions"
      ],
      highlight: true
    }
  ]
};

export default function Pricing() {
  const [isGroup, setIsGroup] = useState(true);
  const activePlans = isGroup ? plans.group : plans.oneOnOne;

  return (
    <section id="pricing" className={`section ${styles.pricing}`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Investment in Yourself</h2>
          <p>Choose the plan that best fits your wellness journey.</p>
          
          <div className={styles.toggle}>
            <button 
              className={classNames(styles.toggleBtn, { [styles.active]: !isGroup })}
              onClick={() => setIsGroup(false)}
            >
              One-on-One
            </button>
            <button 
              className={classNames(styles.toggleBtn, { [styles.active]: isGroup })}
              onClick={() => setIsGroup(true)}
            >
              Group Sessions
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {activePlans.map((plan, idx) => (
            <div key={idx} className={classNames(styles.card, { [styles.highlight]: plan.highlight })}>
              <h3 className={styles.planName}>{plan.name}</h3>
              {(plan as any).originalPrice && (
                <div className={styles.originalPrice}>{(plan as any).originalPrice}</div>
              )}
              <div className={styles.planPrice}>{plan.price}</div>
              <div className={styles.sessionsText}>{plan.sessions}</div>
              
              <ul className={styles.features}>
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className={styles.feature}>
                    <Check size={18} className={styles.featureIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {(plan as any).customCTA ? (
                <div style={{ textAlign: 'center', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--secondary)' }}>
                  {(plan as any).customCTA}
                </div>
              ) : null}

              <button 
                className={`btn-primary ${styles.btn}`}
                onClick={() => {
                  const modal = document.getElementById('book-demo') as HTMLDialogElement;
                  if (modal) modal.showModal();
                }}
              >
                Contact to Book
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
