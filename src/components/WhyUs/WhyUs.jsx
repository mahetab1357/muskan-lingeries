import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './WhyUs.module.css';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: '🏭', title: 'Direct Manufacturer', desc: 'We manufacture directly — best quality at lowest price' },
  { icon: '💰', title: 'Wholesale Available', desc: 'Special rates for bulk orders. Call us for wholesale pricing' },
  { icon: '📦', title: 'All Sizes Available', desc: '28 to 44+ in bra. S to 3XL in panties. We have all sizes' },
  { icon: '⭐', title: 'Premium Quality', desc: 'Quality checked products. No compromise on comfort' },
  { icon: '🚀', title: 'Fast Order Processing', desc: 'Quick order confirmation via WhatsApp. Same day dispatch' },
  { icon: '🏪', title: 'Visit Our Store', desc: 'Shop No. 84, Janta Cloth Market, Dadar West, Mumbai' },
];

export default function WhyUs() {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(`.${styles.card}`);
    if (!cards) return;

    gsap.fromTo(cards,
      { opacity: 0, y: 40, scale: 0.9 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          once: true,
        },
      }
    );
  }, []);

  return (
    <section className={styles.section} id="whyus">
      <h2 className="section-heading">Why Choose Muskan?</h2>
      <p className="section-sub">Trusted by thousands of customers across Mumbai</p>

      <div className={styles.grid} ref={gridRef}>
        {features.map((f) => (
          <div key={f.title} className={styles.card}>
            <div className={styles.iconCircle}>{f.icon}</div>
            <div className={styles.title}>{f.title}</div>
            <p className={styles.desc}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
