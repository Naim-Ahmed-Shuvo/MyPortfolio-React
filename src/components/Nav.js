import React from 'react';
import '../css/Nav.css';
const Nav = () => {
    return (
        <div className="navbar">
            <div className="nav_logo">
                <span>Naim Ahmed Shuvo</span>
            </div>
            <div className="nav_links">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Service</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    
                </ul>
            </div>
            <div className="nav_extra">
                <button>Lets Humble 😃</button>
            </div>
        </div>
    );
};

export default Nav;