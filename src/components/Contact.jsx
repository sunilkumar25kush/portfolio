import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '8rem 2rem', position: 'relative' }}>
            {/* Glow effect */}
            <div style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translate(-50%, 20%)',
                width: '60vw',
                height: '400px',
                background: 'radial-gradient(ellipse at center, rgba(0, 240, 255, 0.1) 0%, rgba(0,0,0,0) 70%)',
                filter: 'blur(80px)',
                zIndex: -1
            }} />

            <div className="container" style={{ maxWidth: '800px' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: '2.5rem',
                        marginBottom: '2rem',
                        fontFamily: 'var(--font-mono)',
                        textAlign: 'center'
                    }}
                >
                    Get In Touch
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: 'center',
                        color: 'var(--text-secondary)',
                        marginBottom: '4rem',
                        fontSize: '1.1rem'
                    }}
                >
                    Currently open for freelance projects and job opportunities.
                </motion.p>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <input
                            type="text"
                            placeholder="Name"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                color: '#fff',
                                fontFamily: 'var(--font-mono)'
                            }}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                color: '#fff',
                                fontFamily: 'var(--font-mono)'
                            }}
                        />
                    </div>
                    <textarea
                        rows="5"
                        placeholder="Message"
                        style={{
                            width: '100%',
                            padding: '1rem',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '8px',
                            color: '#fff',
                            fontFamily: 'var(--font-mono)'
                        }}
                    />
                    <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: 'var(--accent-primary)', color: '#000' }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            padding: '1rem',
                            background: 'transparent',
                            border: '1px solid var(--accent-primary)',
                            color: 'var(--accent-primary)',
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            cursor: 'none',
                            fontFamily: 'var(--font-mono)',
                            marginTop: '1rem'
                        }}
                    >
                        Send Message
                    </motion.button>
                </form>

                <footer style={{
                    marginTop: '8rem',
                    textAlign: 'center',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '2rem',
                    color: 'var(--text-secondary)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                        <a href="https://www.linkedin.com/in/sunil-kumar-9042aa373/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} style={{ color: 'var(--text-secondary)' }} />
                        </a>
                        <a href="https://github.com/sunilkumar25kush" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={24} style={{ color: 'var(--text-secondary)' }} />
                        </a>
                        <a href="#">
                            <FaTwitter size={24} style={{ color: 'var(--text-secondary)' }} />
                        </a>
                        <a href="mailto:sunilkumar25@navgurukul.org">
                            <FaEnvelope size={24} style={{ color: 'var(--text-secondary)' }} />
                        </a>
                    </div>
                    <p style={{ fontSize: '0.9rem' }}>
                        Designed & Built by Sunil Kumar. &copy; {new Date().getFullYear()}
                    </p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
