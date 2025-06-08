import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Footer from './Footer';

const sections = [
    { id: 'home', Component: Home, path: '/' },
    { id: 'about', Component: About, path: '/sobre-mi' },
    { id: 'projects', Component: Projects, path: '/proyectos' },
    { id: 'contact', Component: Contact, path: '/contacto' },
    { id: 'footer-section', Component: Footer, path: '/footer' },
];

const MainContentScroller = () => {
    const sectionRefs = useRef([]);
    const navigate = useNavigate();
    const location = useLocation();
    const scrollerRef = useRef(null);
    const isNavigatingRef = useRef(false);

    useEffect(() => {
        sectionRefs.current = sections.map((_, i) => sectionRefs.current[i] || React.createRef());
    }, []);

    const scrollToSection = useCallback((id) => {
        const targetSectionIndex = sections.findIndex(s => s.id === id);
        const targetRef = sectionRefs.current[targetSectionIndex];
        if (targetRef && targetRef.current) {
            isNavigatingRef.current = true;
            targetRef.current.scrollIntoView({ behavior: 'smooth' });

            setTimeout(() => {
                isNavigatingRef.current = false;
            }, 700);
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const currentSection = sections.find(s => s.id === entry.target.id);
                        if (currentSection && !isNavigatingRef.current) {
                            if (location.pathname !== currentSection.path) {
                                navigate(currentSection.path, { replace: true });
                            }
                        }
                    }
                });
            },
            {
                root: scrollerRef.current,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        sectionRefs.current.forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            sectionRefs.current.forEach(ref => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [navigate, location.pathname, isNavigatingRef, scrollerRef]);

    useEffect(() => {
        const targetPath = location.pathname;
        const targetSection = sections.find(s => s.path === targetPath);

        if (targetSection) {
            scrollToSection(targetSection.id);
        } else {
            if (location.pathname === '/') {
                scrollToSection('home');
            }
        }
    }, [location.pathname, scrollToSection]);

    return (
        <div className="main-content-scroller" ref={scrollerRef}> {}
            {sections.map((section, index) => (
                <section
                    key={section.id}
                    id={section.id}
                    ref={sectionRefs.current[index]}
                    className={section.id === 'footer-section' ? 'footer-section' : 'section'}
                >
                    <section.Component />
                </section>
            ))}
        </div>
    );
};

export default MainContentScroller;