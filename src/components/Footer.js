import React from 'react';
import { motion } from 'framer-motion';
import '../style/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#projects' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' }
    ];

    const services = [
        { name: 'Web Development', href: '#services' },
        { name: 'UI/UX Design', href: '#services' },
        { name: 'Mobile Apps', href: '#services' },
        { name: 'E-commerce', href: '#services' },
        { name: 'SEO Optimization', href: '#services' }
    ];

    const socialLinks = [
        { name: 'GitHub', icon: '💻', url: '[Your GitHub URL]' },
        { name: 'LinkedIn', icon: '💼', url: '[Your LinkedIn Profile URL]' },
        { name: 'Email', icon: '📧', url: 'mailto:[your-email]' },
        { name: 'Phone', icon: '📱', url: 'tel:+91[your-phone]' }
    ];

    const footerVariants = {
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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
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
        <footer className="footer">
            <motion.div
                className="footer-container"
                variants={footerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
               

                <motion.div
                    className="footer-bottom"
                    variants={itemVariants}
                >
                    <div className="bottom-content">
                        <p className="copyright">
                            © {currentYear} Ridu Krishna C. Frontend Developer specializing in React.js & React Native.
                        </p>

                        <div className="footer-extra">
                            <a href="[Your GitHub URL]" className="extra-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <span className="divider">|</span>
                            <a href="[Your LinkedIn Profile URL]" className="extra-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <span className="divider">|</span>
                            <a href="mailto:[your-email]" className="extra-link">Email</a>
                        </div>
                    </div>

                </motion.div>
            </motion.div>

            <div className="footer-background">
                <div className="footer-shape shape-1"></div>
                <div className="footer-shape shape-2"></div>
                <div className="footer-shape shape-3"></div>
            </div>
        </footer>
    );
};

export default Footer;