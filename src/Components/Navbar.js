import React from "react";
import { useState, useEffect } from 'react';



const Navbar = () =>{

    const [showNavbar, setShowNavbar] = useState(true);

    const handleScroll = () => {
        if (window.scrollY > 110) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <>
            <div className={`${showNavbar ? 'Navbar-Hero' : 'Navbar-All'}`}>
                <div className="Logo">
                    <img src="https://assets.website-files.com/61ae28f54843d30203fad6db/61c20adcfff22fd7c76d8911_Group%202620.svg" alt="Logo"/>
                </div>
                <div className="Menu">
                    <p>Courses</p>
                    <p>Blog</p>
                    <p>News</p>
                    <p>Sign in</p>
                </div>
            </div>
        </>
    );
}

export default Navbar;