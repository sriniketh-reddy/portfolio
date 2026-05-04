import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award } from 'lucide-react';
import '../index.css';

export default function About() {
  const { education, achievements } = portfolioData;

  return (
    <section id="about" className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        className="section-title"
      >
        Background & <span className="text-gradient">Education</span>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
        
        {/* Education Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="glass-panel"
          style={{ padding: '2rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <GraduationCap color="var(--neon-cyan)" size={32} />
            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Education</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {education.map((edu, index) => (
              <div key={index} style={{ borderLeft: '2px solid var(--glass-border)', paddingLeft: '1rem', position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', left: '-6px', top: '0', width: '10px', height: '10px', 
                  borderRadius: '50%', background: 'var(--neon-cyan)', boxShadow: 'var(--glow-cyan)' 
                }} />
                <h4 style={{ color: 'var(--color-text)', fontSize: '1.1rem', marginBottom: '0.2rem' }}>{edu.degree}</h4>
                <p style={{ color: 'var(--neon-magenta)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{edu.institution}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                  <span>{edu.duration}</span>
                  {edu.score && <span>{edu.score}</span>}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="glass-panel"
          style={{ padding: '2rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Award color="var(--neon-magenta)" size={32} />
            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Achievements</h3>
          </div>
          
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {achievements.map((achievement, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ 
                  marginTop: '6px', minWidth: '8px', height: '8px', 
                  borderRadius: '50%', background: 'var(--neon-magenta)', boxShadow: 'var(--glow-magenta)' 
                }} />
                <span style={{ color: 'var(--color-text-muted)' }}>{achievement}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
