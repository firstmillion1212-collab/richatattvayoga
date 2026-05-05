import styles from "./Footer.module.css";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <img 
                src="/images/logo.png" 
                alt="Richa Tattva Yoga Logo"
                style={{ width: '40px', height: '40px', objectFit: 'contain' }}
              />
              <h3 style={{ marginBottom: 0 }}>Richa Tattva <span>Yoga</span></h3>
            </div>
            <p>
              Mind • Body • Spirit<br/>
              Empowering your wellness journey through personalized yoga practices.
            </p>
          </div>
          
          <div>
            <h4 className={styles.title}>Quick Links</h4>
            <ul className={styles.links}>
              <li className={styles.link}><Link href="/#why-yoga">Why Yoga</Link></li>
              <li className={styles.link}><Link href="/#pricing">Pricing</Link></li>
              <li className={styles.link}><Link href="/instructor">Meet the Instructor</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.title}>Contact</h4>
            <div className={styles.contactInfo}>
              <p>Yeshwanthpur, Bangalore</p>
              <p>+91 7892034782</p>
              <p>firstmillion1212@gmail.com</p>
            </div>
          </div>

          <div>
            <h4 className={styles.title}>Connect With Us</h4>
            <div className={styles.socialLinks}>
              <a href="https://www.instagram.com/richa_tattvayoga/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100063961543037" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.youtube.com/@Richa_Tattvayoga" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube">
                <FaYoutube size={24} />
              </a>
              <a href="https://wa.me/917892034782" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Richa Tattva Yoga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
