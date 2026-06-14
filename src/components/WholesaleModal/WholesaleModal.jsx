import { useState, useEffect } from 'react';
import styles from './WholesaleModal.module.css';

const WA_NUMBER = '919819942566';

export default function WholesaleModal({ product, onClose }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    quantity: '',
    size: '',
    notes: '',
  });

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = [
      `🛍️ *Wholesale Enquiry — Muskan Lingeries*`,
      ``,
      `*Product:* ${product.name}`,
      `*Category:* ${product.category}`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*City:* ${form.city}`,
      `*Quantity Required:* ${form.quantity}`,
      `*Size Requirement:* ${form.size || 'Not specified'}`,
      form.notes ? `*Additional Notes:* ${form.notes}` : '',
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.productThumb}>
            {product.image
              ? <img src={product.image} alt={product.name} />
              : <div className={styles.productThumbGradient} style={{ background: product.gradient }}>
                  {product.name[0]}
                </div>
            }
          </div>
          <div className={styles.headerText}>
            <h3>{product.name}</h3>
            <p>Wholesale Enquiry</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className={styles.body}>
          <div className={styles.badge}>🏷️ Wholesale / Bulk Order</div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label>Your Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Shah"
                  required
                />
              </div>
              <div className={styles.field}>
                <label>WhatsApp / Phone *</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9876543210"
                  required
                />
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label>City *</label>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="e.g. Mumbai"
                  required
                />
              </div>
              <div className={styles.field}>
                <label>Quantity Required *</label>
                <input
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 5 dozen"
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label>Size Requirement</label>
              <input
                name="size"
                value={form.size}
                onChange={handleChange}
                placeholder="e.g. 32, 34, 36 or S, M, L, XL"
              />
            </div>

            <div className={styles.field}>
              <label>Additional Notes</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Any specific color, style, or packaging requirements..."
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Send Enquiry on WhatsApp
            </button>
          </form>

          <p className={styles.note}>
            This will open WhatsApp with your enquiry details pre-filled.
          </p>
        </div>
      </div>
    </div>
  );
}
