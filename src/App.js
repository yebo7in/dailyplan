import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Daily Plan</h1>
        <p className="subtitle">Plan your day, achieve your goals</p>
      </header>
      <main className="app-main">
        <section className="welcome-section">
          <h2>Welcome to Your Daily Planner</h2>
          <p>Your personal space for organizing daily tasks and goals</p>
        </section>
        <section className="features-section">
          <div className="feature-card">
            <h3>Plan Tasks</h3>
            <p>Organize your daily activities</p>
          </div>
          <div className="feature-card">
            <h3>Track Progress</h3>
            <p>Monitor your achievements</p>
          </div>
          <div className="feature-card">
            <h3>Stay Focused</h3>
            <p>Keep your goals in sight</p>
          </div>
        </section>
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 Daily Plan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App; 