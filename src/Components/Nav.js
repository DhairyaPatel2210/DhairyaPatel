import React from "react";
import "./Nav.css";
import blogger from "../Images/blogger.png"
import email from "../Images/email.png"
import linkedin from "../Images/linkedin.png"
import github from "../Images/github.png"
import linkedin_color from "../Images/linkedin_color.png"
import blogger_color from "../Images/blogger_color.png"
import github_color from "../Images/github_color.png"
import email_color from "../Images/email_color.png"


const Nav = () => {
    return(
        <div className="Nav">
            <a href="https://www.linkedin.com/in/dhairya-patel-076030205/">
                <img src={linkedin} height="35px" width="35px" className="linkedin"
                onMouseOver={e => (e.currentTarget.src = linkedin_color )}
                onMouseOut={e => (e.currentTarget.src = linkedin )} />
            </a>
            <a href="https://github.com/DhairyaPatel2210">
                <img src={github} height="35px" width="35px" className="github"
                onMouseOver={e => (e.currentTarget.src = github_color )}
                onMouseOut={e => (e.currentTarget.src = github )}/>
            </a>
            <a href="https://gtutechster.blogspot.com/">
                <img src={blogger} height="35px" width="35px" className="blogger"
                onMouseOver={e => (e.currentTarget.src = blogger_color )}
                onMouseOut={e => (e.currentTarget.src = blogger )}/>
            </a>
            <a href="mailto: pateldhairya283@gmail.com">
                <img src={email} height="35px" width="35px" className="email"
                onMouseOver={e => (e.currentTarget.src = email_color )}
                onMouseOut={e => (e.currentTarget.src = email )}/>
            </a>
            
            
        </div>
    )
}

export default Nav