import React from "react";
import { useState } from "react";

const Navbar = () =>{
    const[isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = ["Courses", "Blog", "News", "Sign in","Contact"];


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
                    <p className="Transparent-Button">Sign in</p>
                </div>
                <button className="Burger-Button" onClick={toggleMenu}>
                    <div className={`Burger-Line ${isMenuOpen ? "open" : ""}`}></div>
                    <div className={`Burger-Line ${isMenuOpen ? "open" : ""}`}></div>
                    <div className={`Burger-Line ${isMenuOpen ? "open" : ""}`}></div>
                    <div className={`Burger-Line ${isMenuOpen ? "open" : ""}`}></div>
                </button>
            </div>
            <div className={`Burger-Menu ${isMenuOpen ? "open" : ""}`}>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Navbar;