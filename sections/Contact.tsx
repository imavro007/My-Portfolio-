
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram, Facebook, Linkedin, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

const Contact: React.FC = () => {
  const socials = [
    { icon: <Instagram size={20} />, url: 'https://www.instagram.com/im.avro007/', color: 'hover:text-pink-500' },
    { icon: <Facebook size={20} />, url: 'https://web.facebook.com/im.avro007', color: 'hover:text-blue-600' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/md-mehedi-hasan-3b1b853a7', color: 'hover:text-blue-500' },
  ];

  return (
    <section className="py-24 px-6 lg:px-20 bg-background border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-7xl font-display font-bold mb-8 tracking-tighter">Let's Create Something <span className="text-accent">Legendary</span>.</h2>
            <p className="text-xl text-white/50 mb-12">I'm currently available for freelance projects and full-time opportunities. Let's talk about your vision.</p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Mail className="text-accent group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-1">Email</h4>
                  <a href="mailto:imavro007@gmail.com" className="text-xl font-medium hover:text-accent transition-colors">imavro007@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Phone className="text-accent group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-1">WhatsApp</h4>
                  <a href="tel:+8801613397429" className="text-xl font-medium hover:text-accent transition-colors">+880 1613 397429</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <MapPin className="text-accent group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-1">Location</h4>
                  <p className="text-xl font-medium">Habiganj, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 transition-all ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Project Interest</label>
                <div className="relative">
                  <select className="w-full bg-surface border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent appearance-none relative z-10 text-white">
                    <option className="bg-surface text-white">Logo & Visual Identity</option>
                    <option className="bg-surface text-white">Brand Identity System</option>
                    <option className="bg-surface text-white">Social Media Creative</option>
                    <option className="bg-surface text-white">Front-End Development</option>
                    <option className="bg-surface text-white">Other</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none z-0" size={20} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
                <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full bg-accent hover:bg-blue-600 text-white font-bold py-5 rounded-xl uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 group transition-all">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
