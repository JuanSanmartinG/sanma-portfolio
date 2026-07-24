import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';
import Contact from '/components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-accent/30">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;