import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  FolderGit2, 
  BrainCircuit, 
  Smartphone, 
  BookOpen, 
  Coffee, 
  GraduationCap, 
  UtensilsCrossed, 
  Compass,
  Layers,
  Info,
  CheckCircle2,
  Code
} from 'lucide-react';
import { Github } from './Icons';
import { projects } from '../data/portfolioData';

const iconMap = {
  BrainCircuit,
  Smartphone,
  BookOpen,
  Coffee,
  GraduationCap,
  UtensilsCrossed,
  Compass
};

const filterTabs = [
  { label: 'All Projects', value: 'all' },
  { label: 'Machine Learning', value: 'Machine Learning' },
  { label: 'Mobile Development', value: 'Mobile Development' },
  { label: 'Web & Full Stack', value: 'Web' },
  { label: 'Software Systems', value: 'Software Development' }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((proj) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'Web') {
      return proj.category.includes('Web');
    }
    return proj.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 relative bg-[#070A12] border-t border-slate-800/60 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] glow-orb-purple blur-3xl pointer-events-none opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] glow-orb-cyan blur-3xl pointer-events-none opacity-15"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 text-xs font-mono uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Academic Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            A showcase of hands-on academic software, mobile, web, and machine-learning projects developed during IT undergraduate coursework.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.label}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-500 shadow-md shadow-purple-600/30'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const Icon = iconMap[project.icon] || Code;
            return (
              <div
                key={project.id}
                className="rounded-2xl bg-[#0E1322] border border-slate-800 p-6 flex flex-col justify-between card-hover-glow relative group overflow-hidden"
              >
                {/* Top Subtle Gradient Ribbon */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accentColor}`}></div>

                <div>
                  {/* Card Header: Icon, Category Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-purple-400 shadow-sm group-hover:scale-105 group-hover:border-purple-500/50 group-hover:text-purple-300 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-medium border ${project.badgeColor}`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Project Number / Subtitle */}
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 mb-1">
                    <span>PROJECT 0{index + 1}</span>
                    <span>•</span>
                    <span className="text-slate-400">{project.subtitle}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights preview */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-800/80">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-[12px] text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Tech tags + Links */}
                <div>
                  {/* Technologies Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono font-medium text-slate-300 bg-slate-900 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 hover:border-purple-500/50 transition-all duration-200"
                      title="View GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5 text-purple-400" />
                      <span>Repository</span>
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Quick Details</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Academic Projects */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 font-mono">
            * All projects represent coursework and laboratory systems developed for academic evaluations at SLIATE Kurunegala. Repository links direct to project source archives.
          </p>
        </div>

      </div>

      {/* Quick Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0E1322] border border-slate-700 p-6 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 border border-slate-700"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-3">
              <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${selectedProject.badgeColor}`}>
                {selectedProject.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">{selectedProject.subtitle}</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{selectedProject.title}</h3>
            
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {selectedProject.description}
            </p>

            <div className="mb-4">
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2">Key Implementation Highlights:</h4>
              <div className="space-y-1.5 bg-slate-900/70 p-3 rounded-xl border border-slate-800">
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono bg-purple-950/40 text-purple-300 border border-purple-800/50">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub Repo</span>
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800 border border-slate-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
