"use client";

import styles from "./Gallery.module.css";

export default function Gallery() {

  // ✅ Correct image paths (NO "public/")
  const images = [
    "/images/WhatsApp Image 2026-05-02 at 10.30.02 PM.jpeg",
    "/images/WhatsApp Image 2026-05-02 at 10.30.03 PM (1).jpeg",
    "/images/WhatsApp Image 2026-05-02 at 10.30.03 PM.jpeg",
    "/images/WhatsApp Image 2026-05-02 at 10.30.04 PM (1).jpeg",
    "/images/WhatsApp Image 2026-05-02 at 10.30.04 PM (2).jpeg",
    "/images/WhatsApp Image 2026-05-02 at 10.30.04 PM.jpeg",
    "/images/WhatsApp Image 2026-05-02 at 10.30.05 PM (1).jpeg",
    "/images/WhatsApp Image 2026-05-02 at 10.30.05 PM (2).jpeg",
    "/images/WhatsApp Image 2026-05-02 at 10.30.06 PM (1).jpeg",
    "/images/WhatsApp Image 2026-05-02 at 10.30.06 PM (2).jpeg",
    "/images/WhatsApp Image 2026-05-02 at 10.30.06 PM.jpeg",
    "/images/WhatsApp Image 2026-05-02 at 10.30.07 PM (1).jpeg",
    "/images/WhatsApp Image 2026-05-02 at 10.30.07 PM (2).jpeg",
    "/images/WhatsApp Image 2026-05-02 at 10.30.07 PM.jpeg",
    "/images/WhatsApp Image 2026-05-02 at 10.30.08 PM.jpeg"
  ];

  return (
    <section id="gallery" className={`section ${styles.gallery}`}>
      <div className="container">

        <div className={styles.header}>
          <h2>Workshops & Community Impact</h2>
          <p>Glimpses from our corporate sessions, workshops, and retreats.</p>
        </div>

        <div className={styles.grid}>
          {images.map((src, index) => (
            <div key={index} className={styles.gridItem}>

              <img
                src={src}
                alt={`Workshop ${index + 1}`}
                className={styles.image}
              />

              <span className={styles.captionText}>
                {index % 3 === 0
                  ? "Corporate Session"
                  : index % 3 === 1
                  ? "Naval Workshop"
                  : "Group Training"}
              </span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}