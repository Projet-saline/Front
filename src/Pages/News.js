import React from "react";


const News = () => {

    const [news, setNews] = useState([]);

    const getNews = async () => {
        const response = await fetch('http://localhost:3000/news/last');
        const data = await response.json()
        .then((data) => {
            console.log(data);
            setNews(data);
        })
        .catch((err) => {
            console.log(err);
        });

    }

    useEffect(() => {
            getNews();
        }, []);


    return (
        <>
            {news ? (
                <>
                    <Navbar Style={true}/>
                    <div className="news">
                        <h1 className="news-title">Actualités</h1>
                        <div className="news-container">
                            {news.map((article) => (
                                <div className="news-article" key={article.id}>
                                    <h2 className="article-title">{article.title}</h2>
                                    <p className="article-date">{`Date de publication : ${article.date}`}</p>
                                    <p className="article-content">{article.body}</p>
                                    <a className="article-link" href={`/article/${article.id}`}>Lire l'article</a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Footer/>
                </>
            ) : (
                <Loading/>
            )}
            
        </>
    );
}

export default News;