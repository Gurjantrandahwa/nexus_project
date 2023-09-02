import React from 'react';
import "./bodyCare.scss";
import { BsArrowRightShort } from "react-icons/bs";
import { Carousel } from "react-bootstrap";
import soap1 from "../../Assets/soap1.webp";
import soap2 from "../../Assets/soap1.webp";
import soap3 from "../../Assets/soap3.webp";

const BodyCare = () => {
    return (
        <section className="body-care-container">
            <Carousel className="body-care-wrapper" indicators={true} nextIcon={<BsArrowRightShort />} prevIcon={<BsArrowRightShort />}>
                <Carousel.Item>
                    <div className="carousel-content">
                        <h3>For the body</h3>
                        <h2>An expression of care</h2>
                        <p>
                            Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each
                            product is a sensory pleasure to use with its own delightful aroma.
                        </p>
                        <button>
                            See all Body Care <BsArrowRightShort />
                        </button>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="carousel-content">
                        <img src={soap1} alt="Nurture Bar Soap" />
                        <h2>Nurture Bar Soap</h2>
                        <p>Offers a mild yet effective cleanse</p>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="carousel-content">
                        <img src={soap2} alt="Polish Bar Soap" />
                        <h2>Polish Bar Soap</h2>
                        <p>Offers a thorough and enlivening cleanse</p>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="carousel-content">
                        <img src={soap3} alt="Refresh Bar Soap" />
                        <h2>Refresh Bar Soap</h2>
                        <p>Offers a mild yet effective cleanse</p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default BodyCare;
