import React from "react";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";

const Courses = () => {
    
    const [courses, setCourses] = useState([]);

    const getCourses = async () => {
        const response = await fetch('http://localhost:3000/courses');
        const data = await response.json()
        .then((data) => {
            console.log(data);
            setCourses(data);
        })
        .catch((err) => {
            console.log(err);
        });

    }

    useEffect(() => {
            getCourses();
        }
    , []);

    return (
        <>
            {courses ? (
                <>
                    <Navbar Style={true}/>
                    <div className="courses">
                        <h1 className="courses-title">Cours</h1>
                        <div className="courses-container">
                            {courses.map((course) => (
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

export default Courses;