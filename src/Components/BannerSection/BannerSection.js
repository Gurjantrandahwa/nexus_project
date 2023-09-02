import React, {useState, useEffect} from 'react';
import "./bannerSection.scss";
import bannerImage from "../../Assets/banner.webp";
import {BsArrowRightShort} from "react-icons/bs";
import logoImg from "../../Assets/logo.png";
import {BiSearch} from "react-icons/bi";
import {AiOutlineHeart} from "react-icons/ai";
import {HiMenuAlt4} from "react-icons/hi";


const BannerNavbar = () => {
    return <nav className="banner-nav">
        <a href="/">
            <img src={logoImg} alt="logo"/>
        </a>
        <ul>
            <li><BiSearch/></li>
            <li><AiOutlineHeart/></li>
            <li>Cart</li>
            <li><HiMenuAlt4/></li>
        </ul>
    </nav>
}

const BannerSection = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const renderNavbar = windowWidth <= 600 ? <BannerNavbar/> : null;

    return <section className="banner-section">
        {renderNavbar}
        <img src={bannerImage} alt="banner"/>
        <div className="banner-text-wrapper">
            <a href="/">
                <img src={logoImg} alt="logo"/>
            </a>
            <div>
                <h3> Bar Soaps</h3>
                <h2> A body care classic, reimagined</h2>
                <p>
                    Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to
                    the
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
