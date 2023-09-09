import React, { useState } from "react";
import PropTypes from "prop-types";
import Star from "../assets/star.svg";

const ReviewCarousel = ({ items }) => {

  // A supprimer à terme le tableau ci-dessous

  
items = [
  {
      name: "John",
      title: "super",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      rating: 5,
      face: "John.jpg"
  },
  {
      name: "Pauline",
      title: "bof",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      rating: 3,
      face: "Pauline.jpg"

  },
  {
      name: "Pierre",
      title: "Yes",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      rating: 1,
      face: "John.jpg"
  },
  {
      name: "Celine",
      title: "J'aime react putain",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      rating: 4,
      face: "Pauline.jpg"

  },
];

  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!startX) return; 

    const deltaX = e.changedTouches[0].clientX - startX;

    if (deltaX > 50) {
      setCurrentIndex((prevIndex) => 
        prevIndex <= 0 ? items.length - 2 : prevIndex - 2
      );
    } else if (deltaX < -50) {
      setCurrentIndex((prevIndex) => 
        prevIndex >= items.length - 2 ? 0 : prevIndex + 2
      );
    }

    setStartX(null);
  };

  const goToSlide = (idx) => {
    setCurrentIndex(idx * 2);
  };

  return (
    <div className="Carousel-wrapper">
      <div
        className="Carousel-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Premier item du carrousel */}
        <div className="Carousel-item">
          <p>Ce que {items[currentIndex].name} penses des formations :</p>
          <div className="StarsContainer">
            {[1, 2, 3, 4, 5].map((rating, index) => (
              <img
                src={Star}
                alt="star"
                className={`Star ${rating <= items[currentIndex].rating ? "Yellow" : "Grey"}`}
                key={index}
              />
            ))}
          </div>
          <h4>{items[currentIndex].title}</h4>
          <p>{items[currentIndex].text}</p>
        </div>

        {/* Deuxième item du carrousel */}
        {currentIndex + 1 < items.length && ( 
          <div className="Carousel-item">
            <h3>{items[currentIndex + 1].name}</h3>
            <h4>{items[currentIndex + 1].title}</h4>
            <p>{items[currentIndex + 1].text}</p>
            <div className="StarsContainer">
              {[1, 2, 3, 4, 5].map((rating, index) => (
                <img
                  src={Star}
                  alt="star"
                  className={`Star ${rating <= items[currentIndex + 1].rating ? "Yellow" : "Grey"}`}
                  key={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Indicateurs en bas du carrousel */}
      <div className="Carousel-indicators">
          {Array.from({ length: Math.ceil(items.length / 2) }).map((_, idx) => (
              <div
                  key={idx}
                  className={`Carousel-dot ${currentIndex / 2 === idx ? 'active' : ''}`}
                  onClick={() => goToSlide(idx)}
              ></div>
          ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;

ReviewCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};
