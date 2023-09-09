import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import CoursesSection from "../Components/CoursesSection";
import SubscriptionModule from "../Components/SubscriptionModule";
import ReviewCarousel from "../Components/ReviewCarousel";
import CalltoAction from "../Components/CalltoAction";

const items = [
    {
        name: "John",
        date: "01/01/2021",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
        rating: 5,
        face: "John.jpg"
    },
    {
        name: "Pauline",
        date: "01/01/2021",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
        rating: 3,
        face: "Pauline.jpg"
  
    },
    {
        name: "Pierre",
        date: "01/01/2021",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
        rating: 1,
        face: "John.jpg"
    },
    {
        name: "Celine",
        date: "01/01/2021",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
        rating: 4,
        face: "Pauline.jpg"
  
    }
  ];

const Home = () =>  {

    return (
        <>
            <Navbar/>
            <Hero/>
            <CoursesSection />
            <SubscriptionModule />
            <ReviewCarousel items={items} />
            <CalltoAction />
            <Footer/>
        </>
    )
}

export default Home;