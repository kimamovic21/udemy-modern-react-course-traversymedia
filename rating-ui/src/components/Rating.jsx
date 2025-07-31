import { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);
  console.log('Rating', rating);

  const [hover, setHover] = useState(0);
  console.log('Hover', hover);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  const feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'];

  return (
    <div className='rating-container'>
      <h2>Rate Your Experience</h2>
      <div className='stars'>
        {stars.map((star) => (
          <span
            key={star}
            className={`star ${star <= (hover || rating) ? 'active' : ''}`}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            {'\u2605'}
          </span>
        ))}
      </div>
      <p>Rating: {rating}</p>
      <p>Hover: {hover}</p>
      {rating > 0 && (
        <p className='feedback'>
          {feedbackMessages[rating - 1]}
        </p>
      )}
    </div>
  );
};

export default Rating;