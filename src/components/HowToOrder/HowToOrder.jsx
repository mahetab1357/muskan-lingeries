import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './HowToOrder.module.css';

gsap.registerPlugin(ScrollTrigger);

const WA_LINK = 'https://wa.me/919819942566';

const steps = [
  {
    num: '1', colorClass: 'circle1',
    emoji: '💬', title: 'WhatsApp Us',
    desc: 'Send us a message on WhatsApp with your requirements',
    link: { label: 'Open WhatsApp →', href: WA_LINK },
  },
  {
    num: '2', colorClass: 'circle2',
    emoji: '📋', title: 'Share Requirements',
    desc: 'Tell us size, color, quantity, and product type',
    link: null,
  },
  {
    num: '3', colorClass: 'circle3',
    emoji: '✅', title: 'Confirm & Receive',
    desc: 'Confirm your order and receive at your doorstep or visit our store',
    link: null,
  },
];

export default function HowToOrder() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const stepEls = sectionRef.current?.querySelectorAll(`.${styles.step}`);
    if (!stepEls) return;

    gsap.fromTo(stepEls,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      }
    );
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <h2 className="section-heading">How to Order</h2>
      <p className="section-sub">Simple 3-step process</p>

      <div className={styles.steps}>
        {steps.map((s) => (
          <div key={s.num} className={styles.step}>
            <div className={`${styles.circle} ${styles[s.colorClass]}`}>{s.num}</div>
            <div className={styles.stepTitle}>{s.emoji} {s.title}</div>
            <p className={styles.stepDesc}>{s.desc}</p>
            {s.link && (
              <a href={s.link.href} target="_blank" rel="noreferrer" className={styles.stepLink}>
                {s.link.label}
              </a>
            )}
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <a href={WA_LINK} target="_blank" rel="noreferrer" className={styles.ctaBtn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Order on WhatsApp Now
        </a>
      </div>
    </section>
  );
}
