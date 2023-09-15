import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import CoursesSection from "../Components/CoursesSection";
import SubscriptionModule from "../Components/SubscriptionModule";
import ReviewCarousel from "../Components/ReviewCarousel";
import NewsSection from "../Components/NewsSection";
import {TextCut, Cut} from "../Components/Cut";


const items = [
    {
        name: "John",
        date: "01/01/2021",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
        rating: 5,
    },
    {
        name: "Pauline",
        date: "01/01/2021",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
        rating: 3,
  
    },
    {
        name: "Pierre",
        date: "01/01/2021",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
        rating: 1,
    },
    {
        name: "Celine",
        date: "01/01/2021",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
        rating: 4,  
    }
  ];

const Home = () =>  {

    return (
        <>
            <Navbar/>
            <Hero/>
            <Cut/>
            <TextCut/>
            <CoursesSection />
            <SubscriptionModule />
            <ReviewCarousel items={items} />
            <NewsSection />
            <Footer/>
        </>
    )
}

export default Home;