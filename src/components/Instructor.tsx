"use client";

import styles from "./Instructor.module.css";
import Link from "next/link";

export default function Instructor() {
  return (
    <section id="instructor" className={`section ${styles.instructor}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <div className={styles.decorativeShape}></div>
            <div className={styles.imagePlaceholder}>
              {/* Image 2 -> INSTRUCTOR IMAGE (woman in saree) */}
<img 
  src="public/images/WhatsApp Image 2026-05-02 at 10.30.05 PM.jpeg" 
  alt="Richa Tattva Yoga Logo"
  style={{ height: '40px', width: 'auto' }}
/>
            </div>
          </div>
          
          <div className={styles.contentCol}>
            <h2>Meet Richa Mishra</h2>
            <div className={styles.title} style={{ marginBottom: '0.25rem' }}>Founder & Lead Yoga Instructor</div>
            <div className={styles.title} style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '1.1rem' }}>15+ Years of Experience</div>
            
            <div className={styles.story}>
              <p>
                Richa Mishra is a highly experienced yoga educator with 15+ years of practice, blending scientific knowledge with traditional yogic wisdom. With a strong academic and therapeutic background, she has worked with defense personnel, hospitals, corporates, and health-tech platforms.
              </p>
              
              <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-light)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>MSc in Yogic Science – Annamalai University</li>
                <li>Certified Yoga Instructor – SVYASA University</li>
                <li>Yoga Wellness Instructor Level-2 – Ministry of AYUSH</li>
                <li>Experience with Naval Base Kochi, BEL Bangalore, and INHS Sanjivani Hospital</li>
                <li>Expertise in mental health, therapeutic yoga, and workplace wellness</li>
              </ul>
              
              <div style={{ marginTop: '2rem' }}>
                <Link href="/instructor" className="btn-primary">
                  Know Your Instructor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
