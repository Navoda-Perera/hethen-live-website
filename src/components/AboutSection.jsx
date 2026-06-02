import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-inner">
          {/* Left */}
          <div className="about-left">
            <span className="section-eyebrow">Our Story</span>
            <h2 className="about-title">
              Born to Stage<br />
              <span className="gold-text">The Extraordinary</span>
            </h2>

            <div className="about-media">
              <div className="about-img-placeholder">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                <span>Add your team or venue photo</span>
              </div>
              <div className="about-years-badge">
                <span className="years-num">8+</span>
                <span className="years-label">Years of Live Entertainment</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="about-right">
            <p className="about-lead">
              Hethen Live is Sri Lanka's most trusted event production company — turning ideas into electrifying experiences since 2016.
            </p>
            <p className="about-body">
              We specialize in large-scale live events that captivate audiences. From the raw energy of fight nights to the serene beauty of beach gatherings, every production is crafted with precision, passion, and an obsession for detail.
            </p>
            <p className="about-body">
              Our team of experienced event professionals, technical crews, and creative directors work tirelessly behind the scenes to ensure every moment on stage is nothing short of legendary.
            </p>

            <div className="about-pillars">
              {[
                { icon: '⚡', label: 'World-Class Production' },
                { icon: '🎯', label: 'Full Event Management' },
                { icon: '🤝', label: 'Trusted by Top Brands' },
                { icon: '🌟', label: 'Unforgettable Experiences' },
              ].map((p) => (
                <div key={p.label} className="pillar">
                  <span className="pillar__icon">{p.icon}</span>
                  <span className="pillar__label">{p.label}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn--primary">
              Work With Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
