import React from "react";
import CarouselReview from "./Carousel";


let prop = [
    {
        name: "John",
        title: "super",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
        rating: 5,
        face: "/assets/reviews_props/John.jpg"
    },
    {
        name: "Pauline",
        title: "bof",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
        rating: 3,
        face: "/assets/reviews_props/Pauline.jpg"

    },
];


const Review = () => {
    return (
        <CarouselReview items={prop} />
    );
};

export default Review;