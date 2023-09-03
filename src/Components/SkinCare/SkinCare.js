import React from 'react';
import Carousel from "react-grid-carousel";
import {BsArrowRightShort} from "react-icons/bs";
import skin1 from "../../Assets/skin1.png";
import skin2 from "../../Assets/skin2.webp";
import skin3 from "../../Assets/skin3.webp";
import skin4 from "../../Assets/skin4.webp";
import skin5 from "../../Assets/skin5.webp";
import skin6 from "../../Assets/skin6.webp";
import skin7 from "../../Assets/skin7.webp";
import skin8 from "../../Assets/skin8.webp";


const SkinCare = () => {
    return <section className="carousel-container">
        <Carousel className="b-care-wrapper" cols={3} rows={1}>
            <Carousel.Item>
                <h3>For the skin</h3>
                <h2 className={"sub-title"}>Attention for all types</h2>
                <p>
                    The well-being of your skin is the product of hydration, nourishment, and protection through
                    discerning rituals. Explore requisite skin care for all skin types.
                </p>
                <button>
                    See all Skin Care <BsArrowRightShort/>
                </button>

            </Carousel.Item>

            <Carousel.Item>

                <img src={skin1} alt="Nurture Bar Soap" className={"skin-care-img"}/>
                <div className={"skin-text-wrapper"}>
                    <h3 className={"skin-title"}>Lucent Facial Concentrate</h3>
                    <p>A Vitamin C-rich layering serum</p>

                </div>

            </Carousel.Item>

            <Carousel.Item>

                <img src={skin2} alt="Polish Bar Soap" className={"skin-care-img"}/>
                <div className={"skin-text-wrapper"}>
                    <h3 className={"skin-title"}>Purifying Facial Cream Cleanser</h3>
                    <p>A daily cream cleanser for dry skin</p>
                </div>

            </Carousel.Item>

            <Carousel.Item>
                <img src={skin3} alt="Refresh Bar Soap" className={"skin-care-img"}/>
                <div className={"skin-text-wrapper"}>
                    <h3 className={"skin-title"}>Camellia Nut Facial Hydrating Cream</h3>
                    <p>For normal, dry or sensitive skin</p>
                </div>

            </Carousel.Item>
            <Carousel.Item>
                <img src={skin4} alt="Refresh Bar Soap" className={"skin-care-img"}/>
                <div className={"skin-text-wrapper"}>
                    <h3 className={"skin-title"}>Parsley Seed Anti-Oxidant Eye Cream</h3>
                    <p>Nourishes delicate skin around eyes</p>
                </div>

            </Carousel.Item>
            <Carousel.Item>
                <img src={skin5} alt="Refresh Bar Soap" className={"skin-care-img"}/>
                <div className={"skin-text-wrapper"}>
                    <h3 className={"skin-title"}>B Triple C Facial Balancing Gel</h3>
                    <p>Anti-oxidant gel infused with Vitamin B and C</p>
                </div>

            </Carousel.Item>
            <Carousel.Item>
                <img src={skin6} alt="Refresh Bar Soap" className={"skin-care-img"}/>
                <div className={"skin-text-wrapper"}>
                    <h3 className={"skin-title"}>Mandarin Facial Hydrating Cream</h3>
                    <p>Rapidly absorbed, lightly hydrating</p>
                </div>

            </Carousel.Item>
            <Carousel.Item>
                <img src={skin7} alt="Refresh Bar Soap" className={"skin-care-img"}/>
                <div className={"skin-text-wrapper"}>
                    <h3 className={"skin-title"}>Parsley Seed Anti-Oxidant Intense Serum</h3>
                    <p>A hydrating serum to bolster skin</p>
                </div>

            </Carousel.Item>
            <Carousel.Item>
                <img src={skin8} alt="Refresh Bar Soap" className={"skin-care-img"}/>
                <div className={"skin-text-wrapper"}>
                    <h3 className={"skin-title"}>Parsley Seed Facial Cleanser</h3>
                    <p>For those in polluted urban environments</p>
                </div>

            </Carousel.Item>
        </Carousel>
    </section>
};

export default SkinCare;