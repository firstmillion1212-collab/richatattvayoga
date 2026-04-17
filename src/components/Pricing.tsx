"use client";

import { useState } from "react";
import styles from "./Pricing.module.css";
import { Check } from "lucide-react";
import classNames from "classnames";

const plans = {
  oneOnOne: [
    {
      name: "Starter",
      sessions: "4 Sessions / Month",
      features: ["1 session per week", "Personalized assessment", "Flexible timing", "Email support"],
      highlight: false
    },
    {
      name: "Premium",
      sessions: "8 Sessions / Month",
      features: ["2 sessions per week", "Customized diet plan", "Priority scheduling", "WhatsApp support"],
      highlight: true
    },
    {
      name: "Elite",
      sessions: "12 Sessions / Month",
      features: ["3 sessions per week", "Advanced postures", "Meditation guidance", "24/7 priority support"],
      highlight: false
    }
  ],
  group: [
    {
      name: "Basic",
      sessions: "2 Days / Week",
      features: ["Access to group classes", "Beginner friendly", "Community support"],
      highlight: false
    },
    {
      name: "Standard",
      sessions: "3 Days / Week",
      features: ["Access to all group classes", "Mixed levels", "Monthly progress tracking"],
      highlight: true
    },
    {
      name: "Unlimited",
      sessions: "6 Days / Week",
      features: ["Unlimited class access", "Special workshops included", "Advanced techniques"],
      highlight: false
    }
  ]
};

export default function Pricing() {
  const [isGroup, setIsGroup] = useState(false);
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
              <div className={styles.planPrice}>{plan.sessions}</div>
              
              <ul className={styles.features}>
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className={styles.feature}>
                    <Check size={18} className={styles.featureIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`btn-primary ${styles.btn}`}
                onClick={() => {
                  const modal = document.getElementById('book-demo') as HTMLDialogElement;
                  if (modal) {
                    // We could potentially set the session type in the modal state here
                    modal.showModal();
                  }
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
