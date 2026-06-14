import styles from './Footer.module.css';

const navLinks = ['Home', 'Collections', 'Categories', 'About', 'Contact'];
const navHrefs = ['#home', '#products', '#categories', '#whyus', '#contact'];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top gradient border */}
      <div className={styles.topBorder} />

      <div className={styles.inner}>
        {/* Logo + Nav row */}
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

        {/* 3-col grid */}
        <div className={styles.midGrid}>
          <div className={styles.col}>
            <h4>About Us</h4>
            <p>Muskan Lingeries is a leading manufacturer, wholesaler and retailer of quality innerwear in Mumbai since years. We believe every woman deserves comfort and style.</p>
            <div className={styles.socialRow}>
              <a href="https://wa.me/919819942566" target="_blank" rel="noreferrer" className={styles.socialBtn} style={{ background: '#25D366' }}>💬</a>
              <a href="tel:9372455712" className={styles.socialBtn} style={{ background: 'var(--rose)' }}>📞</a>
            </div>
          </div>

          <div className={styles.col}>
            <h4>Products</h4>
            <ul>
              <li>Bra (All Types)</li>
              <li>Panties &amp; Briefs</li>
              <li>Wholesale Packs</li>
              <li>All Sizes Available</li>
              <li>MFG &amp; Retail</li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Contact Us</h4>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <span>Shop No. 84, 1st Floor, Janta Cloth Market, S.B. Marg, Dadar (W), Mumbai 400028</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <a href="tel:9372455712">9372455712</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>💬</span>
              <a href="https://wa.me/919819942566" target="_blank" rel="noreferrer" style={{ color: '#25D366' }}>9819942566</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>⏰</span>
              <span>Mon–Sat: 10AM–8PM &nbsp;|&nbsp; Sun: 11AM–6PM</span>
            </div>
          </div>
        </div>

        {/* Developer credit */}
        <div className={styles.devCredit}>
          <p className={styles.devText}>Developed by</p>
          <a
            href="https://www.core3innovations.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.devName}
          >
            Core Innovations
          </a>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <p>© 2025 Muskan Lingeries. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
