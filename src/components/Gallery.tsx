"use client";

import styles from "./Gallery.module.css";
import Image from "next/image";

export default function Gallery() {
  const items = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <section id="gallery" className={`section ${styles.gallery}`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Workshops & Community Impact</h2>
          <p>Glimpses from our corporate sessions, workshops, and retreats.</p>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item} className={styles.gridItem}>
              <Image
                src={`/images/gallery-${item}.jpeg`}
                alt={`Yoga Workshop ${item}`}
                fill
                sizes="(max-width: 600px) 80vw, (max-width: 900px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}