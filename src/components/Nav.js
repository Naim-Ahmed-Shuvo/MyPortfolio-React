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
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#skill">Skill</a>
                    </li>
                    <li>
                        <a href="#Education">Education</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
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