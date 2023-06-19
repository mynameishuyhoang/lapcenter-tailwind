import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../assets/image/1.jpg';
import banner2 from '../../assets/image/2.jpg';
import banner3 from '../../assets/image/3.jpg';
import banner4 from '../../assets/image/4.jpg';


const Slider = () => {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} interval={2000}>
            <div>
                <img src={banner1} alt="" />
            </div>
            <div>
                <img src={banner2} alt="" />
            </div>
            <div>
                <img src={banner3} alt="" />
            </div>
            <div>
                <img src={banner4} alt="" />
            </div>
        </Carousel>
    )
}


export default Slider