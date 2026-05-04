import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';
import '../index.css';

export default function Contact() {
  const { email, phone, location, github, linkedin, huggingface } = portfolioData.personal;

  return (
    <section id="contact" className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        className="section-title"
      >
        Get In <span className="text-gradient">Touch</span>
      </motion.h2>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '4rem'
      }}>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
        >
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-text)' }}>
            Let's connect!
          </h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="contact-info-container">
            <div className="contact-info-item">
              <div style={{ padding: '1rem', background: 'var(--glass-bg)', borderRadius: '12px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail color="var(--neon-cyan)" size={24} />
              </div>
              <div>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>Email</p>
                <a href={`mailto:${email}`} style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 500 }}>{email}</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div style={{ padding: '1rem', background: 'var(--glass-bg)', borderRadius: '12px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Phone color="var(--neon-magenta)" size={24} />
              </div>
              <div>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>Phone</p>
                <p style={{ color: 'var(--color-text)', margin: 0, fontWeight: 500 }}>{phone}</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div style={{ padding: '1rem', background: 'var(--glass-bg)', borderRadius: '12px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin color="var(--neon-purple)" size={24} />
              </div>
              <div>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>Location</p>
                <p style={{ color: 'var(--color-text)', margin: 0, fontWeight: 500 }}>{location}</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3.5rem', justifyContent: 'center' }}>
            {[
              { icon: <FaGithub size={24} />, link: github, color: '#ffffff' },
              { icon: <FaLinkedin size={24} />, link: linkedin, color: '#0a66c2' },
              { icon: <SiHuggingface size={24} />, link: huggingface, color: '#ffcc00' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{
                  padding: '1rem',
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '50%',
                  color: social.color,
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = social.color;
                  e.currentTarget.style.boxShadow = `0 0 15px ${social.color}80, 0 0 30px ${social.color}40`;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
