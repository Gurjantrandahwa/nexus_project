import React from 'react';
import {BsArrowRightShort} from "react-icons/bs";
import Carousel from 'react-bootstrap/Carousel';
import "./storeLoactor.scss";
import store1 from "../../Assets/store1.webp";
import store2 from "../../Assets/store2.webp";
import store3 from "../../Assets/store3.jpg";
const StoreLocator = () => {
    return <div className={"store-locator"}>
        <div className={"section-text-wrapper"}>
            <h2>Store Locator</h2>
            <p>Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </p>
            <button>Find a nearby store
                <BsArrowRightShort/>
            </button>
        </div>
        <div className={"store-carousel"}>
            <Carousel>
                <Carousel.Item>
                    <img  src={store1} alt={"store1"} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={store2} alt={"store2"} />
                </Carousel.Item>
                <Carousel.Item>
                    <img  src={store3} alt={"store3"} />
                </Carousel.Item>

            </Carousel>
        </div>


    </div>
};

export default StoreLocator;