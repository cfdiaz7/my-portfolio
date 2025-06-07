// src/components/ParallaxBackground.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground = () => {
    const { scrollYProgress } = useScroll();

    const skyY = useTransform(scrollYProgress, [0, 1], ['0%', '0%']);
    const planetsY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
    const mountainsBackY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
    const mountainsMidY = useTransform(scrollYProgress, [0, 1], ['0%', '45%']);
    const mountainsFrontY = useTransform(scrollYProgress, [0, 1], ['0%', '65%']);

    return (
        <div className="parallax-container">
            {/* Capa 1: Fondo del cielo (más lejano) */}
            <motion.div
                className="parallax-layer"
                style={{
                    background: 'url(/mars-sky-bg.jpg) no-repeat center center / cover',
                    backgroundColor: '#0d0d1e',
                    y: skyY,
                    zIndex: -5,
                }}
            ></motion.div>

            {/* Capa 2: Planetas */}
            <motion.div
                className="parallax-layer"
                style={{
                    backgroundImage: 'url(/mars-planets.png)',
                    y: planetsY,
                    zIndex: -4,
                }}
            ></motion.div>

            {/* Capa 3: Montañas 1 (capa de fondo) */}
            <motion.div
                className="parallax-layer"
                style={{
                    backgroundImage: 'url(/mars-mountain-back.png)',
                    y: mountainsBackY,
                    zIndex: -3,
                }}
            ></motion.div>

            {/* Capa 4: Montañas 2 (capa intermedia) */}
            <motion.div
                className="parallax-layer"
                style={{
                    backgroundImage: 'url(/mars-mountain-mid.png)',
                    y: mountainsMidY,
                    zIndex: -2,
                }}
            ></motion.div>

            {/* Capa 5: Montañas 3 (capa de primer plano) */}
            <motion.div
                className="parallax-layer"
                style={{
                    backgroundImage: 'url(/mars-mountain-front.png)',
                    y: mountainsFrontY,
                    zIndex: -1,
                }}
            ></motion.div>
        </div>
    );
};

export default ParallaxBackground;