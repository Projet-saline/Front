import React from "react";

const Blog = () => {

    const [article, setArticle] = useState([]);

    const getArticle = async () => {
        const response = await fetch(`http://localhost:3000/news`);
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
        }
    , []);  

    return (
        <>
            {article ? (
                <>
                    <Navbar Style={true}/>
                    <div className="news">
                        <h1 className="news-title">Actualités</h1>
                        <div className="news-container">
                            {article.map((article) => (
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

export default Blog;