import React from 'react';
import styles from './YouTubeSection.module.css';

const YouTubeSection = () => {
  return (
    <section className={`section ${styles.youtubeSection}`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Watch & Experience Yoga</h2>
          <p>
            Get a glimpse of the teaching style, energy, and transformation you can expect.
          </p>
        </div>
        
        <div className={styles.videoWrapper}>
          <iframe 
            src="https://www.youtube.com/embed/r3YGcS_hHfU" 
            title="Richa Tattva Yoga Experience"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
