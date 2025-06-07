// src/pages/Contact.jsx
import React from 'react';
import Section from '../components/Section';

const Contact = () => {
    return (
        <Section id="contacto" title="Contáctame">
            <p>
                ¿Tienes una pregunta, una propuesta o simplemente quieres saludar? ¡No dudes en contactarme!
            </p>
            <form className="contact-form" action="https://formspree.io/f/your-formspree-id" method="POST">
                {/* Reemplaza 'your-formspree-id' con tu ID de Formspree */}
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Mail:</label>
                <input type="email" id="email" name="_replyto" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Send Message</button>
                <p>
                    También puedes encontrarme en:
                    <br />
                    <a href="https://www.linkedin.com/in/tu-perfil-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
                    <a href="https://github.com/cfdiaz7" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>GitHub</a> |
                    <a href="mailto:carlos.fdiaz.97@gmail.com" style={{ marginLeft: '10px' }}>tu.email@example.com</a>
                </p>
            </form>
        </Section>
    );
};

export default Contact;