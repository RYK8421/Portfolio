import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../style/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 2000);
    };

    const contactInfo = [
        {
            icon: '📧',
            title: 'Email',
            value: '[Your Email]',
            link: 'mailto:[your-email]'
        },
        {
            icon: '📱',
            title: 'Phone',
            value: '+91 [Your Phone Number]',
            link: 'tel:+91[your-phone]'
        },
        {
            icon: '📍',
            title: 'Location',
            value: 'Kerala, India',
            link: '#'
        }
    ];

    const socialLinks = [
        { name: 'GitHub', icon: '🐱', url: '[Your GitHub URL]' },
        { name: 'LinkedIn', icon: '💼', url: '[Your LinkedIn Profile URL]' },
        { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
        { name: 'Instagram', icon: '📷', url: 'https://instagram.com' }
    ];

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
        <section id="contact" className="section contact-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Get In Touch
            </motion.h2>

            <motion.div
                className="contact-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div className="contact-info" variants={itemVariants}>
                    <h3 className="contact-info-title">Let's Connect</h3>
                    <p className="contact-info-description">
                        I'm always open to discussing new opportunities, mobile app development projects,
                        or collaborating on React Native applications. Let's build something amazing together!
                    </p>

                    <div className="contact-details">
                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="contact-item"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="contact-icon">{item.icon}</div>
                                <div className="contact-text">
                                    <h4>{item.title}</h4>
                                    <a href={item.link} className="contact-link">
                                        {item.value}
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="social-links">
                        <h4>Follow Me</h4>
                        <div className="social-icons">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    className="social-icon"
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="social-emoji">{social.icon}</span>
                                    <span className="social-tooltip">{social.name}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div className="contact-form-container" variants={itemVariants}>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <motion.div
                            className="form-group"
                            whileFocus={{ scale: 1.02 }}
                        >
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your full name"
                            />
                        </motion.div>

                        <motion.div
                            className="form-group"
                            whileFocus={{ scale: 1.02 }}
                        >
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email address"
                            />
                        </motion.div>

                        <motion.div
                            className="form-group"
                            whileFocus={{ scale: 1.02 }}
                        >
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="What's this about?"
                            />
                        </motion.div>

                        <motion.div
                            className="form-group"
                            whileFocus={{ scale: 1.02 }}
                        >
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Tell me about your project or just say hello..."
                            ></textarea>
                        </motion.div>

                        <motion.button
                            type="submit"
                            className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="spinner"></div>
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </motion.button>
                    </form>
                </motion.div>
            </motion.div>

            <div className="contact-background">
                <div className="bg-shape shape-1"></div>
                <div className="bg-shape shape-2"></div>
                <div className="bg-shape shape-3"></div>
            </div>
        </section>
    );
};

export default Contact;