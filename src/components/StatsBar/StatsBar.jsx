import { useRef, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './StatsBar.module.css';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: 1000, suffix: '+', label: 'Customers' },
  { number: 50, suffix: '+', label: 'Products' },
  { number: 10, suffix: '+', label: 'Years Exp.' },
  { number: 4.9, suffix: '', label: '⭐ Rating', prefix: '' },
];

function CountUp({ target, suffix, prefix = '', decimals = 0 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => setVal(decimals > 0 ? obj.v.toFixed(decimals) : Math.round(obj.v)),
        });
      },
    });
  }, []);

  return (
    <span ref={ref}>
      {prefix}{val}{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <div className={styles.statsBar}>
      <div className={styles.grid}>
        {stats.map((s) => (
          <div key={s.label} className={styles.item}>
            <div className={styles.number}>
              <CountUp
                target={s.number}
                suffix={s.suffix}
                prefix={s.prefix || ''}
                decimals={s.number % 1 !== 0 ? 1 : 0}
              />
            </div>
            <div className={styles.label}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
