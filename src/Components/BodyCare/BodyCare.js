import React from 'react';
import "./bodyCare.scss";
import {BsArrowRightShort} from "react-icons/bs";
import carousel_2 from "../../Assets/b_care_img.webp";

const BodyCare = () => {

    return <section className={"body-care-container"}>
        <div className={"body-care-wrapper"}>
            <div className={"body-care-text"}>
                <div>
                    <h3>For the body</h3>
                    <h2>An expression of care</h2>
                </div>
                <div>
                    <p>
                        Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each
                        product
                        is a sensory pleasure to use with its own delightful aroma.
                    </p>
                    <button>
                        See all Body Care
                        <BsArrowRightShort/>
                    </button>
                </div>
            </div>


        </div>


    </section>
};

export default BodyCare;