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
              {/* Replace the src with your actual image path, e.g., /images/richa-mishra.jpg */}
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <p>Instructor Image</p>
                <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Place your image here</p>
              </div>
            </div>
          </div>
          
          <div className={styles.contentCol}>
            <h2>Meet Richa Mishra</h2>
            <div className={styles.title}>Founder & Lead Instructor</div>
            
            <div className={styles.story}>
              <p>
                My journey with yoga started over a decade ago. Coming from a technical background, 
                I discovered yoga as a powerful tool to manage stress and find balance in a fast-paced world.
              </p>
              <p>
                Today, I am dedicated to sharing this transformative practice, helping my students 
                build physical strength, mental clarity, and emotional resilience.
              </p>
              
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
