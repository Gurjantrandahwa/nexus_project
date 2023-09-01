import React from 'react';
import "./bannerSection.scss";
import bannerImage from "../../Assets/banner.webp";
import {BsArrowRightShort} from "react-icons/bs";

const BannerSection = () => {
    return <section className={"banner-section"}>
        <img src={bannerImage} alt={"banner"}/>
        <div className={"banner-text-wrapper"}>
            <a href={"/"}>
                <img src={""} alt={"logo"}/>
            </a>
            <div>
                <h3> Bar Soaps</h3>
                <h2> A body care classic, reimagined</h2>
                <p>
                    Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the
                    range, each imparting a unique constellation of benefits.
                </p>
                <button>
                    Discover bar Soaps
                    <BsArrowRightShort/>
                </button>
            </div>
        </div>
    </section>
}

export default BannerSection;