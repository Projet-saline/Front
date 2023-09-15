import React from "react";
import { data } from "../data";

const PresentationProf = ({titleProf,textProf,imageProf}) => {
    const professeurs = [
        { titleProf: "Silvia Careddu", textProf: "Distinguée par plusieurs prix internationaux, a étudié la flûte à Cagliari et à Paris. Sa carrière s'est épanouie en 2002 avec la Filarmonica Arturo Toscanini, et elle a collaboré avec des orchestres renommés en Europe. En plus d'être membre fondatrice du Alban Berg Ensemble Wien, elle enseigne la flûte dans diverses institutions et participe fréquemment à des jurys de concours internationaux.", imageProf: "" },
        { titleProf: "Ning Feng", textProf: "Est un violoniste renommé pour son grand lyrisme et sa virtuosité. Acclamé internationalement, il a collaboré avec des orchestres majeurs tels que le Hong Kong Philharmonic et le Royal Liverpool Philharmonic Orchestra. En Chine, il est particulièrement estimé et a été artiste résident de l'Orchestre symphonique de Shanghai. Ses enregistrements, y compris son disque récent ", imageProf: "" },
        { titleProf: "Mary Brennan", textProf: "Diplômée du Royal Northern College of Music, a enseigné au DIT Conservatory et au Royal Northern College of Music. Depuis 2007, elle enseigne à la Royal Irish Academy of Music, spécialisée dans les études vocales et la chanson française. Plusieurs de ses étudiants ont réussi, et certains ont remporté la prestigieuse bourse Royal Dublin Society", imageProf: "" },
      ];
      
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

