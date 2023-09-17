import React, { useEffect, useState } from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const NewsArticle = () => {
    const [article, setArticle] = useState(null);
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
    }, [articleId]);

    return (
        <>
        {/* <Navbar /> */}
            <div className="news-article">
                {article ? (
                    <>
                        <h2 className="article-title">{article.title}</h2>
                        <p className="article-date">{`Date de publication : ${article.date}`}</p>
                        <p className="article-content">{article.content}</p>
                        <a className="article-link" href={`/article/${articleId}`}>Lire la suite</a>
                    </>
                ) : (
                    <div className="Loading">
                        <div className="Loader"></div>
                        <p>Chargement en cours...</p>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default NewsArticle;
