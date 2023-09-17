
import React from 'react'
import { useParams } from "react-router-dom";
import { professeursData } from "../professeursData";
import Footer from '../Components/Footer';

export default function Professeur() {
  const { id } = useParams();
  const professeur = professeursData.find((c) => c.id === parseInt(id));
  return (
    <>
    <div className='profPage-Container'>
    <h2 className='pageProf-Title'> You Can Know More About Us </h2>
    <h4 className='pageProf-Title'> Master your music skills with the world's best musicians </h4>
       <div className='pageProf-Content'>
        <div className="pageProf-Image">
         <img className="image" src={professeur.imageProf} alt="professeur" />
       </div>
        <div className='pageProf-Text'>
       <h4 className="pageprof-title">{professeur.titleProf}</h4>
       <span className="pageprof-tag"> Instruments : {professeur.instrumentCategory}</span>
       <p className="pageprof-text">{professeur.textProf}</p>
       <p>{professeur.detailProf}</p>
        </div>
    </div>
    </div>
    <Footer />
    </>
  )
}
