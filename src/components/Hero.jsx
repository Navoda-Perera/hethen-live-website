import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Animated background layers */}
      <div className="hero__bg">
        <div className="hero__bg-gradient" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      {/* Ticker */}
      <div className="hero__ticker">
        <div className="ticker__track">
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className="ticker__group">
              <span>MUSICAL SHOWS</span>
              <span className="ticker__sep">✦</span>
              <span>BEACH NIGHTS</span>
              <span className="ticker__sep">✦</span>
              <span>FIGHT NIGHTS</span>
              <span className="ticker__sep">✦</span>
              <span>DJ EVENTS</span>
              <span className="ticker__sep">✦</span>
              <span>LIVE CONCERTS</span>
              <span className="ticker__sep">✦</span>
              <span>NIGHT GALAS</span>
              <span className="ticker__sep">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main hero content */}
      <div className="hero__content container">
        <div className="hero__badge">
          <span className="badge__dot" />
          <span>SRI LANKA'S PREMIER LIVE ENTERTAINMENT</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line hero__title-line--1">HETHEN</span>
          <span className="hero__title-line hero__title-line--2">LIVE</span>
        </h1>

        <div className="hero__tagline">
          <div className="tagline__line" />
          <p>Where Every Night Becomes Legend</p>
          <div className="tagline__line" />
        </div>

        <p className="hero__desc">
          From electrifying beach nights to iconic fight nights — we craft unforgettable<br />
          live experiences across Sri Lanka's most spectacular venues.
        </p>

        <div className="hero__actions">
          <a href="#events" className="btn btn--primary">
            <span>Explore Events</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#shows" className="btn btn--ghost">Our Shows</a>
        </div>

        {/* Stats */}
        <div className="hero__stats">
          {[
            { num: '200+', label: 'Events Done' },
            { num: '50K+', label: 'Happy Fans' },
            { num: '8+', label: 'Years Running' },
            { num: '30+', label: 'Top Artists' },
          ].map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat__num">{s.num}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span>SCROLL</span>
        <div className="scroll__bar">
          <div className="scroll__ball" />
        </div>
      </div>

      
    </section>
  );
}
