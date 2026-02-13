
import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const designStack = [
    { name: 'Adobe Illustrator', level: 95 },
    { name: 'Adobe Photoshop', level: 90 },
    { name: 'Adobe InDesign', level: 80 },
    { name: 'Typography', level: 85 },
    { name: 'Color Theory', level: 90 },
    { name: 'Brand Strategy', level: 85 },
  ];

  const devStack = [
    { name: 'HTML5 / CSS3', level: 95 },
    { name: 'JavaScript (ES6+)', level: 85 },
    { name: 'React.js', level: 75 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Responsive Design', level: 90 },
    { name: 'Git / GitHub', level: 80 },
  ];

  return (
    <section className="py-24 px-6 lg:px-20 bg-surface">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-bold mb-4">Technical Proficiency</h2>
          <p className="text-white/50">Combining the power of industry-standard design tools and modern web tech.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-20">
          {/* Design Stack */}
          <div>
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
              <span className="w-10 h-[2px] bg-accent" /> Design Stack
            </h3>
            <div className="space-y-8">
              {designStack.map((skill, i) => (
                <SkillBar key={i} {...skill} />
              ))}
            </div>
          </div>

          {/* Dev Stack */}
          <div>
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
              <span className="w-10 h-[2px] bg-accent" /> Development Stack
            </h3>
            <div className="space-y-8">
              {devStack.map((skill, i) => (
                <SkillBar key={i} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => {
  return (
    <div>
      <div className="flex justify-between items-end mb-2">
        <span className="text-sm font-bold uppercase tracking-widest">{name}</span>
        <span className="text-xs text-white/40">{level}%</span>
      </div>
      <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="absolute top-0 left-0 h-full bg-accent" 
        />
      </div>
    </div>
  );
};

export default Skills;
