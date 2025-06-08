import React, { useState, useEffect } from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import { motion } from "framer-motion";

const Navbar = () => {
    const [isTransparent, setIsTransparent] = useState(false);
    const location = useLocation();

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsTransparent(true);
        } else {
            setIsTransparent(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.nav
            className={`navbar ${isTransparent ? 'transparent-navbar' : 'solid-navbar'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.2 }}
        >
            <div className="navbar-container">
                <NavLink to="/" className="navbar-logo">
                    Carlos
                </NavLink>
                <ul className="navbar-nav">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                    <li><NavLink to="/sobre-mi" className={({ isActive }) => isActive ? 'active' : ''}>About Me</NavLink></li>
                    <li><NavLink to="/proyectos" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
                    <li><NavLink to="/contacto" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;