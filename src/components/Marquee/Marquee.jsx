import styles from './Marquee.module.css';

const items1 = ['BRA', 'PANTIES', 'WHOLESALE', 'RETAIL', 'ALL SIZES', 'MFG', 'BEST QUALITY', 'MUMBAI', 'DADAR', 'JANTA CLOTH MARKET'];
const items2 = ['28', '30', '32', '34', '36', '38', '40', '42', '44', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];

function MarqueeRow({ items, reverse }) {
  const doubled = [...items, ...items];
  return (
    <div className={`${styles.row} ${reverse ? styles.rowReverse : ''}`}>
      <div className={styles.items}>
        {doubled.map((item, i) => (
          <span key={i}>
            {item}
            <span className={styles.dot}> ✦ </span>
          </span>
        ))}
      </div>
      <div className={styles.items} aria-hidden>
        {doubled.map((item, i) => (
          <span key={i}>
            {item}
            <span className={styles.dot}> ✦ </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.track}>
        <MarqueeRow items={items1} reverse={false} />
      </div>
      <div className={styles.track}>
        <MarqueeRow items={items2} reverse={true} />
      </div>
    </div>
  );
}
