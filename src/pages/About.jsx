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
                I am a passionate student of Information Systems at the Polytechnic University of Madrid (UPM) with interest in AI, data engineering and project management and IT services.
                My goal is to build efficient and scalable solutions that solve real-world problems.
            </motion.p>
            <motion.p>
                I have acquired knowledge in various areas such as programming, databases, networks, agile methodologies.
                I love learning new technologies and facing challenges that allow me to grow professionally.
            </motion.p>
            <motion.h3>My Skills</motion.h3>
            <motion.ul>
                Languages:JavaScript, Python, Java, SQL, HTML, CSS<br/>
                Frameworks: React y Vite<br/>
                Databases: MySQL, PostgreSQL, MongoDB<br/>
                Tools: GitHub, Docker , Jira<br/>
                Concepts: Programming Paradigms, Data Structures, Algorithms, Design Patterns, Agile Development, IT Service Management Frameworks
            </motion.ul>
            </div>
        </>
    );
};

export default About;