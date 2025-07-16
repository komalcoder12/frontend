import React, { useState } from 'react';
import '../styles/testrating.css';

function TestRating() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const stars = [1, 2, 3, 4, 5];

  const handleSubmit = () => {
    alert(`You rated ${rating} star(s)!`);
    setShowModal(false);
  };

  return (
    <div className="testrating-container">
      <button className="open-modal-btn" onClick={() => setShowModal(true)}>
        Open Rating Modal
      </button>

      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h2>Rate this Store</h2>
            <div className="stars">
              {stars.map((star) => (
                <span
                  key={star}
                  className={`star ${ (hoverRating || rating) >= star ? 'filled' : ''}`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                >
                  ★
                </span>
              ))}
            </div>
            <button className="submit-btn" onClick={handleSubmit} disabled={rating === 0}>
              Submit
            </button>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TestRating;
