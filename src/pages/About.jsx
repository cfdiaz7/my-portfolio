import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <>
            <div className="section-content-wrapper">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                About Me
            </motion.h1>
            <motion.p>
                Soy un apasionado estudiante de Sistemas de Información en la Universidad Politécnica de Madrid (UPM) con interés en IA, ingenieria de datos y gestion de proyectos y servicios IT.
                Mi objetivo es construir soluciones eficientes y escalables que resuelvan problemas del mundo real.
            </motion.p>
            <motion.p>
                Durante mi formación, he adquirido conocimientos en diversas áreas como programación (JavaScript, Python, Java, C), bases de datos (SQL, NoSQL), redes, metodologías ágiles (SCRUM, Kanban) y tradicionales.
                Me encanta aprender nuevas tecnologías y enfrentar desafíos que me permitan crecer profesionalmente.
            </motion.p>
            <motion.h3>Mis Habilidades</motion.h3>
            <motion.ul>
                <motion.li>**Lenguajes:** JavaScript (ES6+), Python, Java, SQL, HTML, CSS</motion.li>
                <motion.li>**Frameworks/Librerías:** React, Node.js (básico), Express.js (básico)</motion.li>
                <motion.li>**Bases de Datos:** MySQL, PostgreSQL, MongoDB</motion.li>
                <motion.li>**Herramientas:** Git, GitHub, Docker (básico), Figma (básico)</motion.li>
                <motion.li>**Conceptos:** Paradigmas de Programación (OOP, Funcional), Estructuras de Datos, Algoritmos, Patrones de Diseño, Desarrollo Ágil (Scrum)</motion.li>
            </motion.ul>
            </div>
        </>
    );
};

export default About;