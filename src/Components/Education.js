import {react,useEffect} from "react";
import "./Education.css";
import Aos from "aos";
const Education = (props) => {
    useEffect(() => {
        Aos.init({duration : 1000});
    },[]);
    return(
        <div className="Education-Section">
            <div className="Education-Year" data-aos= "fade">
                <h1>
                    {props.year}
                </h1>
            </div>
            <div className="Education-Circle">
                <div className="Inside-Circle">
                </div>
            </div>
            <div className="Education-Degree" data-aos= "fade">
                <h1>
                    {props.degree}
                </h1>
            </div>
        </div>
    )
}


export default Education;