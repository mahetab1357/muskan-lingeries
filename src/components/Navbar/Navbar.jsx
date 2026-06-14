import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const WA_LINK = 'https://wa.me/919819942566';

const navItems = [
  { label: 'Home', href: '#home', num: '01' },
  { label: 'Collections', href: '#products', num: '02' },
  { label: 'Categories', href: '#categories', num: '03' },
  { label: 'About', href: '#whyus', num: '04' },
  { label: 'Contact', href: '#contact', num: '05' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

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
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${drawerOpen ? styles.overlayOpen : ''}`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ''}`}>
        {/* Drawer header */}
        <div className={styles.drawerHeader}>
          <div className={styles.drawerLogo}>
            <span className={styles.drawerLogoMain}>Muskan</span>
            <span className={styles.drawerLogoSub}>Lingeries</span>
          </div>
          <button className={styles.closeBtn} onClick={closeDrawer} aria-label="Close menu">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className={styles.drawerNav}>
          <ul className={styles.drawerLinks}>
            {navItems.map((item, i) => (
              <li key={item.label} style={{ '--delay': `${i * 60}ms` }} className={drawerOpen ? styles.linkVisible : ''}>
                <a href={item.href} onClick={closeDrawer} className={styles.drawerLink}>
                  <span className={styles.linkNum}>{item.num}</span>
                  <span className={styles.linkLabel}>{item.label}</span>
                  <span className={styles.linkArrow}>→</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer footer */}
        <div className={styles.drawerFooter}>
          <p className={styles.drawerAddress}>📍 Shop 84, Janta Cloth Market, Dadar (W), Mumbai</p>
          <div className={styles.drawerActions}>
            <a href="tel:9372455712" className={styles.drawerCallBtn}>
              📞 Call Us
            </a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className={styles.drawerWaBtn}>
              💬 WhatsApp
            </a>
          </div>
        </div>

        {/* Decorative glow */}
        <div className={styles.drawerGlow} />
      </div>
    </>
  );
}
