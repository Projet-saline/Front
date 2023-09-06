import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import CoursesSection from "../Components/CoursesSection";

const Home = () =>  {

    return (
        <>
            <Navbar/>
            <Hero/>
            <CoursesSection />

            <div className="Professors">
                <p>Content</p>
            </div>

            <div className="Offers">
                <p>Content</p>
            </div>

            <div className="Reviews">
                <p>Content</p>
            </div>

            <div className="Join">
                <p>Content</p>
            </div>

            <Footer/>   {/*Footerbar at the footer */}
        </>
    )
}

export default Home;