import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const WA_LINK = 'https://wa.me/919819942566';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#products' },
  { label: 'Categories', href: '#categories' },
  { label: 'About', href: '#whyus' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <a href="#home" className={styles.logo}>
            <span className={styles.logoMain}>Muskan</span>
            <span className={styles.logoSub}>Lingeries</span>
          </a>

          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className={`${styles.orderBtn} ${styles.orderBtnDesktop}`}>
              🛍️ Order Now
            </a>
            <button
              className={`${styles.hamburger} ${drawerOpen ? styles.open : ''}`}
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`${styles.overlay} ${drawerOpen ? styles.open : ''}`} onClick={closeDrawer} />

      <div className={`${styles.drawer} ${drawerOpen ? styles.open : ''}`}>
        <button className={styles.drawerClose} onClick={closeDrawer}>✕</button>
        <ul className={styles.drawerLinks}>
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={closeDrawer}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className={styles.drawerContact}>
          <p>📍 Shop 84, Janta Cloth Market, Dadar (W), Mumbai</p>
          <a href="tel:9372455712">📞 9372455712</a>
          <a href={WA_LINK} target="_blank" rel="noreferrer">💬 WhatsApp: 9819942566</a>
        </div>
      </div>
    </>
  );
}
