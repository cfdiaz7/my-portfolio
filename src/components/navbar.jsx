import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Navbar = () => {
    const [isTransparent, setIsTransparent] = useState(false);

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
                <Link to="/" className="navbar-logo">
                    Carlos Fernández
                </Link>
                <div className="navbar-nav">
                    <Link to="/">Home</Link>
                    <Link to="/sobre-mi">About Me</Link>
                    <Link to="/proyectos">Projects</Link>
                    <Link to="/contacto">Contact</Link>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;