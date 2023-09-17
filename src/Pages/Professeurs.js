import React from 'react'
import { professeursData } from "../professeursData";
import { Link } from 'react-router-dom';

export default function Professeurs() {

  return (
    <> 
    <div className='presentationPage'>

    <h2 className='presentationcard-Title'> Learn from the world’s greatest musicians!</h2>
    <h5 className='presentationcard-SubTitle'> Together, our professors have won major prizes, juried music competitions, and teach all over the world. They share their knowledge, advice, and techniques to help you improve and develop your skills through their masterclasses and interviews.</h5>
      <div className="presentation-container">
        <div className="cards-container">
          {professeursData.map((professeur, index) => (
            <div className="card-presentation" key={index}>
              <div className="picture-card">
                <img className="image" src={professeur.imageProf} alt="professeur" />
              </div>
              <div className="card-information">
                <p className="card-information-title">{professeur.titleProf}</p>
                <p className="card-information-text">{professeur.textProf}</p>
                <Link to = {`/professeurs/${professeur.id}`} className='read-more'>
                <span className='read-more'>Read more </span>
        </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
    </>
  )
}
