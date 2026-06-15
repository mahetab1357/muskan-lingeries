import { useState } from 'react';
import styles from './Hero.module.css';
import b1 from '../../assets/images/b1.png';
import b2 from '../../assets/images/b2.png';
import p1 from '../../assets/images/p1.png';

const WA_LINK = 'https://wa.me/919819942566';

const cards = [
  { id: 0, image: b1, label: 'Bra Collection' },
  { id: 1, image: p1, label: 'Panties' },
  { id: 2, image: b2, label: 'Premium Quality' },
];

// positions[i] = which slot card i occupies: 'Main' | 'Left' | 'Right'
const INITIAL_POSITIONS = ['Main', 'Left', 'Right'];

export default function Hero() {
  const [positions, setPositions] = useState(INITIAL_POSITIONS);

  const handleCardClick = (clickedId) => {
    if (positions[clickedId] === 'Main') return; // already center

    setPositions((prev) => {
      const next = [...prev];
      const centerIdx = next.indexOf('Main');
      // swap clicked card with whoever is at center
      next[centerIdx] = next[clickedId];
      next[clickedId] = 'Main';
      return next;
    });
  };

  return (
    <section className={styles.hero} id="home">
      <div className={`${styles.decorCircle} ${styles.circle1}`} />
      <div className={`${styles.decorCircle} ${styles.circle2}`} />
      <div className={`${styles.decorCircle} ${styles.circle3}`} />

      <div className={styles.inner}>
        <div className={styles.textCol}>
          <div className={styles.badge}>
            ✦ Mumbai&apos;s Trusted Brand Since 20+ Years
          </div>

          <h1 className={styles.heading}>
            Style That<br />
            <span>Celebrates</span><br />
            You
          </h1>

          <p className={styles.subtext}>
            Premium quality bras, panties &amp; innerwear for every woman.<br />
            MFG, Wholesale &amp; Retail.
          </p>

          <div className={styles.ctaGroup}>
            <a href="#products" className="btn-rose">
              🛍️ Shop Collection
            </a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-outline">
              📞 WhatsApp Us
            </a>
          </div>

          <div className={styles.trustRow}>
            {['Quality Assured', 'All Sizes', 'Best Price', 'Fast Delivery'].map((t) => (
              <div key={t} className={styles.trustItem}>
                <span>✓</span> {t}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.imageCol}>
          {cards.map((card) => {
            const pos = positions[card.id];
            const isCenter = pos === 'Main';
            return (
              <div
                key={card.id}
                className={`${styles.card} ${styles[`card${pos}`]} ${!isCenter ? styles.clickable : ''}`}
                onClick={() => handleCardClick(card.id)}
              >
                <div className={styles.cardGradient}>
                  <img src={card.image} alt={card.label} className={styles.cardImg} />
                </div>
                <div className={styles.cardLabel}>{card.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
