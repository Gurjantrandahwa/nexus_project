import React from 'react';
import {BsArrowRightShort} from "react-icons/bs";
import "./storeLoactor.scss";
import store1 from "../../Assets/store1.webp";
import store2 from "../../Assets/store2.webp";
import store3 from "../../Assets/store3.jpg";
import Slider from "react-slick";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
const StoreLocator = () => {
    const settings = {
        arrows: true,
        infinite: false,
        speed: 500,

        nextArrow: <AiOutlineArrowRight
            onClick={onclick}
        />,
        prevArrow: <AiOutlineArrowLeft
            onClick={onclick}
        />,



    };
    return <div className={"store-locator"}>
        <div className={"section-text-wrapper"}>
            <h2>Store Locator</h2>
            <p>Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </p>
            <button>Find a nearby store
                <BsArrowRightShort/>
            </button>
        </div>
        <div className={"store-carousel"}>
            <Slider {...settings}>
                    <img  src={store1} alt={"store1"} />
                    <img src={store2} alt={"store2"} />
                    <img  src={store3} alt={"store3"} />
            </Slider>
        </div>


    </div>
};

export default StoreLocator;