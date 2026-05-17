import React from 'react';
import styles from './TeacherTraining.module.css';
import { Award, BookOpen, UserCheck, Heart, MessageCircle, Mail } from 'lucide-react';

const TeacherTraining = () => {
  return (
    <section className={`section ${styles.trainingSection}`} id="teacher-training">
      <div className="container">
        <div className={styles.header}>
          <h2>Online Teacher Training Program</h2>
          <p>Transform your passion into a fulfilling career with expert-led online training</p>
        </div>

        <div className={styles.splitLayout}>
          {/* Left Panel */}
          <div className={styles.leftPanel}>
            <h3>Become a Certified Yoga Teacher Online</h3>
            <p className={styles.overviewText}>
              Our comprehensive teacher training program is designed to deepen your practice and give you the skills, confidence, and certification needed to teach yoga professionally. Led by <strong>Richa Mishra</strong> (MSc Yogic Science + AYUSH certified), who brings over 15+ years of extensive experience teaching across hospitals, corporate environments, and the naval base. All sessions are conducted 100% online.
            </p>
            
            <div className={styles.focusAreasCard}>
              <h4>Core Focus Areas</h4>
              <ul className={styles.focusList}>
                <li>Traditional Yogic Philosophy & Modern Application</li>
                <li>Asana Mastery & Teaching Methodology</li>
                <li>Pranayama, Meditation & Relaxation Techniques</li>
                <li>Therapeutic Yoga for Special Populations</li>
                <li>Anatomy, Physiology & Alignment</li>
                <li>Class Sequencing & Workshop Design</li>
              </ul>
            </div>
          </div>

          {/* Right Panel */}
          <div className={styles.rightPanel}>
            <div className={`glass-card ${styles.highlightCard}`}>
              <div className={styles.iconWrapper}><Award size={24} /></div>
              <div>
                <h4>Ministry of AYUSH Certified</h4>
                <p>Curriculum aligned with government standards for globally recognized certification.</p>
              </div>
            </div>
            
            <div className={`glass-card ${styles.highlightCard}`}>
              <div className={styles.iconWrapper}><BookOpen size={24} /></div>
              <div>
                <h4>Comprehensive Curriculum</h4>
                <p>In-depth study of theory and practical applications of classical yoga.</p>
              </div>
            </div>
            
            <div className={`glass-card ${styles.highlightCard}`}>
              <div className={styles.iconWrapper}><UserCheck size={24} /></div>
              <div>
                <h4>Personal Guidance</h4>
                <p>Direct mentorship and individual attention throughout your journey.</p>
              </div>
            </div>
            
            <div className={`glass-card ${styles.highlightCard}`}>
              <div className={styles.iconWrapper}><Heart size={24} /></div>
              <div>
                <h4>Holistic Approach</h4>
                <p>Integrating physical postures with mental and spiritual wellness.</p>
              </div>
            </div>
          </div>
        </div>

        {/* What You Will Gain */}
        <div className={styles.whatYouGain}>
          <h3>What You Will Gain</h3>
          <div className={styles.gainGrid}>
            <div className={styles.gainItem}>
              <h5>Professional Career</h5>
              <p>Build a sustainable career as a certified yoga instructor.</p>
            </div>
            <div className={styles.gainItem}>
              <h5>Diverse Teaching Skills</h5>
              <p>Learn to teach corporate groups, seniors, and therapeutic classes.</p>
            </div>
            <div className={styles.gainItem}>
              <h5>Deep Knowledge</h5>
              <p>Understand anatomy, physiology, and yogic philosophy thoroughly.</p>
            </div>
            <div className={styles.gainItem}>
              <h5>Workshop Confidence</h5>
              <p>Gain the confidence to design and conduct specialized workshops.</p>
            </div>
            <div className={styles.gainItem}>
              <h5>Personal Growth</h5>
              <p>Deepen your personal practice and master mental wellness techniques.</p>
            </div>
            <div className={styles.gainItem}>
              <h5>Ongoing Mentorship</h5>
              <p>Receive continued support even after certification completion.</p>
            </div>
          </div>
        </div>

        {/* Program Details */}
        <div className={styles.programDetails}>
          <div className={styles.detailsGrid}>
            <div className={styles.detailBlock}>
              <span>Duration</span>
              <strong>200 Hours / 2 Months</strong>
            </div>
            <div className={styles.detailBlock}>
              <span>Mode</span>
              <strong>100% Online</strong>
            </div>
            <div className={styles.detailBlock}>
              <span>Fees</span>
              <strong>₹5000</strong>
            </div>
            <div className={styles.detailBlock}>
              <span>Certification</span>
              <strong>AYUSH Aligned</strong>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h3>Ready to Begin Your Teaching Journey?</h3>
          <div className={styles.ctaButtons}>
            <a href="https://wa.me/917892034782?text=Hi,%20I'm%20interested%20in%20the%20Teacher%20Training%20Certification" target="_blank" rel="noopener noreferrer" className={styles.btnCta}>
              <MessageCircle size={20} />
              Apply via WhatsApp
            </a>
            <a href="mailto:firstmillion1212@gmail.com?subject=Teacher Training Application" className={styles.btnOutline}>
              <Mail size={20} />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherTraining;
