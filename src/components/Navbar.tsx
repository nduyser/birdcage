import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo_transparent.png";
import {FaBandcamp, FaInstagram, FaSoundcloud, FaTwitch} from "react-icons/fa";

interface Route {
    path: string;
    name: string;
}

interface NavbarProps {
    routes: Route[];
}

const socials = [
    { path: "https://instagram.com/birdcageradio", icon: <FaInstagram/> },
    { path: "https://twitch.tv/birdcageradio", icon: <FaTwitch/> },
    { path: "https://birdcageradio.bandcamp.com", icon: <FaBandcamp/>},
    { path: "https://soundcloud.com/birdcageradio", icon: <FaSoundcloud/>}
]

export const Navbar: React.FC<NavbarProps> = ({routes}) => {
    const home = routes.find((route) => route.name === "Home");
    const menuItems = routes.filter((route) => route.name !== "Home")
    return (
        <div className="navbar">

            <div className="navbar-left">
            {home && (
                <Link to={home.path} className="navbar-logo-container">
                    <img src={logo} alt="Birdcage Radio Logo" className="navbar-logo"/>
                </Link>
            )}
            <ul className="navbar-links">
                {menuItems.map((route, index) => (
                    <li key={index} className="navbar-menu-item">
                        <Link to={route.path}>
                            {route.name}
                        </Link>
                    </li>
                ))}
            </ul>
            </div>

            <div className="navbar-right">
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
        </div>
    );
};

export default Navbar;
