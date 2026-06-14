import { useState, useEffect, useRef, useCallback } from 'react';
import testimonials from '../../data/testimonials';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef(null);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [paused, next]);

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStart.current = null;
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>What Our Customers Say</h2>
      <p className={styles.subtext}>Real reviews from real customers</p>

      <div
        className={styles.carouselWrapper}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className={styles.track}>
          <div className={styles.slides} style={{ transform: `translateX(-${current * 100}%)` }}>
            {testimonials.map((t) => (
              <div key={t.name} className={styles.card}>
                <div className={styles.stars}>{'★'.repeat(t.rating)}</div>
                <p className={styles.quote}>{t.text}</p>
                <div className={styles.author}>
                  <div className={styles.avatar}>{t.avatar}</div>
                  <div>
                    <div className={styles.name}>{t.name}</div>
                    <div className={styles.location}>{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <button className={styles.arrow} onClick={prev} aria-label="Previous">‹</button>
          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.active : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button className={styles.arrow} onClick={next} aria-label="Next">›</button>
        </div>
      </div>
    </section>
  );
}
