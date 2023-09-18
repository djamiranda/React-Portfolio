import React from 'react';
import { Link } from 'react-router-dom';
import MainMenu from '../nav/MainMenu';

const Header = (props) => {

    return (
        <header>
            <div id="logo">
                <Link to="/" className="link">
                    <h1>
                        Daniel <span>Miranda</span>
                    </h1>
                </Link>
            </div>
            <MainMenu />
        </header>
    );
};

export default Header;