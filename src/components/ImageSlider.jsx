import React, { useState, useEffect } from "react";
// Array of image paths for the slider
const images = [
"/logo.jpg",
  "/apple.jpg",
  "/fridge.jpg",
  "/tv.jpg",
  "/phone car.jpg",
  "/tv2.jpg",
];

function ImageSlider() {
   // Keeps track of which image is currently being shown
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up a timer to auto-advance the slide every 3 seconds
    const timer = setInterval(() => {
      // Move to the next image in the array, loop back to start if needed
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); 
//Cleanup the interval on component unmount
return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-100 overflow-hidden rounded-lg shadow-md">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
         {/* Render each image inside the slider */}
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