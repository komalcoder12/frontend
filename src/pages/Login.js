import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email && password) {
      console.log('Logging in with', email, password);
      navigate('/user-dashboard'); 
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>

        <div className="login-links">
          <p onClick={() => navigate('/register')}>Don't have an account? Register</p>
          <p onClick={() => navigate('/forgot-password')}>Forgot Password?</p>
        </div>
      </form>
    </div>
  );
}

export default Login;
