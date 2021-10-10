import React from "react";
import "./Button.css";

const Button = (props) => {
    return(
        <div>
            <button className="btn"><span>{props.name}</span></button>
        </div>
    )
}


export default Button;