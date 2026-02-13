
import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Skills from '../sections/Skills';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';
import { Project } from '../types';

interface HomePageProps {
  projects: Project[];
}

const HomePage: React.FC<HomePageProps> = ({ projects }) => {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <div id="work">
        <Portfolio projects={projects} />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <Skills />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
