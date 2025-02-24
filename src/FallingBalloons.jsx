import React from "react";
import "./FallingBalloons.css";

const balloonColors = ["🎈", "🎈", "🎈", "🎈", "🎈","🎈", "🎈", "🎈", "🎈", "🎈","🎈", "🎈", "🎈", "🎈", "🎈","🎈", "🎈", "🎈", "🎈", "🎈"]; // Add more balloon emojis if needed

const FallingBalloons = () => {
  const balloons = Array.from({ length: 20 }, (_, i) => i);

  return (
    <>
      {balloons.map((i) => (
        <div
          key={i}
          className="balloon"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 24 + 24}px`, // Randomize balloon size
          }}
        >
          {balloonColors[Math.floor(Math.random() * balloonColors.length)]}
        </div>
      ))}
    </>
  );
};

export default FallingBalloons;