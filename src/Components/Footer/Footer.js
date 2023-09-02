import React from 'react';
import {BsArrowRightShort, BsArrowUpRight} from "react-icons/bs";
import "./footer.scss";


const Footer = () => {
    return <footer className={"footer-container"}>
        <div className={"footer-lists-wrapper"}>
            <div className={"single-list-wrapper"}>
                <div className={"footer-text-wrapper"}>
                    <h2>Subscribe to Aesop communications</h2>
                    <div className={"input-wrapper"}>
                        <input
                            placeholder={"Email address"}
                            type={"text"}
                        />
                        <BsArrowRightShort/>
                    </div>
                    <div className={"checkbox"}>
                        <input
                            type={"checkbox"}
                        />
                        <p>
                            Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and
                            understood our <a href={"/"}>privacy policy</a>.
                        </p>
                    </div>
                </div>

                <div className={"lists"}>
                    <div>
                        <h2>Orders and support</h2>
                        <ul>
                            <li>Contact us
                                <BsArrowUpRight/>
                            </li>
                            <li>FAQS
                                <BsArrowUpRight/>
                            </li>
                            <li>Shipping
                                <BsArrowUpRight/>
                            </li>
                            <li>Returns
                                <BsArrowUpRight/>
                            </li>
                            <li>Order history</li>
                            <li>Terms and conditions</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Services</h2>
                        <ul>
                            <li>Live assistance</li>
                            <li> Corporate gifts</li>
                            <li> Facial Appointments</li>
                            <li> Click and Collect</li>
                            <li> Video consultation</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Location preferences</h2>
                        <ul>
                            <li>Shipping :</li>
                            <a href={"/"}>Hong Kong SAR, China</a>
                            <li>Language :</li>
                            <a href={""}>English</a>
                            <li>繁體中文</li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className={"single-list-wrapper"}>
                <div className={"footer-text-wrapper"}>
                    <h2>Sustainability</h2>
                    <p>
                        All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are
                        Leaping Bunny approved and a Certified B Corporation. Learn more
                    </p>
                </div>

                <div className={"lists"}>
                    <div>
                        <h2>About</h2>
                        <ul>
                            <li>Our story</li>
                            <li> Foundation</li>
                            <li> Careers</li>
                            <li> Privacy policy</li>
                            <li> Accessibility</li>
                            <li> Cookie Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Social media</h2>
                        <ul>
                            <li> Instagram
                                <BsArrowUpRight/>
                            </li>
                            <li> Twitter
                                <BsArrowUpRight/>
                            </li>
                            <li> LinkedIn
                                <BsArrowUpRight/>
                            </li>
                            <li>WeChat</li>
                            <li> Weibo
                                <BsArrowUpRight/>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <hr className={"footer-line"}/>
        <div className={"footer-logo"}>
            <h3>&copy; Aesop</h3>
        </div>
    </footer>
};

export default Footer;