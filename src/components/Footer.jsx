import React from 'react';
import { Heart, Mail, Code2, ArrowUp, FileDown } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070D] border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-base">
                Udari <span className="text-cyan-400">Wathsala</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              IT Undergraduate at SLIATE Kurunegala, aspiring software developer passionate about building web, mobile, and machine learning applications.
            </p>
            <p className="text-xs text-slate-400 font-mono">
              Dambadeniya, Sri Lanka
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3">
              Navigation
            </p>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#home" className="hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-purple-400 transition-colors">Technical Skills</a></li>
              <li><a href="#projects" className="hover:text-purple-400 transition-colors">Featured Projects</a></li>
              <li><a href="#education" className="hover:text-purple-400 transition-colors">Education Timeline</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect & CV */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3">
              Connect
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-blue-400 border border-slate-800 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-purple-400 border border-slate-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <a
                href={personalInfo.cvFile}
                download="Udari_Wathsala_CV.pdf"
                className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download Curriculum Vitae (PDF)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 font-mono text-[11px]">
            Designed & Engineered for M. M. A. Udari Wathsala
          </p>
        </div>

      </div>
    </footer>
  );
}
