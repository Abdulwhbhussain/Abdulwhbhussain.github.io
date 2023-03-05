import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Wahab</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>

                </ul>

                <div className="footer__social">
                <a href="https://facebook.com/abdulwhbhussain" className="footer__social-link" target="_blank" rel="noreferrer">
            <i class="uil uil-facebook"></i>
            </a>
            <a href="https://instagram.com/abdulwhbhussain" className="footer__social-link" target="_blank" rel="noreferrer">
            <i class="uil uil-instagram"></i>
            </a>
            <a href="https://twitter.com/AbdulWhbHussain" className="footer__social-link" target="_blank" rel="noreferrer">
            <i class="uil uil-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/abdulwhbhussain" className="footer__social-link" target="_blank" rel="noreferrer">
            <i class="uil uil-linkedin"></i>
            </a>
            <a href="https://github.com/Abdulwhbhussain" className="footer__social-link" target="_blank" rel="noreferrer">
            <i class="uil uil-github"></i>
            </a>
                </div>

                <span className="footer__copy">&#169; Wahab. All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;
