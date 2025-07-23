import React, { useState, useEffect } from "react";

const images = [
"/public/logo.jpg",
  "/public/apple.jpg",
  "/public/fridge.jpg",
  "/public/tv.jpg",
  "/public/phone car.jpg",
  "/public/tv2.jpg",
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); 

return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-100 overflow-hidden rounded-lg shadow-md">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 object-cover h-100"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;