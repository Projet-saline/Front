import React, { useEffect, useState } from "react";
import axios from "axios";

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
        axios.get(`localhost:3000/news`)
            .then((response) => {
                setArticle(response.data);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération de l'article :", error);
            });
    }, [articleId]);

    return (
        <>
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
        </>
    );
}

export default NewsArticle;
