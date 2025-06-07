// src/pages/Projects.jsx
import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'Sistema de Gestión de Biblioteca',
        description: 'Una aplicación web full-stack para la gestión de libros, usuarios y préstamos en una biblioteca. Desarrollado como proyecto universitario.',
        tech: 'Java, Spring Boot, MySQL, Thymeleaf',
        demoLink: '#', // Reemplaza con un enlace a la demo si tienes
        repoLink: 'https://github.com/tu-usuario/proyecto-biblioteca' // Reemplaza con tu repo
    },
    {
        id: 2,
        title: 'Aplicación de Tareas Pendientes (To-Do App)',
        description: 'Una aplicación interactiva de lista de tareas con funcionalidades de añadir, editar, eliminar y marcar como completado. Demostración de React.',
        tech: 'React, JavaScript, CSS',
        demoLink: '#',
        repoLink: 'https://github.com/tu-usuario/react-todo-app'
    },
    {
        id: 3,
        title: 'Análisis de Datos con Python',
        description: 'Un script de Python para el análisis de un dataset específico, extrayendo insights y generando visualizaciones. Proyecto de ciencia de datos.',
        tech: 'Python, Pandas, Matplotlib, Jupyter Notebook',
        demoLink: '#',
        repoLink: 'https://github.com/tu-usuario/analisis-datos-python'
    },
    // Puedes añadir más proyectos aquí
];

const ProjectCard = ({ project }) => (
    <motion.div
        className="project-card"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
        }}
    >
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p><strong>Tecnologías:</strong> {project.tech}</p>
        {project.demoLink !== '#' && <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Ver Demo</a>}
        {project.repoLink !== '#' && <a href={project.repoLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '15px' }}>Ver Código</a>}
    </motion.div>
);

const Projects = () => {
    return (
        <Section id="proyectos" title="Mis Proyectos">
            <p>
                Aquí puedes explorar algunos de los proyectos en los que he trabajado, mostrando mis habilidades y las tecnologías que he utilizado.
            </p>
            <motion.div
                className="project-grid"
                variants={{
                    hidden: { opacity: 1 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </motion.div>
        </Section>
    );
};

export default Projects;