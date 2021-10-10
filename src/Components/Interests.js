import React from "react";
import "./Interests.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
import {Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import interest_0 from "../Images/0.jpg"
import interest_1 from "../Images/1.png"
import interest_2 from "../Images/2.jpg"

SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);


const Interests = (props) => {
    const data = props.image_files;
    return(
        <div className="Interests-Main-Class">
            <div className = "Upper-Section">
            <Swiper pagination={true} className="Swiper" autoplay={{ delay:3000, disableOnInteraction: false }}>
                { data.map((image) => {
                    return(<SwiperSlide><img src={image} width="200" height="200"/></SwiperSlide>)
                })
                }
            </Swiper>
            </div>
            <div className="Lower-Section">
                <h2>
                    {props.interests_name}
                </h2>
            </div> 
        </div>
    )
}

export default Interests;