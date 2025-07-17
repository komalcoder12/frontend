import React from 'react';
import '../styles/user.css'; 

function User() {
  return (
    <div className="user-container">
      <div className="user-content">
        <h2>User Dashboard</h2>
        <p>Welcome back! Manage your profile, view your ratings, and explore stores.</p>

        <div className="user-actions">
          <button>Profile Settings</button>
          <button>My Ratings</button>
          <button>Browse Stores</button>
          <button>Support</button>
        </div>
      </div>
    </div>
  );
}

export default User;
