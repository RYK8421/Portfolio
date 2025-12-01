import { motion } from 'framer-motion';
import '../style/About.css';
import { downloadCV, downloadCVAsHTML } from '../utils/cvGenerator';

function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
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

    const stats = [
        { number: '2+', label: 'Years Experience' },
        { number: '500+', label: 'Active Users' },
        { number: '50+', label: 'API Endpoints' },
        { number: '15+', label: 'Custom Components' }
    ];

    return (
        <section id="about" className="about-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                About Me
            </motion.h2>

            <motion.div
                className="about-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="about-content">
                    <motion.div className="about-text" variants={itemVariants}>
                        <motion.h3
                            className="about-subtitle"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: 0.2 }}
                        >
                            Frontend Developer & Mobile App Specialist
                        </motion.h3>

                        <motion.p
                            className="about-description"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                        >
                            Hello! I'm <span className="highlight">Ridu Krishna</span>, a passionate Frontend Developer
                            with 2 years of professional experience specializing in React.js and React Native Expo.
                            I excel at building cross-platform mobile applications with seamless user experiences,
                            implementing efficient state management solutions, and integrating robust RESTful APIs.
                        </motion.p>

                        <motion.p
                            className="about-description"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                        >
                            Currently developing the HR Connect mobile application serving 500+ employees with real-time
                            task management, push notifications, and interactive engagement features. When I'm not coding,
                            you'll find me playing competitive football, volunteering with children on the autism spectrum,
                            or exploring new technologies to stay ahead in this ever-evolving tech landscape.
                        </motion.p>

                        <motion.div
                            className="stats-grid"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="stat-item"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <motion.div
                                        className="stat-number"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{
                                            duration: 0.1,
                                            delay: 0.2 + index * 0.1,
                                            type: "spring",
                                            stiffness: 150
                                        }}
                                    >
                                        {stat.number}
                                    </motion.div>
                                    <div className="stat-label">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="about-visual"
                        variants={itemVariants}
                    >
                        <div className="visual-container">
                            <div className="floating-card card-1">
                                <div className="card-content">
                                    <span className="card-icon">⚛️</span>
                                    <span>React Native</span>
                                </div>
                            </div>
                            <div className="floating-card card-2">
                                <div className="card-content">
                                    <span className="card-icon">📱</span>
                                    <span>Mobile Apps</span>
                                </div>
                            </div>
                            <div className="floating-card card-3">
                                <div className="card-content">
                                    <span className="card-icon">🔥</span>
                                    <span>Firebase</span>
                                </div>
                            </div>
                            <div className="main-visual">
                                <div className="code-window">
                                    <div className="window-header">
                                        <div className="window-dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div className="window-title">about-me.js</div>
                                    </div>
                                    <div className="code-content">
                                    <pre>{`const developer = {
  name: "Ridu Krishna",
  role: "Frontend Developer",
  location: "Kerala, India",
  specialization: "React.js & React Native",
  skills: ["React Native", "Expo", "Firebase"],
  motto: "Building seamless mobile experiences"
};`}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

export default About;