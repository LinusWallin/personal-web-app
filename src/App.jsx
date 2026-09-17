import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Publications from './components/Publications.jsx';
import Footer from './components/Footer.jsx';
import Grainient from './components/Grainient.jsx';
import { useTheme } from './hooks/useTheme.js';
import styles from './App.module.css';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className={styles.background} aria-hidden="true">
        <Grainient
          color1="#36427d"
          color2="#0f0634"
          color3="#36427d"
          timeSpeed={0.45}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
          lightMode={theme === 'light'}
        />
      </div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Publications />
      </main>
      <Footer />
    </>
  );
}
