import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ChevronDown } from 'lucide-react';
import '../index.css';

export default function Hero() {
  const { name, role, summary } = portfolioData.personal;

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      paddingTop: '8rem'
    }}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '20%',
        width: '300px',
        height: '300px',
        background: 'var(--neon-purple)',
        filter: 'blur(150px)',
        opacity: 0.2,
        borderRadius: '50%',
        zIndex: -1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '20%',
        width: '300px',
        height: '300px',
        background: 'var(--neon-cyan)',
        filter: 'blur(150px)',
        opacity: 0.15,
        borderRadius: '50%',
        zIndex: -1
      }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: 'spring' }}
        style={{ textAlign: 'center', maxWidth: '800px', padding: '0 2rem' }}
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ color: 'var(--neon-cyan)', fontSize: '1.2rem', marginBottom: '1rem', letterSpacing: '2px' }}
        >
          HELLO, I AM
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ fontSize: 'clamp(1.8rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem', whiteSpace: 'nowrap' }}
        >
          {name}
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gradient"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '2rem' }}
        >
          {role}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 3rem' }}
        >
          {summary}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#projects" style={{ textDecoration: 'none' }}>
            <button className="glass-panel" style={{
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: 'var(--bg-dark)',
              background: 'var(--neon-cyan)',
              boxShadow: 'var(--glow-cyan)',
              border: 'none'
            }}>
              View My Work
            </button>
          </a>
          <a href="#contact" style={{ textDecoration: 'none' }}>
            <button className="glass-panel" style={{
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: 'var(--neon-cyan)',
            }}>
              Contact Me
            </button>
          </a>
        </motion.div>
      </motion.div>

      <div style={{ marginTop: '4rem' }}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ color: 'var(--color-text-muted)' }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </section>
  );
}
