import React from 'react';
import './footer.css';
import logo from '../../assets/LOGO.svg';
import facebook from '../../assets/icon-fb.png';
import insta from '../../assets/icon-insta.png';
import inlinked from '../../assets/icon-linked.png';
import twitter from '../../assets/icon-twitter.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__column">
                    <a href="./index.html" className="navbar__logo">
                        <img src={logo} alt="Logo" className="logo__image" />
                    </a>
                    <p className="footer__desc">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                    </p>
                    <p className="footer__handle">@Logo</p>
                </div>

                <div className="footer__column">
                    <h4 className="footer__title">About us</h4>
                    <ul className="footer__links">
                        <li><a href="#">Zeux</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>

                <div className="footer__column">
                    <h4 className="footer__title">Contact us</h4>
                    <p className="footer__desc">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                    </p>
                    <p className="footer__phone">+908 89097 890</p>
                </div>

                <div className="footer__socials">
                    <a href="#"><img src={facebook} alt="FB" /></a>
                    <a href="#"><img src={insta} alt="IG" /></a>
                    <a href="#"><img src={twitter} alt="TW" /></a>
                    <a href="#"><img src={inlinked} alt="IN" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
