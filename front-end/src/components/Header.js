import React, {Component} from 'react';
import './Header.css';
import linkedIn from "../images/icons/linkedin.svg";
import email from "../images/icons/paper-plane.svg";
import github from "../images/icons/github.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    <header>
        <div className="headerContainer">
            <div className="titleContainer">
                <div className="title">
                    <span>Ollie</span> Boyd
                </div>
            </div>

            <div className="iconsContainer">
                <a href="mailto:ollyboyd@hotmail.co.uk">
                    <img src={linkedIn} alt="emailme" className="headerIcon"/>
                </a>
                <a href="https://www.linkedin.com/in/oliver-boyd-27a383b4/">
                    <img src={email} alt="Linkedin" className="headerIcon"/>
                </a>
                <a href="https://www.linkedin.com/in/oliver-boyd-27a383b4/">
                    <img src={github} alt="Instagram" className="headerIcon"/>
                </a>
            </div>

        </div>
        <hr className="line" />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    </>
  );
}

export default Header;