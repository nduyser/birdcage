import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_transparent.png';
import { FaBars, FaTimes, FaBandcamp, FaInstagram, FaSoundcloud, FaTwitch } from 'react-icons/fa';

interface Route {
    path: string;
    name: string;
}

interface NavbarProps {
    routes: Route[];
}

const socials = [
    { path: 'https://instagram.com/birdcageradio', icon: <FaInstagram /> },
    { path: 'https://twitch.tv/birdcageradio', icon: <FaTwitch /> },
    { path: 'https://birdcageradio.bandcamp.com', icon: <FaBandcamp /> },
    { path: 'https://soundcloud.com/birdcageradio', icon: <FaSoundcloud /> },
];

const Navbar: React.FC<NavbarProps> = ({ routes }) => {
    const home = routes.find((route) => route.name === 'Home');
    const menuItems = routes.filter((route) => route.name !== 'Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="navbar">
            <div className="navbar-left">
                {home && (
                    <Link to={home.path} className="navbar-logo-container" onClick={closeMenu}>
                        <img src={logo} alt="Birdcage Radio Logo" className="navbar-logo" />
                    </Link>
                )}
                <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                    {menuItems.map((route, index) => (
                        <li key={index} className="navbar-menu-item">
                            <Link to={route.path} onClick={closeMenu}>
                                {route.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-right">
                <div className={`navbar-mobile-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes size={40}/> : <FaBars size={40}/>}
                </div>
                <ul className="navbar-socials">
                    {socials.map((social, index) => (
                        <li key={index} className="navbar-social-item">
                            <Link to={social.path} target="_blank">
                                {social.icon}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {isMenuOpen && (
                <div className="navbar-mobile-overlay" onClick={closeMenu}>
                    <ul className="navbar-mobile-menu">
                        {menuItems.map((route, index) => (
                            <li key={index} className="navbar-mobile-menu-item">
                                <Link to={route.path}>{route.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="navbar-mobile-socials">
                        {socials.map((social, index) => (
                            <li key={index} className="navbar-mobile-social-item">
                                <Link to={social.path} target="_blank">
                                    {social.icon}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
