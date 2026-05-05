import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import styles from './instructor.module.css';
import { GraduationCap, Award, BookOpen, Star, Clock, Heart, Users, Shield, Camera } from 'lucide-react';
import Image from 'next/image';
import Gallery from '@/components/Gallery';

export const metadata = {
  title: 'About the Instructor | Richa Tattva Yoga',
  description: 'Learn more about Richa Mishra, founder and lead instructor at Richa Tattva Yoga.',
};

export default function InstructorPage() {
  return (
    <>
      <Navbar />
      <main className={styles.pageWrapper}>
        <div className={styles.hero}>
          <div className="container">
            <h1>Richa Mishra</h1>
            <p>Founder & Lead Yoga Instructor</p>
            <p style={{ marginTop: '0.5rem', fontSize: '1rem' }}>Blending Science, Spirituality, and Therapeutic Yoga for Holistic Well-being</p>
          </div>
        </div>

        <div className={`container ${styles.contentSection}`}>
          <div className={styles.splitLayout}>
            <div className={styles.imagePlaceholder}>
              <Image 
                src="/images/instructor.jpeg" 
                alt="Richa Mishra - Yoga Instructor"
                width={500}
                height={700}
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 'var(--radius-md)', aspectRatio: '3/4' }}
                priority
              />
            </div>

            <div className={styles.story}>
              <h2>My Journey</h2>
              <p>
                Richa Mishra’s journey into yoga is as unique as it is inspiring. With a strong foundation in technical education—holding degrees in B.Tech (Electronics & Communication Engineering), M.Tech (VLSI Design), and B.Ed (Bachelor of Education)—she spent years in the academic and engineering world. Her experience as an educator and professor gave her a structured, scientific approach to learning and teaching.
              </p>
              <p>
                However, a deeper calling toward holistic health, mental well-being, and the profound science of yoga led her to pursue an MSc in Yogic Science from Annamalai University. This transition was not just a career change—it was a life transformation. Combining her analytical mindset with the ancient wisdom of yoga, Richa developed a teaching methodology that is both scientifically grounded and spiritually enriching.
              </p>
              <p>
                Today, with over 15+ years of dedicated practice and teaching experience, she has impacted diverse communities—from defense personnel and corporate employees to patients requiring therapeutic care. Her approach focuses on integrating yoga into modern lifestyles for sustainable physical, mental, and emotional well-being.
              </p>
              <blockquote style={{ fontStyle: 'italic', borderLeft: '4px solid var(--primary)', paddingLeft: '1.5rem', marginTop: '2.5rem', fontSize: '1.25rem', color: 'var(--secondary)' }}>
                "Yoga is not just practice—it is a bridge between science and self-awareness."
              </blockquote>
            </div>
          </div>

          <div className={styles.qualifications} style={{ marginTop: '5rem' }}>
            <h3 style={{ textAlign: 'center', color: 'var(--primary)', marginBottom: '3rem', fontSize: '2rem' }}>Professional & Academic Background</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              <div>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><BookOpen /> Academic Background</h4>
                <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>B.Tech – Electronics & Communication Engineering</li>
                  <li>M.Tech – VLSI Design</li>
                  <li>B.Ed – Bachelor of Education</li>
                  <li>MSc in Yogic Science – Annamalai University</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Award /> Certifications</h4>
                <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>Certified Yoga Instructor – SVYASA University, Bangalore</li>
                  <li>Yoga Wellness Instructor Level-2 – Ministry of AYUSH, Government of India</li>
                  <li>Authorized Yoga Volunteer Certification Course Trainer – Ministry of AYUSH</li>
                  <li>Trained in: Reiki, Progressive Muscle Relaxation Therapy, Face Yoga, Chair Yoga, Laughter Yoga</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock /> Professional Experience</h4>
                <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li><strong>Yoga Wellness Instructor</strong> – Station Health Organisation, Naval Base Kochi (Led wellness programs for naval personnel and their families)</li>
                  <li><strong>Yoga Therapist</strong> – INHS Sanjivani Hospital, Kochi (Conducted sessions for psychiatric patients - anxiety, depression, mood disorders)</li>
                  <li><strong>Corporate Yoga & Wellness Trainer</strong> – Bharat Electronics Ltd (BEL), Bangalore (Designed programs to improve employee health and productivity)</li>
                  <li><strong>Yoga Expert</strong> – Circle Health (Health-Tech Startup)</li>
                  <li><strong>Yoga Fitness Trainer</strong> – Delivered high-energy sessions for weight management and physical wellness</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Star /> Areas of Specialization</h4>
                <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>Mental Health Support (Anxiety, Depression, Mood Disorders)</li>
                  <li>Weight Management & Therapeutic Yoga</li>
                  <li>Workplace Stress & Productivity Enhancement</li>
                  <li>Women’s Health & Post-Pregnancy Yoga</li>
                  <li>Senior Citizens & Chair Yoga</li>
                  <li>Psychiatric Patient Care</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Workshops & Community Impact (Gallery) */}
        <Gallery />

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
