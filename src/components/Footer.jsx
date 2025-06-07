import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
        >
            <p>&copy; {new Date().getFullYear()} Carlos Fernández. Todos los derechos reservados.</p>
            <p>Developed with React, Vite y love.</p>
        </motion.footer>
    );
};

export default Footer;