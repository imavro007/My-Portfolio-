
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] flex flex-col justify-center overflow-hidden px-6 lg:px-20">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-semibold tracking-widest uppercase text-sm mb-6 block"
          >
            Md Mehedi Hasan — Bangladesh
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-extrabold leading-[1] mb-8 tracking-tighter">
            Crafting Bold Brand Identities & Modern <span className="text-accent">Web</span> Experiences.
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
            A specialized Graphic Designer & Front-End Developer based in Habiganj, 
            blending aesthetic precision with high-performance code.
          </p>

          <div className="flex flex-wrap gap-6">
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-background px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm flex items-center gap-2 group"
            >
              Explore Work
              <ArrowDownRight className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 hover:bg-white/5 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm"
            >
              Hire Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-20 bottom-20 hidden lg:block opacity-20 pointer-events-none"
      >
        <div className="w-64 h-64 border border-white/20 rounded-2xl rotate-12" />
        <div className="w-64 h-64 border border-accent/20 rounded-2xl -rotate-6 absolute -top-4 -left-4" />
      </motion.div>
    </section>
  );
};

export default Hero;
