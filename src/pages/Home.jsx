import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <Section id="home">
            <motion.img
                src="/avatar.png"
                alt="Foto de perfil"
                className="profile-photo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                Hi!, I am Carlos Fernández
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
            >
                Currently in my final part of my studies at the University of Madrid in Information Systems, I am looking for a job as a Software Engineer or Data Engineering.
                I am passionate about technology and I love to learn new things.
            </motion.p>
            <motion.a
                href="/Currículum Vitae CV.pdf"
                download
                style={{
                    display: 'inline-block',
                    marginTop: '30px',
                    padding: '12px 25px',
                    backgroundColor: '#646cff',
                    color: 'white',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s ease'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
            >
                Descargar CV
            </motion.a>
        </Section>
    );
};

export default Home;