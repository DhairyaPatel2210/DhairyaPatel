import React from "react";
import "./About.css";


const About = (props) => {
    return(
        <div className="About-Main-Class">
            <div className="Left-section">
                <h1 className="Main-Title">
                    About
                </h1>
                <div className="Underline">
                </div>
            </div>
            <div className="Right-section">
                <div className="Right-section-Description">
                    <h1>
                        {props.about}    
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default About;