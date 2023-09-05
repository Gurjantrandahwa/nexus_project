import React, {useEffect, useState} from 'react';
import "./Navbar.scss";
import {BiSearch} from "react-icons/bi";
import {Navbar} from "react-bootstrap";


const CustomNavbar = () => {
    const [isResponsiveNavbarVisible, setResponsiveNavbarVisible] = useState(false);
    const checkScreenWidth = () => {
        if (window.innerWidth <= 1030) {
            setResponsiveNavbarVisible(true);
        } else {
            setResponsiveNavbarVisible(false);
        }
    };
    useEffect(() => {
        checkScreenWidth();
        window.addEventListener('resize', checkScreenWidth);

        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    return <>
        {!isResponsiveNavbarVisible && (
            <Navbar className={"navbar"} expand="lg" fixed={"sticky"} >
                <ul>
                    <li>Skin Care</li>
                    <li>Body & Hand</li>
                    <li>Hair</li>
                    <li>Fragrance</li>
                    <li>Home</li>
                    <li>Kits & Travel</li>
                    <li>Gifts</li>
                    <li>Read</li>
                    <li>Stores</li>
                    <li>Facial Appointments</li>
                    <button className={"search-btn"}><BiSearch/></button>
                </ul>
                <div className={'navbar-buttons'}>
                    <button>Login in</button>
                    <button>Cabinet</button>
                    <button>Cart</button>
                </div>
            </Navbar>
        )}
        {isResponsiveNavbarVisible && (
            <Navbar className="responsive-navbar">
                <ul>
                    <li>Shop</li>
                    <li>Read</li>
                    <li>Stores</li>
                    <button className={"search-btn"}><BiSearch/></button>
                </ul>
                <div className={'navbar-buttons'}>
                    <button>Login in</button>
                    <button>Cabinet</button>
                    <button>Cart</button>
                </div>
            </Navbar>
        )}

    </>
}

export default CustomNavbar;