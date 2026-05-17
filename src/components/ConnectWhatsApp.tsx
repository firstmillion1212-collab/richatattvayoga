import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function ConnectWhatsApp() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--accent)', textAlign: 'center', padding: '4rem 0' }}>
      <div className="container">
        <h2 style={{ color: 'var(--secondary)', marginBottom: '1rem', fontSize: '2rem' }}>Ready to Begin Your Journey?</h2>
        <p style={{ color: 'var(--secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto', opacity: 0.9 }}>
          Connect with us directly on WhatsApp to get quick answers about class schedules, pricing, and personalized plans.
        </p>
        <a 
          href="https://wa.me/917892034782" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ 
            backgroundColor: 'var(--secondary)', 
            color: 'var(--white)', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            padding: '1rem 2rem', 
            fontSize: '1.1rem',
            border: 'none',
            borderRadius: 'var(--radius-full)',
            transition: 'transform 0.2s',
            textDecoration: 'none'
          }}
        >
          <MessageCircle size={24} />
          Connect with me on WhatsApp
        </a>
      </div>
    </section>
  );
}
