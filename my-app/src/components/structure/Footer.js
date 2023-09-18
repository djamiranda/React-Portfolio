import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
        <footer>
            <div className="footer-row">
                <Link to="/contact" className="link">
                    <i className="bi bi-envelope-at"></i>
                </Link>
                <Link to="https://github.com/djamiranda" target="_blank" className="link">
                    <i className="bi bi-github"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/daniel-miranda-a414b749" target="_blank" className="link">
                    <i className="bi bi-linkedin"></i>
                </Link>
                <Link to="https://stackoverflow.com/users/22582723/djamiranda" target="_blank" className="link">
                    <i className="bi bi-stack-overflow"></i>
                </Link>
            </div>
            <div className="footer-row">
                Daniel Miranda 2023
            </div>
        </ footer>
    );
};

export default Footer;