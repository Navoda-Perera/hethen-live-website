import { useState } from 'react';
import './ContactSection.css';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', eventType: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-inner">
          {/* Left info */}
          <div className="contact-info">
            <span className="section-eyebrow">Get In Touch</span>
            <h2 className="contact-title">
              Let's Create<br />
              <span className="gold-text">Something Epic</span>
            </h2>
            <p className="contact-sub">
              Planning an event? Looking to collaborate? Want to bring a show to Sri Lanka?<br />
              We'd love to hear from you.
            </p>

            <div className="contact-details">
              {[
                { icon: '📍', label: 'Location', val: 'Colombo, Sri Lanka' },
                { icon: '📞', label: 'Phone', val: '+94 77 XXX XXXX' },
                { icon: '✉️', label: 'Email', val: 'hello@hethenlive.lk' },
                { icon: '⏰', label: 'Office Hours', val: 'Mon–Sat, 9AM–6PM' },
              ].map((d) => (
                <div key={d.label} className="contact-detail">
                  <span className="detail-icon">{d.icon}</span>
                  <div>
                    <span className="detail-label">{d.label}</span>
                    <span className="detail-val">{d.val}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-socials">
              {['Instagram', 'Facebook', 'YouTube', 'TikTok'].map((s) => (
                <a key={s} href="#" className="contact-social">{s}</a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            {sent ? (
              <div className="form-success">
                <span className="success-icon">✦</span>
                <h3>Message Received!</h3>
                <p>We'll get back to you within 24 hours. Get ready for something epic.</p>
                <button className="btn btn--primary" onClick={() => setSent(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Send Us a Message</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input name="name" type="text" placeholder="John Silva" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input name="email" type="email" placeholder="hello@email.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input name="phone" type="tel" placeholder="+94 77 XXX XXXX" value={form.phone} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Event Type</label>
                    <select name="eventType" value={form.eventType} onChange={handleChange}>
                      <option value="">Select type...</option>
                      <option>Musical Show</option>
                      <option>Beach Night</option>
                      <option>Fight Night</option>
                      <option>DJ Event</option>
                      <option>Night Gala</option>
                      <option>Corporate Event</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" rows="5" placeholder="Tell us about your event idea..." value={form.message} onChange={handleChange} required />
                </div>

                <button type="submit" className="btn btn--primary form-submit">
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
