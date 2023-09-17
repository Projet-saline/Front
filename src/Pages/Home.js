import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import CoursesSection from "../Components/CoursesSection";
import SubscriptionModule from "../Components/SubscriptionModule";
// import ReviewCarousel from "../Components/ReviewCarousel";
import NewsSection from "../Components/NewsSection";
import {TextCut, Cut} from "../Components/Cut";

const Home = () =>  {

    return (
        <>
            <Navbar Style={false}/>
            <Hero/>
            <Cut/>
            <TextCut/>
            <CoursesSection />
            <SubscriptionModule />
            {/* <ReviewCarousel items={items} /> */}
            <NewsSection />
            <Footer/>
        </>
    )
}

export default Home;
