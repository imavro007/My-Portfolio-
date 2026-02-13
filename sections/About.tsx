
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-surface">
      <div className="container mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="https://picsum.photos/seed/mehedi/800/1000" 
            alt="Md Mehedi Hasan" 
            className="rounded-2xl w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute -bottom-10 -right-10 bg-accent p-12 rounded-2xl hidden lg:block">
            <span className="text-6xl font-display font-extrabold block">05+</span>
            <span className="text-sm font-medium uppercase tracking-widest opacity-80">Years Experience</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold">Bridging Creative Vision & Technical Execution</h2>
          
          <div className="space-y-6 text-white/70 leading-relaxed text-lg">
            <p>
              I am <span className="text-white font-semibold">Md Mehedi Hasan</span>, a dedicated Computer Science student 
              at Habiganj Polytechnic Institute and an NSDA Certified Graphic Designer. My journey is defined by a 
              unique fusion of artistic flair and logical engineering.
            </p>
            <p>
              With specialized training from the Habiganj Technical Training Center and leadership experience 
              within the Bangladesh Scouts PRM team, I bring a disciplined yet innovative approach to every project. 
              My goal is to create impactful brand stories that resonate visually and function flawlessly.
            </p>
            <div className="p-6 glass-card rounded-xl border-accent/20">
              <p className="text-sm italic">
                "Note: I am a specialist in Branding and Front-End Development. I focus exclusively on these crafts to provide premium quality, and as such, I do not offer UI/UX layout services."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <h4 className="text-accent font-bold mb-1">Education</h4>
              <p className="text-sm opacity-60">CS & Technology, HPI</p>
            </div>
            <div>
              <h4 className="text-accent font-bold mb-1">Certifications</h4>
              <p className="text-sm opacity-60">NSDA Certified Graphic Designer</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
