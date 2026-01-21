import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../style/Projects.css';

function Projects() {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "HR Connect Mobile App",
            description: "Cross-platform HR management application serving 500+ employees with real-time task management, messaging, push notifications, and employee engagement features including polls, birthday tracking, and social posts.",
            image: "👥",
            tech: ["React Native", "Expo", "Firebase", "Context API"],
            category: "mobile",
            liveUrl: "#",
            githubUrl: "#",
            featured: true
        },
        {
            id: 2,
            title: "Real-Time Task System",
            description: "Task assignment and tracking system with file attachments (PDF, Images, Documents), real-time updates, and messaging functionality. Reduced task completion time by 30%.",
            image: "✅",
            tech: ["React Native", "Firebase", "FCM", "Axios"],
            category: "mobile",
            liveUrl: "#",
            githubUrl: "#",
            featured: true
        },
        {
            id: 3,
            title: "Employee Engagement Module",
            description: "Interactive features including poll creation with real-time voting results, birthday tracking with automated reminders, and staff social activity feeds for enhanced workplace engagement.",
            image: "🎉",
            tech: ["React Native", "Firestore", "Push Notifications"],
            category: "mobile",
            liveUrl: "#",
            githubUrl: "#",
            featured: true
        },
        {
            id: 4,
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce website with user authentication, product catalog, search and filtering, shopping cart, checkout process, and order management. Built with Django MVC architecture.",
            image: "🛒",
            tech: ["Python Django", "SQLite", "HTML", "CSS", "JavaScript"],
            category: "fullstack",
            liveUrl: "#",
            githubUrl: "#",
            featured: false
        },
        {
            id: 5,
            title: "Custom Component Library",
            description: "Reusable component library with 15+ custom components including modals, alert dialogs, skeleton loaders, navigation bars, and header components for consistent UI/UX.",
            image: "🧩",
            tech: ["React Native", "Custom Hooks", "Styled Components"],
            category: "mobile",
            liveUrl: "#",
            githubUrl: "#",
            featured: false
        },
        {
            id: 6,
            title: "API Services Layer",
            description: "Robust API integration layer handling 50+ endpoints with proper error handling, loading states, and retry logic. Implemented efficient data fetching and caching strategies.",
            image: "🔗",
            tech: ["Axios", "REST API", "Error Handling", "Async/Await"],
            category: "backend",
            liveUrl: "#",
            githubUrl: "#",
            featured: false
        },
        {
            id: 7,
            title: "Real-Time Chat System",
            description: "Full-featured real-time messaging system with one-on-one and group chats, typing indicators, read receipts, message status, online presence, and media sharing capabilities.",
            image: "💬",
            tech: ["Socket.io", "React Native", "Firebase", "Real-Time DB"],
            category: "mobile",
            liveUrl: "#",
            githubUrl: "#",
            featured: true
        },
        {
            id: 8,
            title: "Social Post Creation System",
            description: "Feature-rich social posting platform where users can create posts with title, description, photos, mentions, location tags, and links. Interactive engagement with emoji reactions (like, love, laugh, etc.) and threaded comments for community interaction.",
            image: "📝",
            tech: ["React Native", "Geolocation", "Image Picker"],
            category: "mobile",
            liveUrl: "#",
            githubUrl: "#",
            featured: true
        },
        {
            id: 9,
            title: "Push Notification System",
            description: "Comprehensive push notification system with Firebase Cloud Messaging (FCM), scheduled notifications, notification channels, deep linking, and custom notification actions for enhanced user engagement.",
            image: "🔔",
            tech: ["Firebase FCM", "React Native", "Background Tasks", "Deep Linking"],
            category: "mobile",
            liveUrl: "#",
            githubUrl: "#",
            featured: true
        },
        {
            id: 10,
            title: "Blaze HR Desktop Application",
            description: "Cross-platform desktop chat application built with Electron for company internal communication. Features real-time messaging with Firebase, QR code authentication with Google OAuth, and hybrid storage architecture that reduces Firebase costs by auto-syncing to database.",
            image: "💻",
            tech: ["Electron", "Firebase", "JavaScript", "Google OAuth"],
            category: "desktop",
            liveUrl: "#",
            githubUrl: "#",
            featured: true
        }
    ];

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'mobile', name: 'Mobile Apps' },
        { id: 'desktop', name: 'Desktop Apps' },
        { id: 'fullstack', name: 'Full Stack' },
        { id: 'backend', name: 'Backend' }
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

            <div className="container">
                {/* Filter Buttons */}
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
                
                {/* Projects Grid */}
                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {filteredProjects.map(project => (
                        <motion.div
                            key={project.id}
                            className={`project-card ${project.featured ? 'featured' : ''}`}
                            variants={itemVariants}
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
                                <span className="project-emoji">{project.image}</span>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="tech-stack">
                                    {project.tech.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
{/* 
                                <div className="project-links">
                                    <a
                                        href={project.liveUrl}
                                        className="project-link live-demo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        className="project-link github"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </div> */}
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