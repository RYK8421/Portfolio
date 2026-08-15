import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaUsers, FaGlobe, FaLink, FaDesktop, FaPaw } from 'react-icons/fa';
import '../style/Projects.css';

function Projects() {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "RootHR Mobile App",
            description: "Enterprise-level cross-platform HR management application built with React Native, Expo, and TypeScript. Features geolocation-based attendance tracking with geofencing, shift scheduling, leave management, document handling with digital signatures, performance reviews, and team communication. Multi-portal architecture supporting employees, employers, admins, and partners. Implements Apple/Google Sign-In, React Query for state management, Expo Router for navigation, push notifications, and real-time messaging. Production-ready with automated CI/CD via EAS, available on iOS and Android app stores at version 1.0.8.",
            icon: <FaBuilding />,
            tech: ["React Native", "TypeScript", "Expo SDK 54", "React Query", "EAS", "Geolocation"],
            category: "mobile",
            liveUrl: "#",
            githubUrl: "#",
            featured: true
        },
       
        {
            id: 2,
            title: "Blazr HR Mobile App",
            description: "Comprehensive cross-platform HR management application serving 500+ employees with integrated features: Real-time task management system with file attachments and messaging, employee engagement module with polls and birthday tracking, push notification system with FCM, real-time chat with group messaging and media sharing, social post creation with reactions and comments, and 15+ custom reusable components. Reduced task completion time by 30%.",
            icon: <FaUsers />,
            tech: ["React Native", "Expo", "Firebase", "Context API", "FCM", "Socket.io"],
            category: "mobile",
            liveUrl: "#",
            githubUrl: "#",
            featured: true
        },
        {
            id: 3,
            title: "Petora – Inventory Management System",
            description: "Full-stack real-time inventory management system supporting both web and mobile platforms. Features product & category management with CRUD operations, role-based authentication for Admin and Staff, real-time data synchronization using Firestore, offline support with AsyncStorage, image compression and optimization, responsive UI, and performance optimization using FlashList and caching. Built with React for web and React Native with Expo for mobile.",
            icon: <FaPaw />,
            tech: ["React", "React Native", "Expo", "Firebase", "Firestore", "Context API", "AsyncStorage"],
            category: "fullstack",
            liveUrl: "#",
            githubUrl: "#",
            featured: true
        },
        {
            id: 4,
            title: "Portfolio Website",
            description: "Modern and responsive portfolio website showcasing projects, skills, and experience. Features smooth animations with Framer Motion, interactive UI components, contact form with email integration, and CV download functionality.",
            icon: <FaGlobe />,
            tech: ["React.js", "Framer Motion", "CSS3", "Vercel"],
            category: "website",
            liveUrl: "#",
            githubUrl: "#",
            featured: true
        },
        {
            id: 5,
            title: "API Services Layer",
            description: "Robust API integration layer handling 50+ endpoints with proper error handling, loading states, and retry logic. Implemented efficient data fetching and caching strategies.",
            icon: <FaLink />,
            tech: ["Axios", "REST API", "Error Handling", "Async/Await"],
            category: "mobile",
            liveUrl: "#",
            githubUrl: "#",
            featured: false
        },
        {
            id: 6,
            title: "Blaze HR Desktop Application",
            description: "Cross-platform desktop chat application built with Electron for company internal communication. Features real-time messaging with Firebase, QR code authentication with Google OAuth, and hybrid storage architecture that reduces Firebase costs by auto-syncing to database.",
            icon: <FaDesktop />,
            tech: ["Electron", "Firebase", "JavaScript", "Google OAuth"],
            category: "desktop",
            liveUrl: "#",
            githubUrl: "#",
            featured: true
        }
    ];

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'mobile', name: 'Mobile' },
        { id: 'fullstack', name: 'Full-Stack' },
        { id: 'website', name: 'Website' },
        { id: 'desktop', name: 'Desktop' }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="projects" className="projects">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                My Projects
            </motion.h2>
            <motion.p
                className="projects-subtitle"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Here are some of my recent works that showcase my skills and passion for development
            </motion.p>

            <motion.div
                className="filter-buttons"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {categories.map((category) => (
                    <motion.button
                        key={category.id}
                        className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                        onClick={() => setFilter(category.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {category.name}
                    </motion.button>
                ))}
            </motion.div>
            
            <div className="container">
                {/* Projects Grid */}
                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={filter}
                >
                    {filteredProjects.map(project => (
                        <motion.div
                            key={project.id}
                            className={`project-card ${project.featured ? 'featured' : ''}`}
                            variants={itemVariants}
                            layout
                            whileHover={{
                                scale: 1.03,
                                y: -10
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {project.featured && (
                                <div className="featured-badge">Featured</div>
                            )}

                            <div className="project-image">
                                <span className="project-icon">{project.icon}</span>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="tech-stack">
                                    {project.tech.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="project-glow"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Projects;
