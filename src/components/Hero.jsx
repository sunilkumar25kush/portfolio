import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

/**
 * Hero Component - "Samantha" Style Replica with Rotating Ring Animation
 */
const Hero = ({ profile = { name: "Sunil Kumar", role: "Frontend Developer", bio: [] } }) => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="hero" className="hero-section">

            <div className="container hero-grid">

                {/* Left Side: Staggered Text Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="hero-content"
                >
                    <motion.h3 variants={textVariants} style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        letterSpacing: '2px',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        color: 'var(--text-primary)'
                    }}>
                        Hello!
                    </motion.h3>

                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                        style={{
                            marginBottom: '1rem',
                            background: 'linear-gradient(to right, #fff, var(--text-secondary))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            lineHeight: 1.1,
                            textShadow: '0 10px 30px rgba(0,0,0,0.5)' // Added shadow depth
                        }}
                        className="hero-title"
                    >
                        I'm <motion.span
                            animate={{ color: ['#fff', 'var(--accent-primary)', '#fff'] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >{profile.name}</motion.span>
                    </motion.h1>

                    <motion.h2 variants={textVariants} style={{
                        fontSize: '1.5rem',
                        color: 'var(--accent-primary)',
                        marginBottom: '1.5rem',
                        fontWeight: '500'
                    }}>
                        {profile.role}
                    </motion.h2>

                    <motion.p variants={textVariants} style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1rem',
                        maxWidth: '500px',
                        marginBottom: '2.5rem',
                        lineHeight: 1.8
                    }}>
                        I am an aspiring frontend developer with a passion for building beautiful and functional web applications. I love learning new technologies and solving complex problems.
                    </motion.p>

                    {/* Button & Socials */}
                    <motion.div variants={textVariants} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '1rem 3rem',
                                background: 'var(--accent-primary)',
                                color: 'white',
                                fontWeight: '600',
                                borderRadius: '50px', // Pill shape
                                border: 'none',
                                cursor: 'none',
                                width: 'fit-content',
                                boxShadow: '0 4px 15px rgba(100, 255, 218, 0.4)'
                            }}
                        >
                            Let's talk
                        </motion.a>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <motion.a href="#" whileHover={{ y: -5, color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', cursor: 'none', transition: 'all 0.3s ease' }}>
                                <FaFacebookF size={16} />
                            </motion.a>
                            <motion.a href="#" whileHover={{ y: -5, color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', cursor: 'none', transition: 'all 0.3s ease' }}>
                                <FaTwitter size={16} />
                            </motion.a>
                            <motion.a href="#" whileHover={{ y: -5, color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', cursor: 'none', transition: 'all 0.3s ease' }}>
                                <FaInstagram size={16} />
                            </motion.a>
                            <motion.a href="https://www.linkedin.com/in/sunil-kumar-9042aa373/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5, color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', cursor: 'none', transition: 'all 0.3s ease' }}>
                                <FaLinkedinIn size={16} />
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Side: Floating Image with Rotating Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
                    transition={{
                        opacity: { duration: 0.8 },
                        scale: { duration: 0.8 },
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" } // Floating effect
                    }}
                    style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    className="hero-image-container"
                >
                    {/* Rotating Ring 1 (Dashed) */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        style={{
                            position: 'absolute',
                            width: '420px',
                            height: '420px',
                            borderRadius: '50%',
                            border: '2px dashed var(--accent-primary)',
                            opacity: 0.6,
                            zIndex: 0
                        }}
                    />

                    {/* Rotating Ring 2 (Reverse Solid Arcs) */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        style={{
                            position: 'absolute',
                            width: '450px',
                            height: '450px',
                            borderRadius: '50%',
                            border: '2px solid transparent',
                            borderTop: '2px solid var(--accent-secondary)',
                            borderBottom: '2px solid var(--accent-secondary)',
                            opacity: 0.4,
                            zIndex: 0
                        }}
                    />

                    {/* Image Circle */}
                    <div style={{
                        width: '350px',
                        height: '350px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        position: 'relative',
                        zIndex: 1,
                        border: '4px solid var(--accent-primary)',
                        boxShadow: '0 0 30px rgba(100, 255, 218, 0.3)'
                    }}>
                        <img
                            src="/assets/user.png"
                            alt="Sunil Kumar"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
                className="scroll-indicator"
            >
                <div style={{
                    width: '30px',
                    height: '50px',
                    border: '2px solid var(--text-secondary)',
                    borderRadius: '15px',
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '10px'
                }}>
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{
                            width: '4px',
                            height: '8px',
                            background: 'var(--accent-primary)',
                            borderRadius: '2px'
                        }}
                    />
                </div>
                <span style={{ fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--text-secondary)' }}>SCROLL</span>
            </motion.div>
        </section>
    );
};

export default Hero;
