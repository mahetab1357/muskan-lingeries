import styles from './MobileBottomBar.module.css';

const WA_LINK = 'https://wa.me/919819942566';

export default function MobileBottomBar() {
  return (
    <div className={styles.bar}>
      <a href="tel:9372455712" className={`${styles.btn} ${styles.callBtn}`}>
        📞 Call Now
      </a>
      <a href={WA_LINK} target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.waBtn}`}>
        💬 WhatsApp Order
      </a>
    </div>
  );
}
