import React from 'react';
import '../styles/admin.css'; // adjust path as needed

function Admin() {
  return (
    <div className="admin-container">
      <div className="admin-content">
        <h2>Admin Dashboard</h2>
        <p>Welcome, Admin! Here you can manage your platform settings and users.</p>

        <div className="admin-actions">
          <button>Manage Users</button>
          <button>View Reports</button>
          <button>Store Approvals</button>
          <button>Settings</button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
