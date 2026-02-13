
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Plus } from 'lucide-react';
import { Project, Category } from '../types';
import { CATEGORIES } from '../constants';

interface PortfolioProps {
  projects: Project[];
}

const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
  const [filter, setFilter] = useState<Category | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="py-24 px-6 lg:px-20 bg-background relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <h2 className="text-5xl font-display font-extrabold tracking-tighter">Featured Work</h2>
          
          <div className="flex flex-wrap justify-center gap-4 bg-white/5 p-2 rounded-full border border-white/10">
            {['All', ...CATEGORIES].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === cat ? 'bg-accent text-white' : 'hover:bg-white/5 text-white/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer relative"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/5] overflow-hidden rounded-2xl relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                    <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ y: 50, scale: 0.9 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.9 }}
              className="bg-surface w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-white/10 hover:bg-accent rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="h-[400px] md:h-auto overflow-hidden">
                  <img src={selectedProject.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="p-10 flex flex-col justify-center gap-6">
                  <div>
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">{selectedProject.category}</span>
                    <h2 className="text-4xl font-display font-bold">{selectedProject.title}</h2>
                  </div>
                  
                  <p className="text-white/60 leading-relaxed text-lg">{selectedProject.description}</p>
                  
                  <div>
                    <h4 className="font-bold mb-3 text-sm uppercase tracking-widest">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map(tool => (
                        <span key={tool} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs">{tool}</span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent font-bold hover:underline"
                    >
                      View Live Project <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
