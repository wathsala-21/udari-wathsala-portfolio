import React from 'react';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  BrainCircuit, 
  Wrench, 
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

const iconMap = {
  Code2,
  Globe,
  Smartphone,
  BrainCircuit,
  Wrench,
  Layers
};

const categoryTheme = {
  "Programming Languages": {
    gradient: "from-purple-500/10 to-indigo-500/10",
    border: "border-purple-500/30",
    iconBg: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
    badgeBg: "bg-purple-950/40 text-purple-200 border-purple-800/50 hover:border-purple-400",
    dot: "bg-purple-400"
  },
  "Web Development": {
    gradient: "from-cyan-500/10 to-blue-500/10",
    border: "border-cyan-500/30",
    iconBg: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
    badgeBg: "bg-cyan-950/40 text-cyan-200 border-cyan-800/50 hover:border-cyan-400",
    dot: "bg-cyan-400"
  },
  "Mobile Development": {
    gradient: "from-emerald-500/10 to-teal-500/10",
    border: "border-emerald-500/30",
    iconBg: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    badgeBg: "bg-emerald-950/40 text-emerald-200 border-emerald-800/50 hover:border-emerald-400",
    dot: "bg-emerald-400"
  },
  "Machine Learning": {
    gradient: "from-rose-500/10 to-pink-500/10",
    border: "border-rose-500/30",
    iconBg: "bg-rose-500/20 text-rose-400 border border-rose-500/30",
    badgeBg: "bg-rose-950/40 text-rose-200 border-rose-800/50 hover:border-rose-400",
    dot: "bg-rose-400"
  },
  "Development Tools": {
    gradient: "from-amber-500/10 to-orange-500/10",
    border: "border-amber-500/30",
    iconBg: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    badgeBg: "bg-amber-950/40 text-amber-200 border-amber-800/50 hover:border-amber-400",
    dot: "bg-amber-400"
  },
  "Software Project Areas": {
    gradient: "from-indigo-500/10 to-violet-500/10",
    border: "border-indigo-500/30",
    iconBg: "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30",
    badgeBg: "bg-indigo-950/40 text-indigo-200 border-indigo-800/50 hover:border-indigo-400",
    dot: "bg-indigo-400"
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-[#070A12] border-t border-slate-800/60 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] glow-orb-purple blur-3xl pointer-events-none opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] glow-orb-blue blur-3xl pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Practical skills, tools, and technical areas gained through academic coursework, laboratory exercises, and software project implementations at SLIATE.
          </p>
        </div>

        {/* Skill Badges Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.map((category) => {
            const Icon = iconMap[category.icon] || Code2;
            const theme = categoryTheme[category.category] || categoryTheme["Programming Languages"];

            return (
              <div
                key={category.category}
                className={`rounded-2xl bg-[#0E1322] border ${theme.border} p-6 shadow-xl card-hover-glow flex flex-col justify-between`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${theme.iconBg} flex items-center justify-center shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white leading-tight">
                          {category.category}
                        </h3>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Progress-Free Skill Badges */}
                  <div className="flex flex-wrap gap-2.5 mt-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border ${theme.badgeBg} transition-all duration-200 transform hover:scale-[1.03] shadow-sm`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`}></span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer note */}
                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1 text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Academic Verified
                  </span>
                  <span>{category.skills.length} Items</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
