import React from "react";
import sheet from "../assets/sheet.gif";

const SubscriptionModule = () => {
    return (
        <>
            <div className="Submodule-Content">
                <div className="Submodule-Content-Left">
                    <img src={sheet} alt="A gif of music sheet"/>
                </div>
                <div className="Submodule-Content-Right">
                    <p>Check our prices for the courses you've always dreamt of !</p>
                    <p>See the subscribe page →</p>
                </div>
            </div>
        </>
    )
}

export default SubscriptionModule;