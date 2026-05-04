import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import '../index.css';

export default function Projects() {
  const { projects } = portfolioData;

  const n = projects.length;
  let columns = 3;
  if (n % 3 === 0) {
    columns = 3;
  } else if (n % 3 === 2) {
    columns = 3;
  } else if (n % 2 === 0) {
    columns = 2;
  } else {
    columns = 3;
  }

  return (
    <section id="projects" className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        className="section-title"
      >
        Featured <span className="text-gradient">Projects</span>
      </motion.h2>

      <div 
        className="projects-dynamic-grid" 
        style={{ '--columns': columns } as React.CSSProperties}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel"
            style={{ 
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Hover Glow Background */}
            <div 
              className="project-glow"
              style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: `radial-gradient(circle, rgba(${index % 2 === 0 ? '0,240,255' : '255,0,255'},0.1) 0%, transparent 50%)`,
                opacity: 0,
                transition: 'opacity 0.5s ease',
                pointerEvents: 'none',
                zIndex: 0
              }}
            />

            <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text)', margin: 0 }}>
                  {project.title}
                </h3>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = index % 2 === 0 ? 'var(--neon-cyan)' : 'var(--neon-magenta)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
                >
                  {project.link.includes('github') ? <FaGithub size={24} /> : <ExternalLink size={24} />}
                </a>
              </div>

              <div style={{ color: 'var(--neon-purple)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                {project.duration}
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flex: 1 }}>
                {project.description.map((desc, i) => (
                  <li key={i} style={{ 
                    color: 'var(--color-text-muted)', 
                    marginBottom: '0.8rem',
                    fontSize: '0.95rem'
                  }}>
                    {desc}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                {project.techStack.map((tech, i) => (
                  <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{
                      fontSize: '0.8rem',
                      color: index % 2 === 0 ? 'var(--neon-cyan)' : 'var(--neon-magenta)',
                      fontFamily: 'monospace'
                    }}>
                      {tech}
                    </span>
                    {i < project.techStack.length - 1 && (
                      <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            <style>
              {`
                .glass-panel:hover .project-glow {
                  opacity: 1 !important;
                }
              `}
            </style>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
