import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Home = () =>  {

    return (
        <>
            <Header/>   {/*Navigation bar at header */}
            <div className="Head">
                <h1>Saline Academie</h1>
            </div>
            {/*Searchbar with the data linked to it <Search/>*/}
            <Footer/>   {/*Footerbar at the footer */}
        </>
    )
}

export default Home;