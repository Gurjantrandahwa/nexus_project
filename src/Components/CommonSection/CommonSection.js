import React from 'react';
import {BsArrowRightShort} from "react-icons/bs";
import "./commonSection.scss";


const CommonSection = ({title, subTitle, description, button, image,className}) => {
    return <div className={`section-container ${className || ''}`}>
        <div className={"section-text-wrapper"} >
            <h3>{title}</h3>
            <h2>{subTitle}</h2>
            <p>{description}</p>
            <button>
                {button}
                <BsArrowRightShort/>
            </button>
        </div>


        <img src={image} alt={subTitle}/>
    </div>
};

export default CommonSection;