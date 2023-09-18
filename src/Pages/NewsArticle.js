import React, { useEffect, useState } from "react";
import NewsImage from "../assets/Hannah-Roberts.jpeg"

// import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const NewsArticle = () => {
   /*  const [article, setArticle] = useState(null);
    const [articleId, setArticleId] = useState(null);

    useEffect(() => {
        // Récupère l'ID de l'article à partir de l'URL
        const urlParams = new URLSearchParams(window.location.search);
        const idFromUrl = urlParams.get("id");

        if (idFromUrl) {
            // Si l'ID est présent dans l'URL, met à jour l'état
            setArticleId(idFromUrl);
        }
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/news/1").then((response) => 
        {
            if (!response.ok) {
                throw new Error(`Erreur HTTP! Statut: ${response.status}`);
            }
            return response.json(); // Parse la réponse JSON
        }).then((data) => {
            console.log(data);
            setArticle(data);
        }).catch((error) => {
            console.error("Erreur:", error);
        });
    }, [articleId]); */

    return (
        <>
        {/* <Navbar /> */}
            <div className="news-article">
                        <img className="news-Image" src={NewsImage} alt="" />
                        <h2 className="article-title">HANNAH ROBERTS NAMED JACQUELINE DU PRÉ PROFESSOR OF CELLO AT THE ROYAL ACADEMY OF MUSIC</h2>
                        <div className="article-content">
                        <p >This new professorship marks Hannah’s significant achievements in music and her contribution to the Academy, whilst honouring the enduring legacy of Jacqueline du Pré. The title has been awarded with the blessing of the du Pré family <br />
                        Hannah’s principal teachers included Susannah Roberts, William Pleeth and Ralph Kirshbaum. She is now one of the outstanding cellists and mentors of her generation, who has nurtured a significant number of today’s leading cellists on the international stage, including Academy alumnus Sheku Kanneh-Mason. <br />
                        A multiple prize winner in competitions such as Shell LSO, BBC Young Musician, Jacqueline du Pré Memorial and Pierre Fournier awards, Hannah has gone on to give many concerto performances with leading orchestras, including the London Mozart Players, LSO, BBC Concert Orchestra, and the Halle, also making frequent broadcasts for BBC Radio, recording with renowned colleagues for ASV and Decca, and participating in numerous international festivals as both soloist and chamber musician.</p>
                        </div>
                        <p className="article-date">Date de publication : titre</p>
            </div>
        <Footer />

        </>
    );
}

export default NewsArticle;
