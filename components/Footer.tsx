
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-white/40 font-medium uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} Md Mehedi Hasan. All Rights Reserved.
        </div>
        
        <div className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
          Designed & Developed with <span className="text-accent">❤️</span> by Mehedi
        </div>

        <div className="flex gap-8">
          <Link to="/admin/login" className="text-xs uppercase tracking-widest text-white/20 hover:text-white transition-colors">Admin Login</Link>
          <a href="#" className="text-xs uppercase tracking-widest text-white/20 hover:text-white transition-colors">Back to Top</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
