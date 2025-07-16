import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import somayImg from '../images/somay.jpg';
import kritiImg from '../images/kriti.jpg';
import divyanshImg from '../images/divyansh.jpg';

const Home: React.FC = () => (
  <>
    <div className="floating-shapes global-shapes">
      <div className="floating-shape" />
      <div className="floating-shape" />
      <div className="floating-shape" />
      <div className="floating-shape" />
      <div className="floating-shape" />
      <div className="floating-shape" />
    </div>
    <div className="premium-grid" />
    
    {/* Navigation Sidebar */}
    <nav className="navigation">
      <Link to="/" className="nav-item active" title="Home">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
      </Link>
    </nav>

    <section className="header-section" id="home">
      <div className="header-background" />
      <div className="header-content">
        <div className="TOPheader">
          <div className="logo">
            <div className="header-logo">
              <img src={logo} alt="Zuuush Logo" />
            </div>
          </div>
          <h1>ZUUUSH</h1>
          <p className="header-tagline">Empowering Mental Wellness Through Connection & Support</p>
          <div className="header-actions">
            {/* Removed Get Started and Explore Rooms buttons as requested */}
          </div>
        </div>
        <div className="header-decoration">
          <div className="floating-element" style={{ '--delay': '0s', '--position': '10% 20%' } as React.CSSProperties}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div className="floating-element" style={{ '--delay': '1s', '--position': '80% 30%' } as React.CSSProperties}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
              <line x1="9" y1="9" x2="9.01" y2="9"/>
              <line x1="15" y1="9" x2="15.01" y2="9"/>
            </svg>
          </div>
          <div className="floating-element" style={{ '--delay': '2s', '--position': '20% 80%' } as React.CSSProperties}>
            <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <div className="floating-element" style={{ '--delay': '3s', '--position': '70% 70%' } as React.CSSProperties}>
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
    <main>
      <section className="LogIn" id="login">
        <div className="login-container">
          <div className="login-layout">
            <div className="login-form-section">
              <div className="login-card">
                <div className="header">Welcome Back</div>
                <form className="login-form" id="loginForm">
                  <div className="form-group">
                    <input type="email" name="email" id="loginEmail" placeholder="Email" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <input type="password" name="password" id="loginPassword" placeholder="Password" className="form-input" required />
                  </div>
                  <Link to="/dashboard" className="btn">Sign In</Link>
                  <Link to="/signup" className="btn btn-secondary" style={{ marginTop: '10px' }}>Sign Up</Link>
                </form>
              </div>
            </div>
            <div className="login-description-section">
              <div className="description-content">
                <h2 className="description-title">A Safe Space for Your Mind</h2>
                <p className="description-text">
                  No fancy promises here. Just a space where your thoughts don't have to make perfect sense and nobody's timing how long it takes you to figure things out. Think of it as that corner of the internet where you can actually breathe. No pressure to impress anyone or rush through your process. You can show up exactly as you are, with all your questions, half-formed ideas, or even just curiosity. This place is yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="AboutUs section" id="about">
        <div className="container">
          <div className="about-container">
            <h1 className="header animate-on-scroll">The People Behind This</h1>
            <p className="about-description animate-on-scroll">
              We're a small team of developers, designers, and psychology enthusiasts who got tired of mental health apps that felt more like homework than help. Yeah, we are like you, we used those. So we decided to build something different.
            </p>
            <div className="TeamPics team-grid">
              <div className="Somay team-member card-3d stagger-animation">
                <div className="team-photo hover-scale">
                  <img src={somayImg} alt="Somay" />
                </div>
                <p className="team-name">Somay</p>
                <p className="team-role">UI/UX & Frontend</p>
              </div>
              <div className="kriti team-member card-3d stagger-animation">
                <div className="team-photo hover-scale">
                  <img src={kritiImg} alt="Kriti" />
                </div>
                <p className="team-name">Kriti</p>
                <p className="team-role">Backend</p>
              </div>
              <div className="divyansh team-member card-3d stagger-animation">
                <div className="team-photo hover-scale">
                  <img src={divyanshImg} alt="Divyansh" />
                </div>
                <p className="team-name">Divyansh</p>
                <p className="team-role">Backend</p>
              </div>
            </div>
            <p className="about-closing animate-on-scroll">
              Our approach is simple: create tools that work with how people actually think and feel, not how we think they should. We test everything with real people because that's the only way to know if it actually helps.
            </p>
          </div>
        </div>
      </div>
      <section className="ContactUs" id="contact">
        <div className="contact-container">
          <div className="contact-layout">
            <div className="contact-description-section">
              <div className="description-content">
                <h2 className="description-title">We Actually Read These</h2>
                <p className="description-text">
                  Found a bug? Have an idea? Just want to tell us this actually helped? We're real people who check our messages. No chatbots, no copy-paste responses. Just us, probably drinking too much coffee and trying to make this thing work better. Seriously, your feedback doesn't disappear into some black hole. Whether it's a tiny typo or a big idea that could change everything, we'd love to hear from you. Go ahead—send us a note anytime.
                </p>
              </div>
            </div>
            <div className="contact-form-section">
              <div className="contact-card">
                <div className="header">Get in Touch</div>
                <form className="contact-form" id="contactForm">
                  <div className="form-group">
                    <input type="text" name="name" id="contactName" placeholder="Your Name" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" id="contactEmail" placeholder="Your Email" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <textarea name="message" id="contactMessage" placeholder="Your Message" className="form-input" rows={4} required></textarea>
                  </div>
                  <button type="submit" className="btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default Home; 