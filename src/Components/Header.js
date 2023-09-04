import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const Header = () =>{
    return(
        <>
            <div className="Header">
                <p>Saline Academie</p>
                <Link to="/" relative="path">Home</Link>
            </div>
        </>
    );
}

export default Header;