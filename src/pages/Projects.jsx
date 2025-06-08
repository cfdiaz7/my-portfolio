// src/pages/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Componente individual para cada tarjeta de proyecto
const ProjectCard = ({ title, description, link, image }) => {
    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 50 }} // Animación al aparecer
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }} // Efecto de escala al pasar el ratón
        >
            {image && <img src={image} alt={title} className="project-image" />}
            <h3>{title}</h3>
            <p>{description}</p>
            {/* --- CÓDIGO PARA AÑADIR EL BOTÓN DE ENLACE --- */}
            {link && ( /* Esto renderiza el botón SOLAMENTE si la prop 'link' existe */
                <a href={link} target="_blank" rel="noopener noreferrer" className="project-link-button">
                    Ver Proyecto
                </a>
            )}
            {/* --- FIN CÓDIGO PARA AÑADIR EL BOTÓN DE ENLACE --- */}
        </motion.div>
    );
};

// Componente principal de la página de Proyectos
const Projects = () => {
    // Datos de ejemplo para tus proyectos. ¡Reemplaza con tus proyectos reales!
    const projects = [
        {
            title: "Proyecto Web de Portafolio",
            description: "Desarrollo de un portafolio web interactivo utilizando React, Framer Motion y CSS moderno.",
            link: "https://github.com/tu-usuario/tu-repositorio-portafolio", // <-- ¡IMPORTANTE! Reemplaza con la URL REAL de tu repositorio
            image: "https://placehold.co/400x250/3498db/ffffff?text=Portafolio" // Imagen de placeholder
        },
        {
            title: "Aplicación de Gestión de Tareas",
            description: "Creación de una aplicación para organizar tareas diarias con funcionalidades CRUD.",
            link: "https://github.com/tu-usuario/proyecto-tareas", // <-- Reemplaza con la URL REAL
            image: "https://placehold.co/400x250/2ecc71/ffffff?text=Tareas+App"
        },
        {
            title: "Sistema de Recomendación",
            description: "Implementación de un algoritmo de recomendación de películas basado en el historial de usuario.",
            link: "https://github.com/tu-usuario/proyecto-recomendacion", // <-- Reemplaza con la URL REAL
            image: "https://placehold.co/400x250/e74c3c/ffffff?text=Recomendacion"
        },
        {
            title: "Juego Simple con JavaScript",
            description: "Desarrollo de un juego de adivinanzas utilizando HTML, CSS y JavaScript puro.",
            link: "https://github.com/tu-usuario/proyecto-juego", // <-- Reemplaza con la URL REAL
            image: "https://placehold.co/400x250/f1c40f/ffffff?text=Juego+JS"
        }
    ];

    return (
        <>
            {/* El section-content-wrapper limita el ancho de toda la sección de proyectos */}
            <div className="section-content-wrapper">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Mis Proyectos
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ marginBottom: '40px' }}
                >
                    Aquí puedes explorar algunos de los proyectos en los que he trabajado.
                </motion.p>

                {/* Contenedor Grid para las tarjetas de proyecto */}
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;
