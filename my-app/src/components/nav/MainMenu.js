import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    const tbu = () => {
        alert("Will be uploaded soon!");
    };

    return (
        <nav id="header-nav">
            <ul id="header-nav-ul">
                <li>
                    <Link to="/" className="link">About Me</Link>
                </li>
                <li>
                    <Link to="/projects" className="link">Projects</Link>
                </li>
                <li>
                    <Link to="/contact" className="link">Contact</Link>
                </li>
                <li>
                    <Link to="https://docs.google.com/document/d/1UZM7aMWfNMZxkISy3hMDI9E42OgMyGxhT_WiVUOuENw/edit?usp=sharing]" target="_blank" className="link">Resume</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;