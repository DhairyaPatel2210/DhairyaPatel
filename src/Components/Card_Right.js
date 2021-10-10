import React from "react";
import "./Card_Right.css"
import github from "../Images/github_white.png"
import github_color from "../Images/github.png"
import youtube from "../Images/youtube.png"
import youtube_color from "../Images/youtube_color.png"
import web_color from "../Images/world-wide-web_color.png"
import web from "../Images/world-wide-web.png"


const Card_Right = (props) => {
    
    const youtube_logo = () =>{
        if(props.youtube_link != ""){
            return(
                <a href={props.youtube_link}>
                            <img src={youtube} height="35px" width="35px" className="github"
                            onMouseOver={e => (e.currentTarget.src = youtube_color )}
                            onMouseOut={e => (e.currentTarget.src = youtube )}/>
                </a>
            )
        }
        else{
            return(
                <div></div>
            );
        }
    }

    const web_logo = () =>{
        if(props.web_link != ""){
            return(
                <a href={props.web_link}>
                            <img src={web} height="35px" width="35px" className="github"
                            onMouseOver={e => (e.currentTarget.src = web_color )}
                            onMouseOut={e => (e.currentTarget.src = web )}/>
                </a>
            )
        }
        else{
            return(
                <div></div>
            );
        }
    }

    const github_logo = () =>{
        if(props.github_link != ""){
            return(
                <a href={props.github_link}>
                            <img src={github} height="35px" width="35px" className="github"
                            onMouseOver={e => (e.currentTarget.src = github_color )}
                            onMouseOut={e => (e.currentTarget.src = github )}/>
                </a>
            )
        }
        else{
            return(
                <div></div>
            );
        }
    }
    
    return(
        <div className="Card-Main-Class">
            <div className="Card">
                <div className="left-section">
                    <img src={props.image_file}/>
                </div>
                <div className="right-section">
                    <div className="Project-Name">
                        <h1>{props.name}</h1>
                    </div>
                    <div className="Description">
                        <h2>{props.description}</h2>
                    </div>
                    <div className="Links">
                        {youtube_logo()}
                        {github_logo()}
                        {web_logo()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card_Right;