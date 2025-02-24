import React from 'react';
import './FallingFlowers.css';

const FallingFlowers = () => {
  const flowers = Array.from({ length: 40 }, (_, i) => i);

  return (
    <>
      {flowers.map((i) => (
        <div
          key={i}
          className="flower"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          🌸
        </div>
      ))}
    </>
  );
};

export default FallingFlowers;