import React from 'react';
import "./bodyCare.scss";
import {BsArrowRightShort} from "react-icons/bs";
import Carousel from "react-grid-carousel";
import soap1 from "../../Assets/soap1.webp";
import soap2 from "../../Assets/soap2.webp";
import soap3 from "../../Assets/soap3.webp";

const BodyCare = () => {
    return <section className="carousel-container">
        <Carousel  cols={2} rows={1}>
            <Carousel.Item>
                <h3>For the body</h3>
                <h2 className={"sub-title"}>An expression of care</h2>
                <p>
                    Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each
                    product is a sensory pleasure to use with its own delightful aroma.
                </p>
                <button>
                    See all Body Care <BsArrowRightShort/>
                </button>

            </Carousel.Item>

            <Carousel.Item>

                <img src={soap1} alt="Nurture Bar Soap" className={"body-care-img"}/>
                <div className={"soap-text-wrapper"}>
                    <h3 className={"soap-title"}>Nurture Bar Soap</h3>
                    <p>Offers a mild yet effective cleanse</p>

                </div>

            </Carousel.Item>

            <Carousel.Item>

                <img src={soap2} alt="Polish Bar Soap" className={"body-care-img"}/>
                <div className={"soap-text-wrapper"}>
                    <h3 className={"soap-title"}>Polish Bar Soap</h3>
                    <p>Offers a thorough and enlivening cleanse</p>
                </div>

            </Carousel.Item>

            <Carousel.Item>
                <img src={soap3} alt="Refresh Bar Soap" className={"body-care-img"}/>
                <div className={"soap-text-wrapper"}>
                    <h3 className={"soap-title"}>Refresh Bar Soap</h3>
                    <p>Offers a mild yet effective cleanse</p>
                </div>

            </Carousel.Item>
        </Carousel>
    </section>
};

export default BodyCare;
