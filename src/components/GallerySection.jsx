import './GallerySection.css';

const GALLERY_ITEMS = [
  { id: 1, label: 'Neon Shore 2024', cat: 'Beach Night', span: 'tall' },
  { id: 2, label: 'Iron Clash III', cat: 'Fight Night', span: 'normal' },
  { id: 3, label: 'Jazz Under Stars', cat: 'Musical Show', span: 'normal' },
  { id: 4, label: 'Bass Nation LK', cat: 'DJ Event', span: 'wide' },
  { id: 5, label: 'Gold Masquerade', cat: 'Night Gala', span: 'normal' },
  { id: 6, label: 'Tropical Beats', cat: 'Festival', span: 'tall' },
];

export default function GallerySection() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Memories</span>
          <h2 className="section-title">
            Event <span className="gold-text">Gallery</span>
          </h2>
          <p className="section-sub">A glimpse of the magic we create</p>
        </div>

        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className={`gallery-cell gallery-cell--${item.span}`}>
              <div className="gallery-cell__media">
                <div className="gallery-placeholder">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span>Add Image</span>
                </div>
                <div className="gallery-cell__overlay">
                  <span className="gallery-cell__cat">{item.cat}</span>
                  <span className="gallery-cell__label">{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <p>More moments on our social media</p>
          <div className="social-links">
            {['Instagram', 'Facebook', 'YouTube', 'TikTok'].map((s) => (
              <a key={s} href="#contact" className="social-link">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
