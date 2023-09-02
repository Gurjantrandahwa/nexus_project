import React from 'react';
import TopHeader from "../Components/Headers/TopHeader/TopHeader";
import ModalHeader from "../Components/Headers/ModalHeader/ModalHeader";
import CustomNavbar from "../Components/Navbar/CustomNavbar";
import BannerSection from "../Components/BannerSection/BannerSection";
import BodyCare from "../Components/BodyCare/BodyCare";
import CommonSection from "../Components/CommonSection/CommonSection";
import warmSectionImg from "../Assets/warm_section.webp"
import dropsSectionImg from "../Assets/drops.webp";
import "./homepage.scss";
import StoreLocator from "../Components/StoreLocator/StoreLocator";
import QuoteSection from "../Components/QuoteSection/QuoteSection";
import Footer from "../Components/Footer/Footer";


const Homepage = () => {
    return <div>
        <TopHeader/>
        <ModalHeader/>
        <CustomNavbar/>
        <BannerSection/>
        <BodyCare/>
        <CommonSection
            title={"The Athenaeum"}
            subTitle={"The warm-up "}
            description={"In The Athenaeum, our digital reading room: a guide to ensuring a healthy complexion through the warmer months."}
            button={"Read more"}
            image={warmSectionImg}
        />
        <CommonSection
            subTitle={"Post-Poo Drops has returned"}
            description={"\n" +
            "Post-Poo Drops has returned\n" +
            "Here to make the malodorous melodious once again. Dispense this favoured formulation into the toilet bowl after flushing to effectively mask disagreeable odours."}
            button={"Discover Post-Poo Drops"}
            image={dropsSectionImg}
            className={"second-section"}
        />
        <StoreLocator/>
        <QuoteSection/>
        <Footer/>

    </div>
};

export default Homepage;