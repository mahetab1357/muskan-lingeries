import styles from './Footer.module.css';

const navLinks = ['Home', 'Collections', 'Categories', 'About', 'Contact'];
const navHrefs = ['#home', '#products', '#categories', '#whyus', '#contact'];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <div>
            <div className={styles.logo}>
              <span className={styles.logoMain}>Muskan</span>
              <span className={styles.logoSub}>Lingeries</span>
            </div>
            <p className={styles.tagline}>Mumbai&apos;s Premium Lingerie Brand</p>
          </div>
          <ul className={styles.quickLinks}>
            {navLinks.map((l, i) => (
              <li key={l}><a href={navHrefs[i]}>{l}</a></li>
            ))}
          </ul>
        </div>

        <div className={styles.midGrid}>
          <div className={styles.col}>
            <h4>About</h4>
            <p>Muskan Lingeries is a leading manufacturer, wholesaler and retailer of quality innerwear in Mumbai since years.</p>
          </div>

          <div className={styles.col}>
            <h4>Products</h4>
            <ul>
              <li>Bra (All Types)</li>
              <li>Panties &amp; Briefs</li>
              <li>Wholesale Packs</li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Contact</h4>
            <div className={styles.contactItem}>
              <span>📍</span>
              <span>Shop No. 84, Janta Cloth Market, Dadar West, Mumbai 400028</span>
            </div>
            <div className={styles.contactItem}>
              <span>📞</span>
              <a href="tel:9372455712" style={{ color: 'inherit' }}>9372455712</a>
            </div>
            <div className={styles.contactItem}>
              <span>💬</span>
              <a href="https://wa.me/919819942566" target="_blank" rel="noreferrer" style={{ color: '#25D366' }}>9819942566</a>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© 2025 Muskan Lingeries. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
