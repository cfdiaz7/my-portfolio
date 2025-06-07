// src/components/Section.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, children }) => {
    return (
        <motion.section
            id={id}
            className="section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
            {title && <h2>{title}</h2>}
            {children}
        </motion.section>
    );
};

export default Section;