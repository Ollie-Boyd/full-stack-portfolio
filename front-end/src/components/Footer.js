import React, {Component} from 'react';
import './Footer.css';
import coffee from "../images/icons/coffee.svg";

function Footer() {
    return (
        <>
        <div className="footerContainer">
            <div id="footer">
                <div className="footerContent">
                    <div className = "footerFlex">
                        <span>© 2020 Ollie Boyd</span>
                        <img src={coffee} alt="let's get coffee"/>
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}

export default Footer;