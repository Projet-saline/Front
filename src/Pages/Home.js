import React from "react";
import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
import About from "../Pages/About";
import Hero from "../Components/Hero";
import CoursesSection from "../Components/CoursesSection";
import SubscriptionModule from "../Components/SubscriptionModule";
// import ReviewCarousel from "../Components/ReviewCarousel";
import CalltoAction from "../Components/CalltoAction";
// import Faq from "../Components/PageFaq";
import { ContactUs } from "./ContactUs"
import MainFaq from "../Components/FaqContainer/MainFaq";
// import PresentationProf from "../Components/PresentationProf";
// import PageFaq from "../Components/PageFaq";

const Home = () =>  {

    return (
        <>
             {/* <PresentationProf /> */}
            <MainFaq />
            <ContactUs />
            <Navbar/>
            <Hero/>
            <CoursesSection />
            <SubscriptionModule />
            {/* <ReviewCarousel /> */}
            <CalltoAction /> 
             <About />
             {/* <Footer/>  */}
             
        </>
    )
}

export default Home;