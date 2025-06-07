import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ParallaxBackground from './components/ParallaxBackground.jsx';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <ScrollToTop /> {}
            <ParallaxBackground /> {}
            <Navbar /> {}
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre-mi" element={<About />} />
                    <Route path="/proyectos" element={<Projects />} />
                    <Route path="/contacto" element={<Contact />} />
                    {}
                    <Route path="*" element={
                        <div style={{ textAlign: 'center', marginTop: '100px' }}>
                            <h1>404 - Página no encontrada</h1>
                            <p>Lo sentimos, la página que buscas no existe.</p>
                            <a href="/">Volver al inicio</a>
                        </div>
                    } />
                </Routes>
            </main>
            <Footer /> {}
        </Router>
    </React.StrictMode>,
);