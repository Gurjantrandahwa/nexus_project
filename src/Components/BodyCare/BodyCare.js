import React, {useState} from 'react';
import "./bodyCare.scss";
import {BsArrowRightShort} from "react-icons/bs";
import Carousel from "react-grid-carousel";
import soap1 from "../../Assets/soap1.webp";
import soap2 from "../../Assets/soap2.webp";
import soap3 from "../../Assets/soap3.webp";
import ProgressBar from "../ProgressBar/ProgressBar";

const BodyCare = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    const soapItems = [
        {imgSrc: soap1, title: 'Nurture Bar Soap', description: 'Offers a mild yet effective cleanse'},
        {imgSrc: soap2, title: 'Polish Bar Soap', description: 'Offers a thorough and enlivening cleanse'},
        {imgSrc: soap3, title: 'Refresh Bar Soap', description: 'Offers a mild yet effective cleanse'},
    ];
    return <section className="carousel-container">
        <Carousel cols={2} rows={1} onPageChange={handlePageChange}>
            <Carousel.Item>
                <h3>For the body</h3>
                <h2 className="sub-title">An expression of care</h2>
                <p>
                    Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each
                    product is a sensory pleasure to use with its own delightful aroma.
                </p>
                <button>
                    See all Body Care <BsArrowRightShort/>
                </button>
            </Carousel.Item>

            {soapItems.map((soap, index) => (
                <Carousel.Item key={index}>
                    <img src={soap.imgSrc} alt={soap.title} className="body-care-img"/>
                    <div className="soap-text-wrapper">
                        <h3 className="soap-title">{soap.title}</h3>
                        <p>{soap.description}</p>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>

        <ProgressBar currentPage={currentPage} totalPages={soapItems.length}/>
    </section>
};

export default BodyCare;
