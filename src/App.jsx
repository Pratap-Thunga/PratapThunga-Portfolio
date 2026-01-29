import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SkillsMarquee } from './components/SkillsMarquee';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Recognition } from './components/Recognition';
import { Footer } from './components/Footer';


const App = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <SkillsMarquee />
      <About />
      <Projects />
      <Experience />
      <Recognition />
      <Footer />
    </ThemeProvider>
  );
};

export default App;