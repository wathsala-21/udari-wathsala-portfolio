import React from 'react';
import { 
  ArrowRight, 
  Mail, 
  FileDown, 
  MapPin, 
  Terminal, 
  Sparkles, 
  Code,
  Laptop,
  CheckCircle2
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] glow-orb-purple pointer-events-none rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] glow-orb-blue pointer-events-none rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] glow-orb-indigo pointer-events-none rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-purple-500/30 text-xs font-mono text-purple-300 mb-6 shadow-sm shadow-purple-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>SLIATE Kurunegala • HNDIT Student</span>
            </div>

            {/* Name Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
              <span>M. M. A. Udari </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-400">
                Wathsala
              </span>
            </h1>

            {/* Subtitle / Role */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-300 mb-4 flex items-center justify-center lg:justify-start gap-2">
              <span className="text-purple-400 font-mono">&lt;</span>
              <span>IT Undergraduate</span>
              <span className="text-slate-500">|</span>
              <span className="text-cyan-400">Aspiring Software Developer</span>
              <span className="text-purple-400 font-mono">/&gt;</span>
            </h2>

            {/* Tagline Quote */}
            <div className="relative my-4 max-w-2xl">
              <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal italic border-l-2 border-purple-500/50 pl-4 py-1 bg-slate-900/40 rounded-r-lg">
                "{personalInfo.tagline}"
              </p>
            </div>

            {/* Location & Quick Info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-400 mt-2 mb-8 font-medium">
              <span className="inline-flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-4 h-4 text-purple-400" />
                {personalInfo.location}
              </span>
              <span className="text-slate-600">•</span>
              <span className="inline-flex items-center gap-1.5 text-slate-300">
                <Laptop className="w-4 h-4 text-cyan-400" />
                Academic Project Experience
              </span>
              <span className="text-slate-600">•</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                Available for IT Internships
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-600/30 hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500/60 shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </button>

              <a
                href={personalInfo.cvFile}
                download="Udari_Wathsala_CV.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-slate-300 bg-slate-950/70 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-200"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-800/80 w-full justify-center lg:justify-start">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">Connect:</span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-purple-500/50 transition-all duration-200 shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-blue-400 border border-slate-800 hover:border-blue-500/50 transition-all duration-200 shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-purple-400 border border-slate-800 hover:border-purple-500/50 transition-all duration-200 shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Frame with Udari's Image & Code Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Decorative Glow Rings */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 opacity-40 blur-lg transition duration-1000 group-hover:opacity-100 animate-pulse-slow"></div>

              {/* Main Card Container */}
              <div className="relative rounded-2xl bg-[#0E1322] border border-slate-800 overflow-hidden shadow-2xl p-3">
                
                {/* Window top header decoration */}
                <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="ml-2 text-slate-400 text-[11px]">udari-portfolio.jsx</span>
                  </div>
                  <span className="text-[10px] text-purple-400">HNDIT 2025</span>
                </div>

                {/* Profile Image with subtle overlay */}
                <div className="relative mt-2 rounded-xl overflow-hidden aspect-[4/4.6] bg-slate-900 group">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1322] via-transparent to-transparent opacity-70"></div>
                  
                  {/* Floating Tech Badges */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/70 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                        <Terminal className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-semibold text-white">Full-Stack & ML</p>
                        <p className="text-[10px] text-slate-400">Java • Python • React</p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-800/60">
                      7 Projects
                    </span>
                  </div>
                </div>

                {/* Floating pill badge on top right */}
                <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-purple-500/40 shadow-xl text-xs font-mono text-purple-300">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: '6s' }} />
                  <span>SLIATE • Kurunegala</span>
                </div>

                {/* Floating code badge on bottom left */}
                <div className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-cyan-500/40 shadow-xl text-xs font-mono text-cyan-300">
                  <Code className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Passionate Developer</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
