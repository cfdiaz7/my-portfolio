import React from 'react';
import { motion } from 'framer-motion';
import projectImage1 from '../assets/images/Portfolio-project.jpg';

const ProjectCard = ({ title, description, link, image }) => {
    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
        >
            {image && <img src={image} alt={title} className="project-image" />}
            <h3>{title}</h3>
            <p>{description}</p>
            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="project-link-button">
                    See Project
                </a>
            )}
        </motion.div>
    );
};


const Projects = () => {
    const projects = [
        {
            title: "Web Portfolio",
            description: "Developing of a web portfolio using React and Vite.",
            link: "https://github.com/cfdiaz7/my-portfolio",
            image: projectImage1
        },
        {
            title: "NLP Project",
            description: "Final degree project",
            link: "https://github.com/cfdiaz7/TFG_Modelo_NLP",
            image: null
        },
    ];

    return (
        <>
            <div className="section-content-wrapper">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    My Projects
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ marginBottom: '40px' }}
                >
                    Here you can explore some of the projects I have worked on.
                </motion.p>

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
