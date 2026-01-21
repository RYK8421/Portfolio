import React from 'react';
import { motion } from 'framer-motion';
import '../style/Hero.css';
import { downloadCVAsPDF } from '../utils/cvGenerator';


const Hero = () => {
    const handleViewWork = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    <motion.h1 variants={textVariants} className="hero-title">
                        Hi, I'm <span className="gradient-text">Ridu Krishna C</span>
                    </motion.h1>

                    <motion.h2 variants={textVariants} className="hero-subtitle">
                        Frontend Developer (React Native, React.js & Electron)
                    </motion.h2>

                    <motion.p variants={textVariants} className="hero-description">
                        Building seamless cross-platform applications - mobile apps with React Native, 
                        web apps with React.js, and desktop apps with Electron. 1.5+ years of experience 
                        creating efficient, user-friendly solutions across all platforms.
                    </motion.p>

                    <motion.div variants={textVariants} className="hero-buttons">
                        <button className="btn btn-primary glowing-border" onClick={handleViewWork}>
                            View My Work 
                        </button>
                        <button className="btn btn-secondary" onClick={downloadCVAsPDF}>
                            Download CV
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="floating-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                    </div>
                    <div className="profile-container">
                        <div className="profile-image"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;