import React from 'react';

export default function Home() {
  return (
    <div className="wrapper">
      {/* Login Section */}
      <div className="login-text">
        <div className="text">
          <a href="/login">Login</a>
          <hr />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className="login-btn">Login</button>
          <button className="signup-btn" onClick={() => window.open('/signup', '_blank')}>
            Signup
          </button>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="call-text">
        <h1>
          Welcome to <span>P2P Lending Platform</span>
        </h1>
        <button onClick={() => (window.location.href = '/signup')}>Get Started</button>
      </div>
    </div>
  );
}