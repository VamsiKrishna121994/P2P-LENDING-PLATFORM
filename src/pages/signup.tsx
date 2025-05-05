import React from 'react';

export default function Signup() {
  return (
    <div className="wrapper">
      <div className="login-text">
        <div className="text">
          <h1>Signup</h1>
          <hr />
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="signup-btn">Signup</button>
        </div>
      </div>
      <div className="call-text">
        <h1>
          Join <span>P2P Lending Platform</span> Today
        </h1>
        <button onClick={() => (window.location.href = '/login')}>Already Have an Account?</button>
      </div>
    </div>
  );
}