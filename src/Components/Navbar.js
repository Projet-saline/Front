import React from "react";


const Navbar = () =>{


    return(
        <>
            <div className="Navbar-All">
                <div className="Logo">
                    <img src="https://assets.website-files.com/61ae28f54843d30203fad6db/61c20adcfff22fd7c76d8911_Group%202620.svg" alt="Logo"/>
                </div>
                <div className="Menu">
                    <p>Courses</p>
                    <p>Blog</p>
                    <p>News</p>
                    <p className="Sign">Sign in</p>
                </div>
            </div>
        </>
    );
}

export default Navbar;