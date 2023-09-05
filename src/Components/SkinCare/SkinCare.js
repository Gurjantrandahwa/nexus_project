import React, {useEffect, useState} from 'react';
import {BsArrowRightShort} from "react-icons/bs";
import skin1 from "../../Assets/skin1.png";
import skin2 from "../../Assets/skin2.webp";
import skin3 from "../../Assets/skin3.webp";
import skin4 from "../../Assets/skin4.webp";
import skin5 from "../../Assets/skin5.webp";
import skin6 from "../../Assets/skin6.webp";
import skin7 from "../../Assets/skin7.webp";
import skin8 from "../../Assets/skin8.webp";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import Slider from "react-slick";
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

    const [progress, setProgress] = useState(0);
    const [slideToShow, setSlideToShow] = useState(4);

    const setSlides = () => {
        if (window.innerWidth <= 1280 && window.innerWidth > 1000) {
            setSlideToShow(3)
        } else if (window.innerWidth <= 1000 && window.innerWidth > 650) {
            setSlideToShow(3)
        } else if (window.innerWidth <= 650) {
            setSlideToShow(1)
        }

    }

    useEffect(() => {
        setSlides();
        setProgress(100 / skinData.length - slideToShow + 1);

        window.addEventListener("resize",()=>{setSlides()})
    }, [])


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
            setProgress(100 / (skinData.length - slideToShow + 1) * (current + 1));
        }
    };

    return <section className="carousel-container">
         <Slider {...settings}>
            <div>
                <h3>For the skin</h3>
                <h2 className="sub-title">Attention for all types</h2>
                <p>
                    The well-being of your skin is the product of hydration, nourishment, and protection through
                    discerning rituals. Explore requisite skin care for all skin types.
                </p>
                <button>
                    See all Skin Care <BsArrowRightShort/>
                </button>
            </div>

            {skinData.map((item, index) => (
                <div key={index}>
                    <img src={item.image} alt={item.title} className="skin-care-img"/>
                    <div className="skin-text-wrapper">
                        <h3 className="skin-title">{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </Slider>

        <div className={"progress-line"}>
            <div className={"line"} style={{width: `${progress}%`}}/>

        </div>
    </section>
};

export default SkinCare;
