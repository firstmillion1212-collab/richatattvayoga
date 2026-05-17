"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { Menu, X } from "lucide-react";
import classNames from "classnames";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={classNames(styles.navbar, { [styles.scrolled]: isScrolled })}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img 
            src="/images/logo.png" 
            alt="Richa Tattva Yoga Logo" 
            style={{ width: '40px', height: '40px', objectFit: 'contain' }}
          />
          <div>Richa Tattva <span>Yoga</span></div>
        </Link>

        <div className={classNames(styles.navLinks, { [styles.mobileOpen]: isMobileMenuOpen })}>
          <Link href="/#why-yoga" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Why Yoga</Link>
          <Link href="/#pricing" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
          <Link href="/instructor" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Instructor</Link>
          <Link href="/#teacher-training" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Teacher Training</Link>
          <Link href="/#video-testimonials" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Testimonials</Link>
          
          <button className={`btn-primary ${styles.mobileCta}`} onClick={() => {
            setIsMobileMenuOpen(false);
            (document.getElementById('book-demo') as HTMLDialogElement)?.showModal();
          }}>
            Book a Free Demo
          </button>
        </div>

        <div className={styles.navRight}>
          <button className={`btn-primary ${styles.desktopCta}`} onClick={() => (document.getElementById('book-demo') as HTMLDialogElement)?.showModal()}>
            Book a Free Demo
          </button>
          
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
}
