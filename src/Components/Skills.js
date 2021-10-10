import React from "react";
import "./Skills.css";
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Skills = (props) => {
    return(
        <div className="Skill-Main-Class">
            <div className="Left-section">
                <img src={props.skill_image} height="50" width="50"/>
            </div>
            <div className="Right-section">
                <h2 className="Skill-Name"> 
                    {props.skill_name}
                </h2>
                <CircularProgressbar 
                    value={props.skill_eff} 
                    text={`${props.skill_eff}%`} 
                    className="Progress-Bar"
                    styles={buildStyles({

                        pathColor: "#353839",
                        textColor: 'white',
                        trailColor: 'white',
                        backgroundColor: '#3e98c7',
                      })}/>
                
            </div>
        </div>
    )
}

export default Skills