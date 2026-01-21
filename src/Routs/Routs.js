import React from 'react';
import Header from '../Screen/Header';
import Hero from '../Screen/Hero';
import About from '../Screen/About';
import Skills from '../Screen/Skills';
import Projects from '../Screen/Projects';
import Contact from '../Screen/Contact';
import Footer from '../Screen/Footer';


function Home() {
  return (
    <div className="home-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
