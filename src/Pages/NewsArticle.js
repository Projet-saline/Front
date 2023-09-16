import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";



const NewsArticle = () => {
    const [article, setArticle] = useState([]);
    const { id } = useParams();



    


    const getArticle = async () => {
        const response = await fetch(`http://localhost:3000/news/${id}`);
        const data = await response.json()
        .then((data) => {
            console.log(data);
            setArticle(data);
        })
        .catch((err) => {
            console.log(err);
        });

    }

    useEffect(() => {
            getArticle();
        }, []);
    

    return (
        <>
            <div className="news-article">
                {article ? (
                    <>
                        <h2 className="article-title">{article.title}</h2>
                        <p className="article-date">{`Date de publication : ${article.date}`}</p>
                        <p className="article-content">{article.content}</p>
                        <a className="article-link" href={`/article/${id}`}>Lire la suite</a>
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
