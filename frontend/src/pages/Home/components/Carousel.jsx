import { useEffect, useState } from "react";
import "../styles/carousel.css";
// eslint-disable-next-line react/prop-types
const Carousel = ({ items, itemsPerSlide = 7 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const numberOfSlides = Math.ceil(items?.length / itemsPerSlide);


  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: numberOfSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="carousel-slide">
              {items
                ?.slice(
                  slideIndex * itemsPerSlide,
                  (slideIndex + 1) * itemsPerSlide
                )
                .map((item, index) => (
                  <div key={index} className="carousel-item">
                    <img src={item.imageUrl} alt={item.name} />
                    <p>{item.name}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-dots">
        {Array.from({ length: numberOfSlides }).map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
