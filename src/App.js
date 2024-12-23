import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');

  // 处理按钮点击
  const handleGetStarted = () => {
    alert('Welcome to Daily Plan! This feature is coming soon.');
  };

  // 处理邮件订阅
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    } else {
      alert('Please enter a valid email address');
    }
  };

  // 处理导航链接点击
  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <nav className="app-nav">
        <div className="nav-logo">Daily Plan</div>
        <div className="nav-links">
          <a href="#home" onClick={handleNavClick('home')}>Home</a>
          <a href="#features" onClick={handleNavClick('features')}>Features</a>
          <a href="#contact" onClick={handleNavClick('contact')}>Contact</a>
        </div>
      </nav>

      <header id="home" className="app-header">
        <h1>Plan Your Day</h1>
        <p className="subtitle">Simple. Efficient. Productive.</p>
        <button 
          className="cta-button"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </header>

      <main className="app-main">
        <section className="welcome-section">
          <h2>Your Personal Daily Planner</h2>
          <p>Organize your tasks, track your progress, and achieve your goals</p>
        </section>

        <section id="features" className="features-section">
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Task Management</h3>
            <p>Create and organize your daily tasks</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Progress Tracking</h3>
            <p>Monitor your daily achievements</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Goal Setting</h3>
            <p>Set and achieve your goals</p>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2>Stay Connected</h2>
          <p>Join our community and stay updated</p>
          <form className="email-signup" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About</h4>
            <p>Daily Plan helps you organize your life better.</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: contact@example.com</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Daily Plan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App; 