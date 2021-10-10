import React, { useEffect } from "react";
import Card_Right from "../Components/Card_Right"
import Card_Left from "../Components/Card_Left"
import Aos from "aos";
import 'aos/dist/aos.css';
import MainPage from "./MainPage";
import "./App.css";
import Seprator from "../Components/Seprator";
import { names, Projects, All_skills, About_data, Education_data, Interior_data, Exterior_data} from "../Data/ProjectData";
import Skill from "../Components/Skills"
import About from "../Components/About";
import Education from "../Components/Education";
import Straightline from "../Components/Straightline";
import Interests from "../Components/Interests";

const App = () => {
    useEffect(() => {
        Aos.init({duration : 1500});
    },[]);
    
    const Card = Projects.map((card, index ) => {
        if((index+1) % 2 !== 0){
            return(
                <div data-aos="fade-up">
                    <Card_Right name = {card.Project_name} 
                        description={card.Description} 
                        github_link = {card.Github_link}
                        youtube_link = {card.Youtube_link}
                        image_file = {card.Project_image}
                        web_link = {card.Web_link}/>
                </div>
            )
        }
        else{
            return(
                <div data-aos="fade-up">
                    <Card_Left name = {card.Project_name} 
                        description={card.Description} 
                        github_link = {card.Github_link}
                        youtube_link = {card.Youtube_link}
                        image_file = {card.Project_image}
                        web_link = {card.Web_link}/>
                </div>
            )
        }
        
    }) 

    const skill_var = All_skills.map((ind_skill) => {
        return(
            <div className="Each-Skill" data-aos="fade-up">
                <Skill skill_name={ind_skill.skill_name} skill_image={ind_skill.skill_image} skill_eff = {ind_skill.efficiency}/>
            </div>
        )
    }) 


    const education_var = Education_data.map((ind_education,index) => {
        if(index != (Education_data.length - 1))
        {
            return(
                <div>
                    <Education year={ind_education.year} degree={ind_education.degree}/>
                    <Straightline />
                </div>
            )
        }
        else{
            return(
                <div>
                    <Education year={ind_education.year} degree={ind_education.degree}/>
                </div>
            )
        }
    }) 


    return(
        <div>
            <div>
                <MainPage className="main-page" 
                    person_name={names[0].name} 
                    second_tag = {names[0].second_tag} 
                    main_image = {names[0].main_image}/>
            </div>
            <div id="About">
                <Seprator name="About"/>
                <div data-aos="fade-up">
                    <About about={About_data[0].About}/>
                </div>
            </div>
            <div className="Education">
                <Seprator name="Education"/>
                {education_var}
            </div>
            <Seprator name="Skills"/>
            <div className="Skills">
                {skill_var}
            </div>
            <Seprator name="Projects"/>
            <div className="projects">
                {Card}
            </div>
            <Seprator name="3D Modeling"/>
            <div className="Interests">
                <Interests interests_name="Exterior Desings" image_files={Exterior_data}/>
                <Interests interests_name="Interior Desings" image_files={Interior_data}/>
            </div>
            <Seprator name="Contact"/>
        </div>
    )
}

export default App;