import React, {useState} from 'react';
import "./bodyCare.scss";
import {BsArrowRightShort} from "react-icons/bs";
import Slider from "react-slick";
import soap1 from "../../Assets/soap1.webp";
import soap2 from "../../Assets/soap2.webp";
import soap3 from "../../Assets/soap3.webp";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";

const BodyCare = () => {
    const [progress, setProgress] = useState(40);
    const [slideToShow, setSlideToShow] = useState(4)

    const setSlides = () => {
        if (window.innerWidth <= 1280 && window.innerWidth > 1000) {
            setSlideToShow(3)
        } else if (window.innerWidth <= 1000 && window.innerWidth > 650) {
            setSlideToShow(3)
        } else if (window.innerWidth >= 650) {
            setSlideToShow(2)
        }

    }
    const soapItems = [
        {imgSrc: soap1, title: 'Nurture Bar Soap', description: 'Offers a mild yet effective cleanse'},
        {imgSrc: soap2, title: 'Polish Bar Soap', description: 'Offers a thorough and enlivening cleanse'},
        {imgSrc: soap3, title: 'Refresh Bar Soap', description: 'Offers a mild yet effective cleanse'},
        {imgSrc: soap1, title: 'Nurture Bar Soap', description: 'Offers a mild yet effective cleanse'},
        {imgSrc: soap2, title: 'Polish Bar Soap', description: 'Offers a thorough and enlivening cleanse'},
        {imgSrc: soap3, title: 'Refresh Bar Soap', description: 'Offers a mild yet effective cleanse'},
    ];


    const settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <AiOutlineArrowRight
            onClick={onclick}
        />,
        prevArrow: <AiOutlineArrowLeft
            onClick={onclick}
        />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],

        afterChange: current => {
            setProgress(100 / (soapItems.length - slideToShow + 1) * (current + 1));
        }
    };

    return <section className="carousel-container">
        <Slider {...settings}>
            <div>
                <h3>For the body</h3>
                <h2 className="sub-title">An expression of care</h2>
                <p>
                    Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each
                    product is a sensory pleasure to use with its own delightful aroma.
                </p>
                <button>
                    See all Body Care <BsArrowRightShort/>
                </button>
            </div>

            {soapItems.map((soap, index) => (
                <div key={index}>
                    <img src={soap.imgSrc} alt={soap.title} className="body-care-img"/>
                    <div className="soap-text-wrapper">
                        <h3 className="soap-title">{soap.title}</h3>
                        <p>{soap.description}</p>
                    </div>
                </div>
            ))}
        </Slider>

        <div className={"progress-line"}>
            <div className={"line"} style={{width: `${progress}%`}}>

            </div>
        </div>
    </section>
};

export default BodyCare;
