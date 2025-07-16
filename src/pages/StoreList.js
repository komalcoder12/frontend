import React from 'react';
import '../styles/storeList.css';

function StoreList() {
  const stores = [
    { id: 1, name: 'Tech Gadgets', rating: 4.5, category: 'Electronics' },
    { id: 2, name: 'Book Haven', rating: 4.7, category: 'Books' },
    { id: 3, name: 'Fashion Hub', rating: 4.2, category: 'Clothing' },
    { id: 4, name: 'Home Essentials', rating: 4.0, category: 'Furniture' },
    { id: 5, name: 'Sports Arena', rating: 4.3, category: 'Sportswear' },
    { id: 6, name: 'Gourmet Delights', rating: 4.8, category: 'Food & Beverages' },
  ];

  return (
    <div className="storelist-container">
      <h2>Store List</h2>
      <p>Explore the stores and check their ratings.</p>
      <div className="store-cards">
        {stores.map(store => (
          <div key={store.id} className="store-card">
            <h3>{store.name}</h3>
            <p><strong>Category:</strong> {store.category}</p>
            <p><strong>Rating:</strong> {store.rating} ⭐</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoreList;
