import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../style/Skills.css';

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const skills = [
        {
            name: 'React Native',
            level: 92,
            color: '#61dafb',
            icon: '⚛️',
            category: 'Mobile'
        },
        {
            name: 'Expo SDK',
            level: 90,
            color: '#000020',
            icon: '📱',
            category: 'Mobile'
        },
        {
            name: 'React.js',
            level: 90,
            color: '#61dafb',
            icon: '⚛️',
            category: 'Frontend'
        },
        {
            name: 'JavaScript ES6+',
            level: 90,
            color: '#f7df1e',
            icon: '⚡',
            category: 'Frontend'
        },
        {
            name: 'HTML5 & CSS3',
            level: 88,
            color: '#e34f26',
            icon: '🌐',
            category: 'Frontend'
        },
        {
            name: 'Firebase',
            level: 88,
            color: '#ffca28',
            icon: '🔥',
            category: 'Backend'
        },
        {
            name: 'REST APIs',
            level: 88,
            color: '#339933',
            icon: '🔗',
            category: 'Backend'
        },
        {
            name: 'Python Django',
            level: 75,
            color: '#092e20',
            icon: '🐍',
            category: 'Backend'
        },
        {
            name: 'Context API',
            level: 88,
            color: '#764abc',
            icon: '🔄',
            category: 'State Management'
        },
        {
            name: 'React Hooks',
            level: 90,
            color: '#61dafb',
            icon: '🪝',
            category: 'State Management'
        },
        {
            name: 'Git/GitHub',
            level: 88,
            color: '#f05032',
            icon: '📚',
            category: 'Tools'
        },
        {
            name: 'EAS Build',
            level: 85,
            color: '#4630eb',
            icon: '🔨',
            category: 'Tools'
        }
    ];

    const categories = [
        { name: 'All', icon: '🌟', count: 12 },
        { name: 'Mobile', icon: '📱', count: 2 },
        { name: 'Frontend', icon: '💻', count: 3 },
        { name: 'Backend', icon: '🔧', count: 3 },
        { name: 'State Management', icon: '🔄', count: 2 },
        { name: 'Tools', icon: '🛠️', count: 2 }
    ];

    // Filter skills based on selected category
    const filteredSkills = selectedCategory === 'All' 
        ? skills 
        : skills.filter(skill => skill.category === selectedCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "backOut"
            }
        }
    };

    return (
        <section id="skills" className="skills-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Skills & Technologies
            </motion.h2>

            <motion.div
                className="skills-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Categories Overview */}
                <motion.div
                    className="categories-overview"
                    variants={itemVariants}
                >
                    <h3 className="categories-title">Expertise Areas</h3>
                    <div className="categories-grid">
                        {categories.map((category) => (
                            <motion.div
                                key={category.name}
                                className={`category-card ${selectedCategory === category.name ? 'active' : ''}`}
                                variants={skillVariants}
                                onClick={() => setSelectedCategory(category.name)}
                                whileHover={{
                                    scale: 1.05,
                                    y: -5
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="category-icon">{category.icon}</div>
                                <h4 className="category-name">{category.name}</h4>
                                <p className="category-count">{category.count} skills</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    className="skills-grid"
                    variants={itemVariants}
                >
                    <motion.h3 
                        className="skills-subtitle"
                        key={selectedCategory}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1 }}
                    >
                        {selectedCategory === 'All' ? 'Technical Proficiency' : `${selectedCategory} Skills`}
                    </motion.h3>
                    <div className="skills-list">
                        <AnimatePresence mode="wait">
                            {filteredSkills.map((skill, index) => (
                                <motion.div
                                    key={`${selectedCategory}-${skill.name}`}
                                    className="skill-card"
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                    transition={{
                                        duration: 0.1,
                                        delay: index * 0.1,
                                        ease: "easeOut"
                                    }}
                                    whileHover={{
                                        scale: 1.02,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <div className="skill-header">
                                        <div className="skill-info">
                                            <span className="skill-icon">{skill.icon}</span>
                                            <div>
                                                <h4 className="skill-name">{skill.name}</h4>
                                                <span className="skill-category">{skill.category}</span>
                                            </div>
                                        </div>
                                        <span className="skill-percentage">{skill.level}%</span>
                                    </div>

                                    <div className="skill-bar">
                                        <motion.div
                                            className="skill-progress"
                                            style={{ backgroundColor: skill.color }}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{
                                                duration: 1,
                                                delay: index * 0.1 + 0.2,
                                                ease: "easeOut"
                                            }}
                                        />
                                    </div>

                                    <motion.div
                                        className="skill-level"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                    >
                                        {skill.level >= 90 && 'Expert'}
                                        {skill.level >= 75 && skill.level < 90 && 'Advanced'}
                                        {skill.level >= 60 && skill.level < 75 && 'Intermediate'}
                                        {skill.level < 60 && 'Beginner'}
                                    </motion.div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Additional Skills */}
                <motion.div
                    className="additional-skills"
                    variants={itemVariants}
                >
                    <h3 className="additional-title">Also Familiar With</h3>
                    <div className="tags-container">
                        {[
                            'React Navigation', 'Axios', 'Firebase FCM', 'Firestore',
                            'Firebase Auth', 'JWT Tokens', 'SQLite', 'Metro Bundler',
                            'React DevTools', 'Chrome DevTools', 'ESLint', 'Prettier',
                            'VS Code', 'npm', 'yarn', 'GitLab', 'Patch Package',
                            'Custom Hooks', 'Component Architecture', 'Responsive Design',
                            'Code Splitting', 'Lazy Loading', 'Error Handling'
                        ].map((tag, index) => (
                            <motion.span
                                key={tag}
                                className="skill-tag"
                                variants={skillVariants}
                                whileHover={{ scale: 1.1 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Background Elements */}
            <div className="skills-background">
                <div className="bg-shape shape-1"></div>
                <div className="bg-shape shape-2"></div>
                <div className="bg-shape shape-3"></div>
            </div>
        </section>
    );
};

export default Skills;