import React from "react";
import { professeursData } from "../professeursData";

const PresentationProf = ({titleProf,textProf,imageProf}) => {
      
  return (
      <div className="presentation-container">
        <h1 className="title-one"> Présentation des professeurs </h1>
        <div className="cards-container">
          {professeurs.map((professeur, index) => (
            <div className="card-presentation" key={index}>
              <div className="picture-card">
                <img className="image" src={professeur.imageProf} alt="professeur" />
              </div>
              <div className="card-information">
                <div className="card-information-holder">
                  <div className="card-information-title">{professeur.titleProf}</div>
                  <div className="card-information-text">{professeur.textProf}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default PresentationProf;

