"use client";

import styles from "./Instructor.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Instructor() {
  return (
    <section id="instructor" className={`section ${styles.instructor}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <div className={styles.decorativeShape}></div>
            <div className={styles.imagePlaceholder}>
              <Image 
                src="/images/instructor.jpeg" 
                alt="Richa Mishra - Yoga Instructor"
                width={500}
                height={600}
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 'var(--radius-md)', aspectRatio: '4/5' }}
                priority
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
