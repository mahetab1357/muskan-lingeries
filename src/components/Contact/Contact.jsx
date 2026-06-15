import styles from './Contact.module.css';

const WA_LINK = 'https://wa.me/919819942566';
const MAPS_LINK = 'https://www.google.com/maps/search/Janta+Cloth+Market+SB+Marg+Dadar+West+Mumbai+400028';

const contactItems = [
  {
    icon: '📍',
    label: 'Address',
    value: 'Shop No. 84, 1st Floor, Janta Cloth Market,\nS.B. Marg, Dadar (W), Mumbai – 400 028',
    href: MAPS_LINK,
    color: '#E8547A',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '9372455712',
    href: 'tel:9372455712',
    color: '#9B59B6',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: '9819942566',
    href: WA_LINK,
    color: '#25D366',
  },
  {
    icon: '⏰',
    label: 'Business Hours',
    value: 'Tue – Sat: 10 AM – 8 PM\nSunday: 11 AM – 6 PM\nMonday: Holiday',
    href: null,
    color: '#C89B40',
  },
];

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      {/* Section heading */}
      <div className={styles.headingWrap}>
        <span className={styles.eyebrow}>Find Us</span>
        <h2 className={styles.heading}>Visit Us or Contact</h2>
        <p className={styles.sub}>Mumbai&apos;s trusted wholesale lingerie destination — come visit or reach out anytime</p>
        <div className={styles.divider}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerDot}>✦</span>
          <span className={styles.dividerLine} />
        </div>
      </div>

      {/* Main grid */}
      <div className={styles.grid}>
        {/* Info card */}
        <div className={styles.infoCard}>
          <div className={styles.cardBadge}>Muskan Lingeries</div>

          <div className={styles.contactList}>
            {contactItems.map((item) => (
              <div key={item.label} className={styles.contactItem}>
                <div className={styles.iconWrap} style={{ background: item.color + '1A', color: item.color }}>
                  {item.icon}
                </div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className={styles.contactValue}
                      style={{ '--hover-color': item.color }}
                    >
                      {item.value.split('\n').map((line, i) => (
                        <span key={i}>{line}{i < item.value.split('\n').length - 1 && <br />}</span>
                      ))}
                    </a>
                  ) : (
                    <span className={styles.contactValue}>
                      {item.value.split('\n').map((line, i) => (
                        <span key={i}>{line}{i < item.value.split('\n').length - 1 && <br />}</span>
                      ))}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.tags}>
            {['Bra', 'Panties', 'Wholesale', 'Retail', 'MFG'].map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>

          <a href={WA_LINK} target="_blank" rel="noreferrer" className={styles.waBtn}>
            <span className={styles.waBtnIcon}>💬</span>
            Chat on WhatsApp
          </a>
        </div>

        {/* Map */}
        <div className={styles.mapWrap}>
          <div className={styles.mapLabel}>📍 We&apos;re here</div>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.4226879867!2d72.83668!3d19.0216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce95fd9c1c9b%3A0x8a9b2b9b4b4b4b4b!2sJanta+Cloth+Market%2C+Dadar+West%2C+Mumbai!5e0!3m2!1sen!2sin!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Muskan Lingeries Location"
            />
          </div>
          <a href={MAPS_LINK} target="_blank" rel="noreferrer" className={styles.directionsBtn}>
            Get Directions ↗
          </a>
        </div>
      </div>

      {/* Quick action cards */}
      <div className={styles.quickActions}>
        <a href="tel:9372455712" className={`${styles.actionCard} ${styles.callCard}`}>
          <div className={styles.actionIcon}>📞</div>
          <div className={styles.actionContent}>
            <div className={styles.actionTitle}>Call Now</div>
            <div className={styles.actionValue}>9372455712</div>
          </div>
          <div className={styles.actionArrow}>→</div>
        </a>

        <a href={WA_LINK} target="_blank" rel="noreferrer" className={`${styles.actionCard} ${styles.waCard}`}>
          <div className={styles.actionIcon}>💬</div>
          <div className={styles.actionContent}>
            <div className={styles.actionTitle}>WhatsApp Order</div>
            <div className={styles.actionValue}>9819942566</div>
          </div>
          <div className={styles.actionArrow}>→</div>
        </a>

        <a href={MAPS_LINK} target="_blank" rel="noreferrer" className={`${styles.actionCard} ${styles.mapsCard}`}>
          <div className={styles.actionIcon}>📍</div>
          <div className={styles.actionContent}>
            <div className={styles.actionTitle}>Get Directions</div>
            <div className={styles.actionValue}>Open Google Maps</div>
          </div>
          <div className={styles.actionArrow}>→</div>
        </a>
      </div>
    </section>
  );
}
