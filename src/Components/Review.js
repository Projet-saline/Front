import React from "react";
import Slider from "react-slick";


// Données factices pour les avis (vous pouvez remplacer par de vraies données)
const reviewsData = [
    {
        id: 1,
        title: "Excellent cours !",
        content: "J'ai adoré ce cours. Le professeur était très compétent, et j'ai appris beaucoup de choses utiles. Je le recommande vivement.",
        studentName: "Alice Johnson",
        rating: 5,
    },
    {
        id: 2,
        title: "Très instructif",
        content: "Ce cours m'a beaucoup aidé à améliorer mes compétences. Le matériel était bien présenté, et les exercices pratiques étaient très utiles.",
        studentName: "Bob Smith",
        rating: 4,
    },
    // Ajoutez plus d'avis ici...
];

const Review = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // Répondre à l'affichage mobile
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="reviews-container">
            <h2>Avis des Élèves</h2>
            <Slider {...settings}>
                {reviewsData.map((review) => (
                    <div key={review.id} className="review-card">
                        <div className="rating">
                            {Array.from({ length: review.rating }, (_, index) => (
                                <span key={index} className="star"></span>
                            ))}
                        </div>
                        <h3>{review.title}</h3>
                        <p>{review.content}</p>
                        <p className="student-name">{review.studentName}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Review;
