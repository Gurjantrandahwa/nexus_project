import React from 'react';
import {BsArrowRightShort} from "react-icons/bs";
import "./storeLoactor.scss";


const StoreLocator = () => {
    return <div className={"store-locator"}>
        <div className={"section-text-wrapper"}>
            <h2>Store Locator</h2>
            <p>Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </p>
            <button>Find a nearby store
                <BsArrowRightShort/>
            </button>
        </div>
    </div>
};

export default StoreLocator;