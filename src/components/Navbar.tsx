import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, User, Briefcase, Code, Mail, Menu, X } from 'lucide-react';
import '../index.css';

const navItems = [
  { name: 'About', icon: <User size={18} />, href: '#about' },
  { name: 'Experience', icon: <Briefcase size={18} />, href: '#experience' },
  { name: 'Projects', icon: <Code size={18} />, href: '#projects' },
  { name: 'Contact', icon: <Mail size={18} />, href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', ''));

      // Check from bottom to top
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is within the top 300px of the viewport, it's active
          if (rect.top <= 300) {
            setActiveSection(section);
            return;
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(10, 10, 15, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--glass-border)'
      }}
    >
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          window.history.pushState({}, '', window.location.pathname);
        }}
        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', cursor: 'pointer' }}
      >
        <Terminal color="var(--neon-cyan)" size={28} />
        <span className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '1px' }}>
          sriniketh.dev
        </span>
      </a>

      <button 
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{ background: 'none', border: 'none', color: 'var(--neon-cyan)', cursor: 'pointer', display: 'none' }}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => {
          const isActive = activeSection === item.href.replace('#', '');
          return (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  color: isActive ? 'var(--neon-cyan)' : 'var(--color-text-muted)',
                  textShadow: isActive ? 'var(--glow-cyan)' : 'none',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: 500,
                  transition: 'color 0.3s ease, text-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--neon-cyan)';
                    e.currentTarget.style.textShadow = 'var(--glow-cyan)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--color-text-muted)';
                    e.currentTarget.style.textShadow = 'none';
                  }
                }}
              >
                {item.icon}
                <span className="nav-text">{item.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <style>
        {`
          .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
            margin: 0;
            padding: 0;
          }
          
          @media (max-width: 768px) {
            .mobile-menu-btn {
              display: block !important;
            }
            .nav-links {
              display: none;
              flex-direction: column;
              position: absolute;
              top: 100%;
              left: 0;
              right: 0;
              background: rgba(10, 10, 15, 0.95);
              backdrop-filter: blur(12px);
              padding: 2rem;
              border-bottom: 1px solid var(--glass-border);
              gap: 1.5rem;
            }
            .nav-links.open {
              display: flex;
            }
          }
        `}
      </style>
    </motion.nav>
  );
}
