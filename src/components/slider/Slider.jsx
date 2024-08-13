import React, { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const chnageSlide = (direction) => {
    if (direction === "right") {
      if (imageIndex === 3) {
        setImageIndex(0);
      } else {
        setImageIndex((prev) => prev + 1);
      }
    } else {
      if (imageIndex === 0) {
        setImageIndex(3);
      } else {
        setImageIndex((prev) => prev - 1);
      }
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => chnageSlide("left")}>
            <img src="/arrow.png" alt="" />
          </div>
          <div className="imageContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow" onClick={() => chnageSlide("right")}>
            <img src="/arrow.png" className="right" alt="" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}

      <div className="bigImage">
        <img src={images[0]} onClick={() => setImageIndex(0)} alt="" />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
