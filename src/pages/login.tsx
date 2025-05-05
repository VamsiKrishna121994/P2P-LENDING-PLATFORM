import React from 'react';

export default function Login() {
  return (
    <div className="wrapper">
      <div className="login-text">
        <div className="text">
          <h1>Login</h1>
          <hr />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className="login-btn">Login</button>
        </div>
      </div>
      <div className="call-text">
        <h1>
          Welcome Back to <span>P2P Lending Platform</span>
        </h1>
        <button onClick={() => (window.location.href = '/signup')}>Create an Account</button>
      </div>
    </div>
  );
}