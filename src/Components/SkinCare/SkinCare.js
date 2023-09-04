import React from 'react';
import {BsArrowRightShort} from "react-icons/bs";
import skin1 from "../../Assets/skin1.png";
import skin2 from "../../Assets/skin2.webp";
import skin3 from "../../Assets/skin3.webp";
import skin4 from "../../Assets/skin4.webp";
import skin5 from "../../Assets/skin5.webp";
import skin6 from "../../Assets/skin6.webp";
import skin7 from "../../Assets/skin7.webp";
import skin8 from "../../Assets/skin8.webp";
import ProgressBar from "../ProgressBar/ProgressBar";
import Carousel from 'react-bootstrap/Carousel';

const skinData = [
    {
        image: skin1,
        title: "Lucent Facial Concentrate",
        description: "A Vitamin C-rich layering serum",
    },
    {
        image: skin2,
        title: "Purifying Facial Cream Cleanser",
        description: "A daily cream cleanser for dry skin",
    },
    {
        image: skin3,
        title: "Camellia Nut Facial Hydrating Cream",
        description: "For normal, dry or sensitive skin",
    },
    {
        image: skin4,
        title: "Parsley Seed Anti-Oxidant Eye Cream",
        description: "Nourishes delicate skin around eyes",
    },
    {
        image: skin5,
        title: "B Triple C Facial Balancing Gel",
        description: "Anti-oxidant gel infused with Vitamin B and C",
    },
    {
        image: skin6,
        title: "Mandarin Facial Hydrating Cream",
        description: "Rapidly absorbed, lightly hydrating",
    },
    {
        image: skin7,
        title: "Parsley Seed Anti-Oxidant Intense Serum",
        description: "A hydrating serum to bolster skin",
    },
    {
        image: skin8,
        title: "Parsley Seed Facial Cleanser",
        description: "For those in polluted urban environments",
    },
];

const SkinCare = () => {
    return <section className="carousel-container">
        <Carousel className="b-care-wrapper">
            <Carousel.Item>
                <h3>For the skin</h3>
                <h2 className="sub-title">Attention for all types</h2>
                <p>
                    The well-being of your skin is the product of hydration, nourishment, and protection through
                    discerning rituals. Explore requisite skin care for all skin types.
                </p>
                <button>
                    See all Skin Care <BsArrowRightShort/>
                </button>
            </Carousel.Item>

            {skinData.map((item, index) => (
                <Carousel.Item key={index}>
                    <img src={item.image} alt={item.title} className="skin-care-img"/>
                    <div className="skin-text-wrapper">
                        <h3 className="skin-title">{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    </section>
};

export default SkinCare;
