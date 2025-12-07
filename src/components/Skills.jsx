import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiFigma, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const skills = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
];

const Skills = () => {
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <section id="skills" style={{
            padding: '8rem 2rem',
            background: 'var(--bg-darker)'
        }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                    style={{
                        fontSize: '3rem',
                        marginBottom: '3rem',
                        fontFamily: 'var(--font-mono)',
                        textAlign: 'center',
                        color: 'var(--text-primary)',
                        textShadow: '0 0 20px var(--accent-primary)' // Stronger glow
                    }}
                >
                    Skills
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                        gap: '2rem'
                    }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                boxShadow: `0 0 40px ${skill.color}`, // Increased glow intensity and spread
                                translateY: -5
                            }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '2rem',
                                borderRadius: '16px',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                background: 'rgba(255, 255, 255, 0.01)',
                                cursor: 'none'
                            }}
                        >
                            <div style={{ fontSize: '3rem', color: skill.color, marginBottom: '1rem' }}>
                                {skill.icon}
                            </div>
                            <span style={{
                                fontSize: '1rem',
                                fontWeight: '500',
                                color: 'var(--text-secondary)'
                            }}>
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
