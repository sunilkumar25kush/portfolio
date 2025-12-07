import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: "Project Alpha",
        description: "A high-performance e-commerce dashboard with real-time analytics.",
        tags: ["React", "D3.js", "Node.js"],
        image: "/assets/project_dashboard.png"
    },
    {
        title: "Portfolio v1",
        description: "My first personal website built with vanilla HTML/CSS and JS.",
        tags: ["HTML", "CSS", "JavaScript"],
        image: "/assets/project_portfolio.png"
    },
    {
        title: "Task Master",
        description: "Productivity application with drag-and-drop Kanban boards.",
        tags: ["Vue.js", "Firebase", "Tailwind"],
        image: "/assets/project_task.png"
    }
];

const Projects = () => {
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
        <section id="projects" style={{ padding: '8rem 2rem' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    style={{
                        fontSize: '3rem',
                        marginBottom: '4rem',
                        fontFamily: 'var(--font-mono)',
                        textAlign: 'center',
                        color: 'var(--text-primary)',
                        textShadow: '0 0 10px rgba(255, 77, 0, 0.3)' // Subtle glow
                    }}
                >
                    Featured Work
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem'
                    }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                boxShadow: `0 0 40px var(--accent-primary)`, // Strong glow matching Skills
                                translateY: -10,
                                zIndex: 10
                            }}
                            className="project-card"
                            style={{
                                position: 'relative',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {/* Image Placeholder */}
                            <div style={{
                                height: '200px',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>

                            <div style={{ padding: '2rem' }}>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    marginBottom: '1rem',
                                    color: 'var(--text-primary)'
                                }}>
                                    {project.title}
                                </h3>
                                <p style={{
                                    color: 'var(--text-secondary)',
                                    marginBottom: '1.5rem',
                                    fontSize: '0.95rem'
                                }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{
                                            padding: '0.2rem 0.8rem',
                                            borderRadius: '100px',
                                            background: 'rgba(0, 240, 255, 0.1)',
                                            color: 'var(--accent-primary)',
                                            fontSize: '0.8rem',
                                            fontFamily: 'var(--font-mono)'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <motion.a
                                        href="#"
                                        whileHover={{ color: 'var(--accent-primary)' }}
                                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}
                                    >
                                        <FaGithub /> Code
                                    </motion.a>
                                    <motion.a
                                        href="#"
                                        whileHover={{ color: 'var(--accent-primary)' }}
                                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
