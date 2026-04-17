"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
        <Link href="/" className={styles.logo}>
          Richa Tattva <span>Yoga</span>
        </Link>

        <div className={styles.navLinks}>
          <Link href="#why-yoga" className={styles.navLink}>Why Yoga</Link>
          <Link href="#schedule" className={styles.navLink}>Schedule</Link>
          <Link href="#pricing" className={styles.navLink}>Pricing</Link>
          <Link href="#instructor" className={styles.navLink}>Instructor</Link>
          <button className="btn-primary" onClick={() => (document.getElementById('book-demo') as HTMLDialogElement)?.showModal()}>
            Book a Free Demo
          </button>
        </div>

        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
