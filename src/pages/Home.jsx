import React from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/images/avatar.png';
import cvPdf from '../assets/pdfs/Currículum Vitae CV.pdf';

const Home = () => {
    return (
        <>
            <div className="section-content-wrapper">
            <motion.img
                src={profilePhoto}
                alt="Carlos Fernández"
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
                Currently in my final part of my studies at UPM in Information Systems.
                I am passionate about connecting technology with people through smart and functional solutions.
                This is my personal space where I share my projects, skills and ways of contact.
                Welcome to my portfolio!
            </motion.p>
            <motion.a
                href={cvPdf}
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