import React from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const NotFound = () => {
    return (
        <>
            <Navbar Style={true} />
            <div className="Notfound">
                <div className="Notfound-container">
                    <h1>Error 404</h1>
                    <p>You're lost in the sheet but don't loose the beat !</p>
                    <img src={require("../assets/404.gif")} alt="404" />
                    <p className="Transparent-Button"> Go back to home →</p>
                </div>
            </div>
            <Footer />
        </>
    );
    }

export default NotFound;