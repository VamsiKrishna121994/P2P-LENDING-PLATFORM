import React from 'react';

export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome to P2P Lending Platform</h1>
        <p>Connecting borrowers and lenders seamlessly.</p>
        <button>Get Started</button>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>Low Interest Rates</h3>
          <p>Borrow at competitive rates.</p>
        </div>
        <div className="feature-card">
          <h3>Secure Transactions</h3>
          <p>Your data is safe with us.</p>
        </div>
        <div className="feature-card">
          <h3>Fast Approvals</h3>
          <p>Get approved in minutes.</p>
        </div>
      </div>
    </div>
  );
}
