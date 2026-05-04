import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer style={{ 
        textAlign: 'center', 
        padding: '2rem', 
        color: 'var(--color-text-muted)',
        borderTop: '1px solid var(--glass-border)',
        marginTop: '4rem',
        fontSize: '0.9rem'
      }}>
        <p>© {new Date().getFullYear()} S. Sriniketh Reddy. Built with React & Vite.</p>
      </footer>
    </>
  );
}

export default App;
