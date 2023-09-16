import React from "react";
import { Link } from "react-router-dom";

const ButtonDouble = ({
    backgroundColor,
    activeBackgroundColor,
    isLeft,
    leftElement,
    rightElement
    }) => { 
    return <div className="Button-double-wrapper" style={{ backgroundColor }}>
        <Link 
            className={isLeft && "Button-double-active-element"}
            style={{ backgroundColor: isLeft ? activeBackgroundColor : 'transparent' }}
            to={leftElement.link}
        >
            {leftElement.label}
        </Link>
        <Link 
            className={!isLeft && "Button-double-active-element"}
            style={{ backgroundColor: !isLeft ? activeBackgroundColor : 'transparent' }}
            to={rightElement.link}
        >
            {rightElement.label}
        </Link>
    </div>
}

export default ButtonDouble;