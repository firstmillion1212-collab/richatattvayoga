"use client";

import { useState } from "react";
import styles from "./Gallery.module.css";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const items = Array.from({ length: 15 }, (_, i) => i + 1);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % items.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
    }
  };

  return (
    <section id="gallery" className={`section ${styles.gallery}`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Workshops & Community Impact</h2>
          <p>Glimpses from our corporate sessions, workshops, and retreats.</p>
        </div>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <div 
              key={item} 
              className={styles.gridItem} 
              onClick={() => setSelectedIndex(index)}
              style={{ cursor: 'pointer' }}
            >
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

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className={styles.lightbox} onClick={() => setSelectedIndex(null)}>
          <button className={styles.closeBtn} onClick={() => setSelectedIndex(null)}>
            <X size={32} />
          </button>
          
          <button className={styles.prevBtn} onClick={handlePrev}>
            <ChevronLeft size={48} />
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <Image
              src={`/images/gallery-${items[selectedIndex]}.jpeg`}
              alt={`Yoga Workshop ${items[selectedIndex]}`}
              fill
              style={{ objectFit: 'contain' }}
              sizes="100vw"
            />
          </div>

          <button className={styles.nextBtn} onClick={handleNext}>
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
}