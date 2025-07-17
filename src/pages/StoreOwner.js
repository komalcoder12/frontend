import React from 'react';
import '../styles/StoreOwner.css';

function StoreOwner() {
  return (
    <div className="storeowner-container">
      <div className="storeowner-content">
        <h2>Store Owner Dashboard</h2>
        <p>Manage your stores, view ratings, and update your store details here.</p>

        <div className="storeowner-actions">
          <button>Manage Stores</button>
          <button>View Ratings</button>
          <button>Add New Store</button>
          <button>Account Settings</button>
        </div>
      </div>
    </div>
  );
}

export default StoreOwner;
