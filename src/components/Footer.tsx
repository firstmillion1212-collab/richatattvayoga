import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h3>Richa Tattva <span>Yoga</span></h3>
            <p>
              Mind • Body • Spirit<br/>
              Empowering your wellness journey through personalized yoga practices.
            </p>
          </div>
          
          <div>
            <h4 className={styles.title}>Quick Links</h4>
            <ul className={styles.links}>
              <li className={styles.link}><Link href="#why-yoga">Why Yoga</Link></li>
              <li className={styles.link}><Link href="#pricing">Pricing</Link></li>
              <li className={styles.link}><Link href="#schedule">Schedule</Link></li>
              <li className={styles.link}><Link href="#instructor">Meet the Instructor</Link></li>
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
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Richa Tattva Yoga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
