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
        { name: 'GitHub', icon: '💻', url: 'https://github.com/RYK8421' },
        { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/ridu-krishna-5110791b5' },
        { name: 'Email', icon: '📧', url: 'mailto:ridu3668@gmail.com' },
        { name: 'Phone', icon: '📱', url: 'tel:+918139008554' }
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
                            <a href="https://github.com/RYK8421" className="extra-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <span className="divider">|</span>
                            <a href="https://www.linkedin.com/in/ridu-krishna-5110791b5" className="extra-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <span className="divider">|</span>
                            <a href="mailto:ridu3668@gmail.com" className="extra-link">Email</a>
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