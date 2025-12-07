import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: '1.5rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(10px)',
            zIndex: 100,
            borderBottom: '1px solid var(--glass-border)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)'
        }}>
            {/* Animated Bottom Border Glow */}
            <motion.div
                animate={{ backgroundPosition: ["0% 0%", "100% 0%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, var(--accent-primary), transparent, var(--accent-primary))',
                    backgroundSize: '200% 100%',
                    opacity: 0.7
                }}
            />

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="logo"
                style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}
            >
                Sunil Kumar
            </motion.div>

            <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                {['Work', 'Skills', 'Contact'].map((item) => (
                    <li key={item}>
                        <a
                            href={item === 'Work' ? '#projects' : `#${item.toLowerCase()}`}
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '1.2rem', // Increased size
                                position: 'relative'
                            }}
                            className="nav-link"
                        >
                            {item}
                        </a>
                    </li>
                ))}
                {/* Placeholder for Theme Toggle if needed later */}
            </ul>
        </nav>
    );
};

export default Navbar;
