import { useState } from 'react';

const Rating = ({
  heading = 'Rate Your Experience',
  color = 'gold',
  feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent']
}) => {
  const [rating, setRating] = useState(0);
  console.log('Rating', rating);

  const [hover, setHover] = useState(0);
  console.log('Hover', hover);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className='rating-container'>
      <h2>{heading}</h2>
      <div className='stars'>
        {stars.map((star) => (
          <span
            key={star}
            className='star'
            style={{
              color: star <= (hover || rating) ? color : '#ccc',
            }}
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