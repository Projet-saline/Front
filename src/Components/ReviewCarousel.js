import React, { useState } from "react";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

const ReviewCarousel = ({ images }) => {

import { propTypes } from "react-bootstrap/esm/Image";

const ReviewCarousel = ({ images }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);


  // En gros Touches est le tableau qui compte la position du doigt sur l'écran
  // clientX est la position du doigt sur l'écran en pixels
  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);

  // En gros Touches est le tableau qui compte la position du doigt sur l'écran
  // clientX est la position du doigt sur l'écran en pixels
  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
  };

  // Le handler pour l'enlèvement du doigt de l'écran qui va swiper le carrousel
  const handleTouchEnd = (event) => {

    // Ici le delta qui calcul l'avancée du doit sur l'écran par rapport a startX
    const deltaX = event.changedTouches[0].clientX - startX;
  // Le handler pour l'enlèvement du doigt de l'écran qui va swiper le carrousel
  const handleTouchEnd = (event) => {

    // Ici le delta qui calcul l'avancée du doit sur l'écran par rapport a startX
    const deltaX = event.changedTouches[0].clientX - startX;

    //Testons savoir si le doigt est bien sur l'écran
    switch (startX) {
      //Non le doigt n'est pas sur l'écran
      case null:
        break;
      //Oui le doigt est sur l'écran
      default:
        //Testons savoir si le doigt a bougé
        switch (deltaX) {
          //Oui le doigt a bougé de plus de 50px vers la droite
          case deltaX > 50:
            setCurrentIndex((prevIndex) =>
              prevIndex <= 0 ? images.length - 2 : prevIndex - 2
            );
            break;
          //Oui le doigt a bougé de plus de 50px vers la gauche
          case deltaX < -50:
            setCurrentIndex((prevIndex) =>
              prevIndex >= images.length - 2 ? 0 : prevIndex + 2
            );
            break;
          //Le doigt a fait un mouvement inattendu (moins de 50px, ou vers le haut ou le bas, ou vers la gauche et la droite en même temps ...)
          default:
            console.log("Unexpected swipe direction");
            break;

        };
        break;
    };
    //On remet startX à null pour pouvoir recommencer  
    //Testons savoir si le doigt est bien sur l'écran
    switch (startX) {
      //Non le doigt n'est pas sur l'écran
      case null:
        break;
      //Oui le doigt est sur l'écran
      default:
        //Testons savoir si le doigt a bougé
        switch (deltaX) {
          //Oui le doigt a bougé de plus de 50px vers la droite
          case deltaX > 50:
            setCurrentIndex((prevIndex) =>
              prevIndex <= 0 ? images.length - 2 : prevIndex - 2
            );
            break;
          //Oui le doigt a bougé de plus de 50px vers la gauche
          case deltaX < -50:
            setCurrentIndex((prevIndex) =>
              prevIndex >= images.length - 2 ? 0 : prevIndex + 2
            );
            break;
          //Le doigt a fait un mouvement inattendu (moins de 50px, ou vers le haut ou le bas, ou vers la gauche et la droite en même temps ...)
          default:
            console.log("Unexpected swipe direction");
            break;

        };
        break;
    };
    //On remet startX à null pour pouvoir recommencer  
    setStartX(null);
  };

  /* 
  Commentaire post-ecriture, ce code est assez verbeux je le reconnais, mais il est assez simple a comprendre
  et il est facilement modifiable pour ajouter des fonctionnalités supplémentaires, comme par exemple un bouton
  pour passer au slide suivant ou précédent, ou encore un bouton pour passer au slide suivant ou précédent
  automatiquement toutes les 5 secondes.

  J'ai privilégié la simplicité et la lisibilité du code plutôt que la concision, mais il est tout a fait possible
  de faire plus concis, mais je pense que ce n'est pas forcément une bonne idée, car le code devient plus difficile
  a comprendre et a modifier. D'où l'usage du switch case qui est plus verbeux mais plus lisible que des if else imbriqués.

  Inspiré par du code trouvé à droite à gauche je dois l'avoué, mais je l'ai adapté à ma sauce pour qu'il corresponde
  à mes besoins.

  - Stanley

  PS : J'ai pas use de library pour faire ce carrousel, j'ai tout fait moi même nananana ! :p
  */

  /* 
  Commentaire post-ecriture, ce code est assez verbeux je le reconnais, mais il est assez simple a comprendre
  et il est facilement modifiable pour ajouter des fonctionnalités supplémentaires, comme par exemple un bouton
  pour passer au slide suivant ou précédent, ou encore un bouton pour passer au slide suivant ou précédent
  automatiquement toutes les 5 secondes.

  J'ai privilégié la simplicité et la lisibilité du code plutôt que la concision, mais il est tout a fait possible
  de faire plus concis, mais je pense que ce n'est pas forcément une bonne idée, car le code devient plus difficile
  a comprendre et a modifier. D'où l'usage du switch case qui est plus verbeux mais plus lisible que des if else imbriqués.

  Inspiré par du code trouvé à droite à gauche je dois l'avoué, mais je l'ai adapté à ma sauce pour qu'il corresponde
  à mes besoins.

  - Stanley

  PS : J'ai pas use de library pour faire ce carrousel, j'ai tout fait moi même nananana ! :p
  */

  const goToSlide = (idx) => {
    setCurrentIndex(idx * 2);
  };

  return (
    <div className="Carousel-wrapper">
      
      <h2>Our students reviews</h2>
      <div
        className="Carousel-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >


        <div className="Carousel-item">
          <p>{items[currentIndex].name}</p>
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
          <p>{items[currentIndex].text}</p>
          <p>{items[currentIndex].date}</p>
        </div>

        {currentIndex + 1 < items.length && ( 
          <div className="Carousel-item">
          <p>{items[currentIndex + 1].name}</p>
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
          <p>{items[currentIndex + 1].text}</p>
          <p>{items[currentIndex + 1].date}</p>
        </div>
        )}
      </div>
      <div className="Carousel-indicators">
          {Array.from({ length: Math.ceil(images.length / 2) }).map((_, idx) => (
          {Array.from({ length: Math.ceil(images.length / 2) }).map((_, idx) => (
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
  images: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      date : PropTypes.string.isRequired,
      text  : PropTypes.string.isRequired,
    
    })
  ).isRequired,
};
