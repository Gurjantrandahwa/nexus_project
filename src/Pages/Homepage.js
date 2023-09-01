import React from 'react';
import TopHeader from "../Components/Headers/TopHeader/TopHeader";
import ModalHeader from "../Components/Headers/ModalHeader/ModalHeader";
import Navbar from "../Components/Navbar/Navbar";
import BannerSection from "../Components/BannerSection/BannerSection";
import BodyCare from "../Components/BodyCare/BodyCare";

const Homepage = () => {
    return <div>
        <TopHeader/>
        <ModalHeader/>
        <Navbar/>
        <BannerSection/>
        <BodyCare/>
    </div>
};

export default Homepage;