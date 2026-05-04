import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import '../index.css';

export default function Skills() {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        className="section-title"
      >
        Technical <span className="text-gradient">Skills</span>
      </motion.h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '3rem' }}>
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-panel"
            style={{ padding: '2rem', flex: '1 1 300px', maxWidth: '400px' }}
          >
            <h3 style={{ 
              textTransform: 'capitalize', 
              color: 'var(--neon-purple)', 
              marginBottom: '1.5rem',
              fontSize: '1.3rem',
              borderBottom: '1px solid var(--glass-border)',
              paddingBottom: '0.5rem'
            }}>
              {category}
            </h3>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}
            >
              {items.map((skill) => (
                <motion.span 
                  key={skill}
                  variants={itemVariants}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '0.4rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    color: 'var(--color-text-muted)',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--neon-cyan)';
                    e.currentTarget.style.borderColor = 'var(--neon-cyan)';
                    e.currentTarget.style.boxShadow = 'var(--glow-cyan)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-muted)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
