import React, { useState, useEffect } from "react";
import photoGroups from "./photoGroups";
import "./PhotoGallery.css";

const PhotoGallery = () => {
  const [currentImages, setCurrentImages] = useState(
    photoGroups.map(group => group.main)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages(prevImages =>
        prevImages.map((image, index) => {
          const group = photoGroups[index];
          return group.others[Math.floor(Math.random() * group.others.length)];
        })
      );
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery-container">
      <div className="photo-carousel">
        {currentImages.map((image, index) => (
          <div
            key={index}
            className="photo-item"
            style={{
              transform: `rotateY(${(360 / currentImages.length) * index}deg) translateZ(250px)`,
            }}
          >
            <img src={image} alt={`Photo ${index + 1}`} className="photo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
