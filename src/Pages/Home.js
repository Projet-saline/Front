import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () =>  {

    return (
        <>
            <Navbar/>   {/*Navigation bar at header */}
            {/*Searchbar with the data linked to it <Search/>*/}
            <div className="content"></div>
            <Footer/>   {/*Footerbar at the footer */}
        </>
    )
}

export default Home;