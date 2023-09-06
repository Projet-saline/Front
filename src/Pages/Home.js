import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import CoursesSection from "../Components/CoursesSection";
import Subscription from "../Components/Subscription";
import Review from "../Components/Review";
import CalltoAction from "../Components/CalltoAction";

const Home = () =>  {

    return (
        <>
            <Navbar/>
            <Hero/>
            <CoursesSection />
            <Subscription />
            <Review />
            <CalltoAction />
            <Footer/>
        </>
    )
}

export default Home;