import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

const Home = () =>  {

    return (
        <>
            <Navbar/>   {/*Navigation bar at header */}
            <Hero/>     {/*Hero section at the top */}
            <div className="Content">
            <Footer/>   {/*Footerbar at the footer */}
        </>
    )
}

export default Home;