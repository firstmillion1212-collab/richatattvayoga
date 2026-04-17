"use client";

import styles from "./WhyYoga.module.css";
import { Activity, Brain, Smile, Zap, ShieldAlert, Heart } from "lucide-react";

const benefits = [
  {
    title: "Physical Wellness",
    description: "Improve flexibility, build strength, and enhance your overall physical health through targeted asanas.",
    icon: <Activity size={28} />
  },
  {
    title: "Mental Clarity",
    description: "Clear your mind and improve focus with mindful breathing and meditation practices.",
    icon: <Brain size={28} />
  },
  {
    title: "Stress Relief",
    description: "Release tension and lower cortisol levels, bringing a sense of deep calm to your nervous system.",
    icon: <Smile size={28} />
  },
  {
    title: "Energy & Vitality",
    description: "Awaken your body's natural energy reserves, leaving you feeling revitalized and refreshed.",
    icon: <Zap size={28} />
  },
  {
    title: "Injury Prevention",
    description: "Enhance body awareness and joint stability to prevent everyday injuries and improve posture.",
    icon: <ShieldAlert size={28} />
  },
  {
    title: "Emotional Balance",
    description: "Connect with your inner self to cultivate emotional stability and a positive outlook on life.",
    icon: <Heart size={28} />
  }
];

export default function WhyYoga() {
  return (
    <section id="why-yoga" className={`section ${styles.whyYoga}`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Why Choose Yoga?</h2>
          <p>
            Yoga is more than just physical postures. It is a holistic practice that unites the mind, body, and spirit, offering profound benefits for your overall well-being.
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {benefit.icon}
              </div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDesc}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
