import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
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

        try {
            // EmailJS configuration - hardcoded for GitHub Pages
            const publicKey = 'Cv8lGhJqmmliYfBH5';
            const serviceId = 'service_z7tihuh';
            const templateId = 'template_xvux4dr';
            
            // Initialize EmailJS
            emailjs.init(publicKey);

            // Send email using EmailJS
            const result = await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: 'ridu3668@gmail.com'
                }
            );

            console.log('Email sent successfully:', result);
            alert('Message sent successfully! I will get back to you soon.');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Failed to send email:', error);
            console.error('Error details:', error.text || error.message || error);
            alert('Failed to send message. Please try emailing me directly at ridu3668@gmail.com');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: '📧',
            title: 'Email',
            value: 'ridu3668@gmail.com',
            link: 'mailto:ridu3668@gmail.com?subject=Hello%20Ridu&body=Hi%20Ridu,%0D%0A%0D%0A'
        },
        {
            icon: '📱',
            title: 'Phone',
            value: '+91 8139008554',
            link: 'tel:+918139008554'
        },
        {
            icon: '📍',
            title: 'Location',
            value: 'Kozhikode, Kerala',
            link: '#'
        }
    ];

    const socialLinks = [
        { name: 'GitHub', icon: '🐱', url: 'https://github.com/RYK8421' },
        { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/ridu-krishna-5110791b5' },
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