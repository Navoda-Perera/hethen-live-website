import './EventsSection.css';

const EVENTS = [
  {
    id: 1,
    category: 'Musical Show',
    tag: 'FEATURED',
    title: 'Tropical Beats Festival',
    subtitle: 'Sunset Stage · Galle Face',
    date: 'AUG 2025',
    time: '7:00 PM',
    description: 'An iconic outdoor musical experience featuring Sri Lanka\'s top artists and international guests under the open sky.',
    color: '#c9a84c',
    icon: '🎵',
  },
  {
    id: 2,
    category: 'Beach Night',
    tag: 'UPCOMING',
    title: 'Neon Shore',
    subtitle: 'Mount Lavinia Beach',
    date: 'SEP 2025',
    time: '8:30 PM',
    description: 'Dance under the stars on the sands of Colombo\'s finest beach. World-class DJs, laser shows and fire performances.',
    color: '#00e5ff',
    icon: '🌊',
  },
  {
    id: 3,
    category: 'Fight Night',
    tag: 'BIG EVENT',
    title: 'Iron Clash IV',
    subtitle: 'BMICH Arena · Colombo',
    date: 'OCT 2025',
    time: '6:00 PM',
    description: 'Sri Lanka\'s biggest professional combat sports event. MMA, Kickboxing & Boxing — an electrifying night of champions.',
    color: '#c0392b',
    icon: '🥊',
  },
  {
    id: 4,
    category: 'Night Gala',
    tag: 'EXCLUSIVE',
    title: 'Gold Masquerade',
    subtitle: 'Shangri-La · Colombo',
    date: 'NOV 2025',
    time: '9:00 PM',
    description: 'An ultra-exclusive masked gala. Cocktails, live jazz, fine dining and a mystery performance from a legendary artist.',
    color: '#f0cc6e',
    icon: '🎭',
  },
  {
    id: 5,
    category: 'DJ Event',
    tag: 'SELLOUT',
    title: 'Bass Nation LK',
    subtitle: 'Park Street Mews · Colombo',
    date: 'DEC 2025',
    time: '10:00 PM',
    description: 'The island\'s biggest underground bass event. International DJs take over four stages for a night that shakes the city.',
    color: '#7b2fff',
    icon: '🎧',
  },
  {
    id: 6,
    category: 'Live Concert',
    tag: 'HEADLINE',
    title: 'Vivid Strings',
    subtitle: 'Nelum Pokuna · Colombo',
    date: 'JAN 2026',
    time: '7:30 PM',
    description: 'A breathtaking symphony meets modern pop. Award-winning orchestras perform reimagined hits and original compositions.',
    color: '#ff6b6b',
    icon: '🎻',
  },
];

export default function EventsSection() {
  return (
    <section className="events-section" id="events">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">What's On</span>
          <h2 className="section-title">
            Upcoming <span className="gold-text">Events</span>
          </h2>
          <p className="section-sub">
            Handcrafted experiences across Sri Lanka's most iconic venues
          </p>
        </div>

        <div className="events-grid">
          {EVENTS.map((ev, i) => (
            <div
              className="event-card"
              key={ev.id}
              style={{ '--card-color': ev.color, animationDelay: `${i * 0.08}s` }}
            >
              <div className="event-card__top">
                <span className="event-icon">{ev.icon}</span>
                <span className="event-tag">{ev.tag}</span>
              </div>

              <div className="event-card__cat">{ev.category}</div>
              <h3 className="event-card__title">{ev.title}</h3>
              <p className="event-card__sub">{ev.subtitle}</p>
              <p className="event-card__desc">{ev.description}</p>

              <div className="event-card__meta">
                <span className="meta-date">{ev.date}</span>
                <span className="meta-sep">·</span>
                <span className="meta-time">{ev.time}</span>
              </div>

              <div className="event-card__footer">
                <a href="#contact" className="event-card__btn">
                  Enquire Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              <div className="event-card__glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
