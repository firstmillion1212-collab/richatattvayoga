"use client";

import Image from "next/image";
import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image 
        src="/images/hero_yoga_bg.png" 
        alt="Calm luxury yoga studio" 
        fill
        priority
        className={styles.bgImage}
      />
      <div className={styles.overlay}></div>
      
      <div className="container">
        <div className={`${styles.content} animate-fade-in`}>
          <h1 className={styles.title}>Transform Your Life Through Yoga</h1>
          <p className={styles.subtitle}>
            Personalized yoga sessions for inner peace, strength, and wellness.
          </p>
          
          <div className={styles.ctaGroup}>
            <button className="btn-primary" onClick={() => (document.getElementById('book-demo') as HTMLDialogElement)?.showModal()}>
              Book a Free Demo Class
            </button>
            <Link href="#contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>

          <div className={styles.statsGrid}>
            <div className={`glass-card ${styles.statCard}`}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={`glass-card ${styles.statCard}`}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Happy Students</div>
            </div>
            <div className={`glass-card ${styles.statCard}`}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Classes Monthly</div>
            </div>
            <div className={`glass-card ${styles.statCard}`}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
