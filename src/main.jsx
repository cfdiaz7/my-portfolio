import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContentScroller from './components/MainContentScroller';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <ScrollToTop />
            <Navbar />
            <main>
                <Routes>
                    <Route path="/*" element={<MainContentScroller />} />
                    <Route path="*" element={
                        <div style={{ textAlign: 'center', marginTop: '100px' }}>
                            <h1>404 - Página no encontrada</h1>
                            <p>Lo sentimos, la página que buscas no existe.</p>
                            <a href="/">Volver al inicio</a>
                        </div>
                    } />
                </Routes>
            </main>
        </Router>
    </React.StrictMode>,
);