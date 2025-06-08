import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Formulario enviado (simulado)');
    };

    return (
        <>
            <div className="section-content-wrapper">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Contáctame
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ marginBottom: '40px' }}
                >
                    ¿Tienes alguna pregunta, propuesta o simplemente quieres saludar? ¡No dudes en contactarme!
                </motion.p>

                <motion.form
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    onSubmit={handleSubmit}
                    className="contact-form"
                >
                    <div className="form-group">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Enviar Mensaje</button>
                </motion.form>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    style={{ marginTop: '30px' }}
                >
                    También puedes encontrarme en: <br />
                    <a href="https://www.linkedin.com/in/tu-perfil-linkedin" target="_blank" rel="noopener noreferrer" style={{ color: '#8cafff' }}>LinkedIn</a> |
                    <a href="https://github.com/tu-usuario-github" target="_blank" rel="noopener noreferrer" style={{ color: '#8cafff', marginLeft: '10px' }}>GitHub</a> |
                    <span style={{ marginLeft: '10px' }}>carlos.fdiaz.97@gmail.com</span>
                </motion.p>
            </div>
        </>
    );
};

export default Contact;