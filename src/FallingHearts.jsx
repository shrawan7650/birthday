import React from 'react';
import './FallingHearts.css';

const FallingHearts = () => {
  const hearts = Array.from({ length: 40 }, (_, i) => i);

  return (
    <>
      {hearts.map((i) => (
        <div
          key={i}
          className="heart"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          ❤️
        </div>
      ))}
    </>
  );
};

export default FallingHearts;