import styles from './Contact.module.css';

const WA_LINK = 'https://wa.me/919819942566';
const MAPS_LINK = 'https://www.google.com/maps/search/Janta+Cloth+Market+SB+Marg+Dadar+West+Mumbai+400028';

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <h2 className="section-heading">Visit Us or Contact</h2>
      <p className="section-sub">We&apos;d love to hear from you</p>

      <div className={styles.grid}>
        <div className={styles.infoCard}>
          <div className={styles.businessName}>Muskan Lingeries</div>

          <div className={styles.contactRow}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📍</div>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Address</span>
                <span className={styles.contactValue}>
                  Shop No. 84, 1st Floor<br />
                  Janta Cloth Market, S.B. Marg<br />
                  Dadar (W), Mumbai - 400 028
                </span>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📞</div>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Phone</span>
                <span className={styles.contactValue}>
                  <a href="tel:9372455712">9372455712</a>
                </span>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>💬</div>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>WhatsApp</span>
                <span className={styles.contactValue}>
                  <a href={WA_LINK} target="_blank" rel="noreferrer" className={styles.waLink}>9819942566</a>
                </span>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>⏰</div>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Business Hours</span>
                <span className={styles.contactValue}>
                  Mon – Sat: 10:00 AM – 8:00 PM<br />
                  Sunday: 11:00 AM – 6:00 PM
                </span>
              </div>
            </div>
          </div>

          <div className={styles.tags}>
            {['Bra', 'Panties', 'Wholesale', 'Retail', 'MFG'].map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>

          <a href={WA_LINK} target="_blank" rel="noreferrer" className={styles.waBtn}>
            💬 WhatsApp: 9819942566
          </a>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.4226879867!2d72.83668!3d19.0216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce95fd9c1c9b%3A0x8a9b2b9b4b4b4b4b!2sJanta+Cloth+Market%2C+Dadar+West%2C+Mumbai!5e0!3m2!1sen!2sin!4v1234567890"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Muskan Lingeries Location"
          />
        </div>
      </div>

      <div className={styles.quickActions}>
        <a href="tel:9372455712" className={styles.actionCard}>
          <div className={styles.actionIcon}>📞</div>
          <div className={styles.actionTitle}>Call Now</div>
          <div className={styles.actionValue}>9372455712</div>
        </a>
        <a href={WA_LINK} target="_blank" rel="noreferrer" className={styles.actionCard}>
          <div className={styles.actionIcon}>💬</div>
          <div className={styles.actionTitle}>WhatsApp</div>
          <div className={styles.actionValue}>9819942566</div>
        </a>
        <a href={MAPS_LINK} target="_blank" rel="noreferrer" className={styles.actionCard}>
          <div className={styles.actionIcon}>📍</div>
          <div className={styles.actionTitle}>Get Directions</div>
          <div className={styles.actionValue}>Open Google Maps</div>
        </a>
      </div>
    </section>
  );
}
