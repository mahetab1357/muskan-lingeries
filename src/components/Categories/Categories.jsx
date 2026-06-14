import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import categories from '../../data/categories';
import styles from './Categories.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Categories() {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(`.${styles.card}`);
    if (!cards) return;

    gsap.fromTo(cards,
      { opacity: 0, y: 60, scale: 0.9 },
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
    <section className={styles.section} id="categories">
      <h2 className="section-heading">Our Collections</h2>
      <p className="section-sub">Premium innerwear for every occasion</p>

      <div className={styles.grid} ref={gridRef}>
        {categories.map((cat) => (
          <a key={cat.id} href="#products" className={styles.card}>
            <div className={styles.gradientTop} style={{ background: cat.image ? 'transparent' : cat.gradient }}>
              {cat.image
                ? <img src={cat.image} alt={cat.name} className={styles.catImg} />
                : <span className={styles.icon}>{cat.icon}</span>
              }
              {cat.tag && <span className={styles.tag}>{cat.tag}</span>}
            </div>
            <div className={styles.info}>
              <div className={styles.catName}>{cat.name}</div>
              <div className={styles.catLabel}>{cat.label}</div>
              <div className={styles.explore}>Explore →</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
