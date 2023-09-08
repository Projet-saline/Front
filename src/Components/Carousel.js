import React from "react";
import PropTypes from "prop-types";
import Star from "../../public/assets/star.svg";


const CarouselReview = ({ items }) => {
    console.log(items);
    return (
        <div className="Carousel-container">
        {items.map((item, index) => (
            <div className="Carousel-item" key={index}>
            <h3>{item.name}</h3>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
            <img 
                src={item.face}
                alt={item.name}
                className="FaceReview"
                />
            <div className="StarsContainer">
                {Array.from({ length: 5 }, (_, i) => (
                <img
                    src={Star}
                    alt="star"
                    className={`Star ${i < item.rating ? "Yellow" : "Grey"}`}
                    key={i}
                />
                ))}
            </div>
            </div>
        ))}
        </div>
    );
};

export default CarouselReview;

CarouselReview.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};
