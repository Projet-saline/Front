import React from "react";

const Footer = () =>{
    return(
        <>
            <div className="Footer">
                <div className="Logo">
                    <img src="https://assets.website-files.com/61ae28f54843d30203fad6db/61c20adcfff22fd7c76d8911_Group%202620.svg" alt="Logo"/>
                </div>
                <div className="Footer-menu">
                    <div className="Footer-element">
                        <p>About us</p>
                        <p>Contact us</p>
                        <p>Support</p>
                    </div>
                    <div className="Footer-element">
                        <p>Terms of use</p>
                        <p>Privacy policy</p>
                        <p>Cookie policy</p>
                        <p>Accessibility</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Footer;