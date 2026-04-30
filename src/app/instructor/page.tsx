import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import styles from './instructor.module.css';
import { GraduationCap, Award, BookOpen, Star, Clock } from 'lucide-react';

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
            <h1>Meet Richa Mishra</h1>
            <p>Founder & Lead Instructor</p>
          </div>
        </div>

        <div className={`container ${styles.contentSection}`}>
          <div className={styles.splitLayout}>
            <div className={styles.imagePlaceholder}>
              <div style={{ textAlign: 'center' }}>
                <p>Instructor Portrait Image</p>
                <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Place your image here</p>
              </div>
            </div>

            <div className={styles.story}>
              <h2>My Journey</h2>
              <p>
                My journey with yoga started over a decade ago. Coming from a technical background, 
                I discovered yoga as a powerful tool to manage stress and find balance in a fast-paced world.
              </p>
              <p>
                Driven by a deep passion for holistic wellness, I transitioned from my engineering roots 
                (B.Tech & M.Tech) to fully embrace the ancient science of yoga. This shift was not just 
                about changing careers, but about finding my true calling in helping others achieve optimal 
                health.
              </p>
              <p>
                Today, I am dedicated to sharing this transformative practice. My teaching style blends 
                the traditional aspects of yogic science with modern anatomical understanding, ensuring 
                that every student builds physical strength, mental clarity, and emotional resilience 
                safely and effectively.
              </p>
              <p>
                Over the past 12 years, I have had the privilege of teaching in diverse environments, 
                from hospitals to corporate wellness programs and naval bases, adapting the practice to 
                meet the unique needs of each individual.
              </p>
            </div>
          </div>

          <div className={styles.qualifications}>
            <h3>Qualifications & Certifications</h3>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}><Star size={24} /></div>
                <div className={styles.timelineContent}>
                  <h4>MSc in Yogic Science</h4>
                  <p>In-depth academic and practical mastery of classical yoga traditions and philosophy.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}><Award size={24} /></div>
                <div className={styles.timelineContent}>
                  <h4>AYUSH Certified Yoga Practitioner</h4>
                  <p>Recognized by the Ministry of AYUSH, Government of India.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}><GraduationCap size={24} /></div>
                <div className={styles.timelineContent}>
                  <h4>Engineering Background</h4>
                  <p>B.Tech & M.Tech in Engineering, bringing an analytical and structured approach to teaching.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}><BookOpen size={24} /></div>
                <div className={styles.timelineContent}>
                  <h4>Educational Expertise</h4>
                  <p>Bachelor of Education (B.Ed), ensuring high-quality instructional methods.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}><Clock size={24} /></div>
                <div className={styles.timelineContent}>
                  <h4>12+ Years Experience</h4>
                  <p>Extensive experience teaching in hospitals, corporates, and the naval base.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
