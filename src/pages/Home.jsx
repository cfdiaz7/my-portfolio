import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <>
            <div className="section-content-wrapper">
            <motion.img
                src="/avatar.png"
                alt="Foto de perfil"
                className="profile-photo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.h1
                className="gradient-heading"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                Hi! I am Carlos Fernández
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
            >
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </motion.p>
            <motion.a
                href="/Currículum Vitae CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="download-cv-button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
            >
                Download CV
            </motion.a>
            </div>
        </>
    );
};

export default Home;