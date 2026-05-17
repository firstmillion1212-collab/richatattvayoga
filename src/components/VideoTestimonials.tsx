"use client";

import { useState } from "react";
import styles from "./VideoTestimonials.module.css";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function VideoTestimonials() {
  const videoCount = 10;
  const items = Array.from({ length: videoCount }, (_, i) => i + 1);
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
    <section id="video-testimonials" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Video Testimonials</h2>
          <p>Real experiences and feedback from our students.</p>
        </div>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <div 
              key={item} 
              className={styles.gridItem} 
              onClick={() => setSelectedIndex(index)}
            >
              {/* Using #t=0.1 trick to force browsers to fetch the first frame as thumbnail */}
              <video 
                src={`/videos/video-${item}.mp4#t=0.1`} 
                className={styles.thumbnailVideo}
                preload="metadata"
                muted
                playsInline
              />
              <div className={styles.playOverlay}>
                <Play size={40} className={styles.playIcon} />
              </div>
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
            <video
              key={selectedIndex} // Force re-render when changing videos so autoplay works
              src={`/videos/video-${items[selectedIndex]}.mp4`}
              className={styles.fullVideo}
              controls
              autoPlay
              playsInline
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
