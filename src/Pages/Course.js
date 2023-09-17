import React from "react";

const Course = () => {

    const [course, setCourse] = useState([]);

    const getCourse = async () => {
        const response = await fetch('http://localhost:3000/courses');
        const data = await response.json()
        .then((data) => {
            console.log(data);
            setCourse(data);
        })
        .catch((err) => {
            console.log(err);
        });

    }

    useEffect(() => {
            getCourse();
        }
    , []);

    return (
        <>
            {course ? (
                <>
                    <Navbar Style={true}/>
                    <div className="courses">
                        <h1 className="courses-title">Cours</h1>
                        <div className="courses-container">
                            {course.map((course) => (
                                <div className="courses-article" key={course.id}>
                                    <h2 className="article-title">{course.title}</h2>
                                    <p className="article-date">{`Date de publication : ${course.date}`}</p>
                                    <p className="article-content">{course.body}</p>
                                    <a className="article-link" href={`/article/${course.id}`}>Lire l'article</a>
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

export default Course;