import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <>
            <div className="section-content-wrapper">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Contact me
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ marginBottom: '40px' }}
                >
                    Do you have any questions, proposals or just want to say hello? Don't hesitate to contact me!
                </motion.p>
                <motion.form
                    action="https://formspree.io/f/myzjenzg"
                    method="POST"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="contact-form"
                >
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Mail:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </motion.form>
                <motion.div
                    className="social-icons-container" // Nueva clase para el contenedor de iconos
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <a href="https://www.linkedin.com/in/tu-perfil-linkedin" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                        <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.564c0-1.328-.027-3.044-1.852-3.044-1.853 0-2.136 1.445-2.136 2.934v5.674H9.351V9.281h3.413v1.564h.045c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.733a2.481 2.481 0 01-2.493-2.492c0-1.393 1.11-2.502 2.493-2.502s2.481 1.109 2.492 2.502A2.481 2.481 0 015.337 7.733zm3.504 12.719H1.833V9.281h3.504v11.171z" />
                        </svg>
                    </a>
                    <a href="https://github.com/cfdiaz7" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                        <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61c-.546-1.38-1.334-1.745-1.334-1.745-.92-.625.07-.613.07-.613 1.025.072 1.565 1.056 1.565 1.056.91.072 1.838-.26 2.288-.475.09-.695.358-1.04.65-1.284-2.185-.22-4.475-1.092-4.475-4.85 0-1.068.375-1.942 1.015-2.62-.1-.22-.44-1.243.09-2.585 0 0 .82-.26 2.695 1.0C10.51 5.918 11.233 5.815 12 5.815c.768 0 1.49.103 2.2.308 1.875-1.26 2.695-1 2.695-1 .53 1.342.19 2.365.09 2.585.64.678 1.015 1.552 1.015 2.62 0 3.76-2.29 4.62-4.485 4.84.365.31.69.92.69 1.85 0 1.34-.01 2.42-.015 2.755 0 .32.22.69.82.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                    <a href="mailto:carlos.fdiaz.97@gmail.com" className="social-icon-link">
                        <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2.003 5.884L12 11.882l9.997-5.998A2 2 0 0020 4H4a2 2 0 00-1.997 1.884zM2 8.118v10a2 2 0 002 2h16a2 2 0 002-2v-10L12 14 2 8.118z" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </>
    );
};

export default Contact;