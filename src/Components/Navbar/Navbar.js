import React from 'react';
import "./Navbar.scss";
import {BiSearch} from "react-icons/bi";


const Navbar = () => {
    return <nav className={"navbar"}>
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
    </nav>
}

export default Navbar;