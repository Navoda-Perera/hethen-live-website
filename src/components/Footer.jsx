import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__top-inner">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="logo-main">HETHEN</span>
              <span className="logo-sub">LIVE</span>
            </div>
            <p className="footer__tagline">Where Every Night Becomes Legend</p>
            <p className="footer__desc">
              Sri Lanka's premier live event production company. Crafting unforgettable experiences since 2016.
            </p>
          </div>

          <div className="footer__links-group">
            <h4>Navigation</h4>
            <ul>
              {['Home', 'Events', 'Shows', 'Gallery', 'About', 'Contact'].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer__links-group">
            <h4>Event Types</h4>
            <ul>
              {['Musical Shows', 'Beach Nights', 'Fight Nights', 'DJ Events', 'Night Galas', 'Live Concerts', 'Corporate Events'].map((l) => (
                <li key={l}><a href="#events">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer__links-group">
            <h4>Follow Us</h4>
            <ul>
              {['Instagram', 'Facebook', 'YouTube', 'TikTok', 'Twitter'].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__divider" />

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2025 Hethen Live. All rights reserved.</p>
          <p>Designed &amp; Produced in Sri Lanka 🇱🇰</p>
        </div>
      </div>

      {/* Big watermark */}
      <div className="footer__watermark">HETHEN LIVE</div>
    </footer>
  );
}
