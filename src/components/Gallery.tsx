"use client";

import styles from "./Gallery.module.css";
import { Camera } from "lucide-react";

export default function Gallery() {
  // Array of 5 placeholders for the gallery grid
  const items = [1, 2, 3, 4, 5];

  return (
    <section id="gallery" className={`section ${styles.gallery}`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Workshops & Gallery</h2>
          <p>Glimpses from our corporate sessions, workshops, and retreats.</p>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item} className={styles.gridItem}>
              {/* Replace these divs with Image components once you have actual images */}
              <div className={styles.placeholderText}>
                <Camera size={32} />
                <span>Gallery Image {item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
