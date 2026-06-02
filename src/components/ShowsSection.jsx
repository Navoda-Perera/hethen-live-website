import './ShowsSection.css';

const SHOWS = [
  {
    id: 'musical',
    label: 'Musical Shows',
    num: '01',
    accent: '#c9a84c',
    headline: 'Live Music That Moves You',
    body: "From intimate jazz sessions to stadium-filling rock concerts, Hethen Live stages Sri Lanka's most iconic musical performances. We partner with the island's top talent and bring international headliners to our shores.",
    features: ['Live Bands & Solo Artists', 'International DJs & Performers', 'Acoustic Evenings', 'Genre Festivals'],
    mediaTip: 'Add a concert image or video clip here',
  },
  {
    id: 'beach',
    label: 'Beach Nights',
    num: '02',
    accent: '#00e5ff',
    headline: 'Nights That Never End',
    body: "Sun, sand, and pure euphoria. Our beach nights transform Sri Lanka's most stunning coastlines into open-air clubs. Fire dancers, world-class DJs, neon lights and the sound of the ocean — pure magic.",
    features: ['Sunset Opener Sets', 'Fire & LED Performances', 'Beach Bar & Cocktails', 'After-Midnight Sessions'],
    mediaTip: 'Add a beach night photo or reel here',
  },
  {
    id: 'fight',
    label: 'Fight Nights',
    num: '03',
    accent: '#c0392b',
    headline: 'The Thrill of Combat',
    body: "Sri Lanka's premier combat sports events. Hethen Live produces electrifying MMA, boxing and kickboxing fight cards that set the crowd on fire. World-class production, live ring walks and explosive atmosphere.",
    features: ['MMA & Kickboxing', 'Professional Boxing', 'Celebrity Bouts', 'Pre-Event Entertainment'],
    mediaTip: 'Add a fight night action photo here',
  },
];

export default function ShowsSection() {
  return (
    <section className="shows-section" id="shows">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Our Productions</span>
          <h2 className="section-title">
            Signature <span className="gold-text">Shows</span>
          </h2>
        </div>

        <div className="shows-list">
          {SHOWS.map((show, i) => (
            <div
              key={show.id}
              className={`show-item ${i % 2 !== 0 ? 'show-item--reverse' : ''}`}
              style={{ '--show-accent': show.accent }}
            >
              {/* Media placeholder */}
              <div className="show-item__media">
                <div className="media-placeholder">
                  <div className="media-placeholder__num">{show.num}</div>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span>{show.mediaTip}</span>
                </div>
                <div className="show-item__label-bar">
                  <span>{show.label}</span>
                </div>
              </div>

              {/* Content */}
              <div className="show-item__content">
                <div className="show-item__eyebrow">
                  <span className="eyebrow-num">{show.num}</span>
                  <span className="eyebrow-sep" />
                  <span className="eyebrow-cat">{show.label}</span>
                </div>
                <h3 className="show-item__title">{show.headline}</h3>
                <p className="show-item__body">{show.body}</p>
                <ul className="show-features">
                  {show.features.map((f) => (
                    <li key={f}>
                      <span className="feature-bullet" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="show-cta">
                  <span>Book for Your Event</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
