import React from "react";
import "./main_page.css";
import Button from "../Components/Button"
import Nav from "../Components/Nav";




const MainPage = (props) => {
    return(
        <div className="main-page">
            <div className="left-section">
              <h1 className="main-title">
                {props.person_name}     
              </h1>
              <h1 className="subtitle">
                {props.second_tag}   
              </h1>
              <div className="view-more">
                <a href="#About"><Button name="Explore More"/></a>
              </div>
              </div>
              <div className="right-section">
                <img src={props.main_image} width="350" height="495"/>
              </div>
            <Nav className="Nav"/>
            
        </div>
    )
}

export default MainPage;