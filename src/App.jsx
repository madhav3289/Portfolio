import React from 'react';
import { ThemeProvider } from './constants/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import RoleCardsSection from './sections/RoleCardsSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import CertificatesSection from './sections/CertificatesSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen noise-bg">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <RoleCardsSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificatesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
