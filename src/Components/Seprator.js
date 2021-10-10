import React from "react";
import "./Seprator.css";

const Seprator = (props) => {
    
    return(
        <div className="Seprator-Main">
            <div className="left-line">
            </div>
            <div className="Title">
                <h1>{props.name}</h1>
            </div>
            <div className="right-line">
            </div>
        </div>
    )
}

export default Seprator;