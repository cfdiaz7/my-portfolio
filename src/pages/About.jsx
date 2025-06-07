// src/pages/About.jsx
import React from 'react';
import Section from '../components/Section';

const About = () => {
    return (
        <Section id="sobre-mi" title="Sobre Mí">
            <p>
                Soy un apasionado estudiante de Sistemas de Información en la Universidad Politécnica de Madrid (UPM) con interés en IA, ingenieria de datos y gestion de proyectos y servicios IT.
                Mi objetivo es construir soluciones eficientes y escalables que resuelvan problemas del mundo real.
            </p>
            <p>
                Durante mi formación, he adquirido conocimientos en diversas áreas como programación (JavaScript, Python, Java, C), bases de datos (SQL, NoSQL), redes, metodologías ágiles (SCRUM, Kanban) y tradicionales.
                Me encanta aprender nuevas tecnologías y enfrentar desafíos que me permitan crecer profesionalmente.
            </p>
            <h3>Mis Habilidades</h3>
            <ul>
                <li>**Lenguajes:** JavaScript (ES6+), Python, Java, SQL, HTML, CSS</li>
                <li>**Frameworks/Librerías:** React, Node.js (básico), Express.js (básico)</li>
                <li>**Bases de Datos:** MySQL, PostgreSQL, MongoDB</li>
                <li>**Herramientas:** Git, GitHub, Docker (básico), Figma (básico)</li>
                <li>**Conceptos:** Paradigmas de Programación (OOP, Funcional), Estructuras de Datos, Algoritmos, Patrones de Diseño, Desarrollo Ágil (Scrum)</li>
            </ul>
        </Section>
    );
};

export default About;