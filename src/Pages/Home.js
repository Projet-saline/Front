import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import CoursesSection from "../Components/CoursesSection";
import SubscriptionModule from "../Components/SubscriptionModule";
import Review from "../Components/Review";
import CalltoAction from "../Components/CalltoAction";

const Home = () =>  {

    return (
        <>
            <Navbar/>
            <Hero/>
            <CoursesSection />
            <SubscriptionModule />
            <Review />
            <CalltoAction />
            <Footer/>
        </>
    )
}

export default Home;