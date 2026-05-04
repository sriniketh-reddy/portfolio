import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import '../index.css';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        className="section-title"
      >
        Work <span className="text-gradient">Experience</span>
      </motion.h2>

      <div style={{ marginTop: '3rem', position: 'relative', paddingLeft: '2rem' }}>
        {/* Vertical Timeline Line */}
        <div style={{ 
          position: 'absolute', 
          left: '0', 
          top: '0', 
          bottom: '0', 
          width: '2px', 
          background: 'var(--glass-border)',
        }} />

        {experience.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: index * 0.2 }}
            className="glass-panel"
            style={{ 
              padding: '2rem', 
              marginBottom: '2rem', 
              position: 'relative',
              marginLeft: '2rem' 
            }}
          >
            {/* Timeline dot */}
            <div style={{ 
              position: 'absolute', 
              left: '-2rem', 
              top: '2.5rem', 
              width: '16px', 
              height: '16px', 
              borderRadius: '50%', 
              background: 'var(--neon-cyan)', 
              boxShadow: 'var(--glow-cyan)',
              transform: 'translateX(-50%)',
              zIndex: 1
            }} />

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0', color: 'var(--color-text)' }}>{exp.role}</h3>
                <h4 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--neon-purple)' }}>{exp.company}</h4>
              </div>
              <div style={{ 
                background: 'rgba(255,255,255,0.05)', 
                padding: '0.5rem 1rem', 
                borderRadius: '20px', 
                fontSize: '0.9rem',
                color: 'var(--neon-cyan)',
                border: '1px solid rgba(0, 240, 255, 0.2)'
              }}>
                {exp.duration}
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {exp.description.map((desc, i) => (
                <li key={i} style={{ 
                  color: 'var(--color-text-muted)', 
                  marginBottom: '0.5rem',
                  display: 'flex',
                  gap: '0.8rem',
                  alignItems: 'flex-start'
                }}>
                  <span style={{ color: 'var(--neon-magenta)', marginTop: '0px' }}>▹</span>
                  {desc}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
