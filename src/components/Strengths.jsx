import React from 'react';
import { 
  Cpu, 
  Sparkles, 
  Users, 
  Clock, 
  ShieldCheck, 
  Languages as LanguagesIcon,
  Globe2,
  CheckCircle2
} from 'lucide-react';
import { personalStrengths, languages } from '../data/portfolioData';

const iconMap = {
  Cpu,
  Sparkles,
  Users,
  Clock,
  ShieldCheck
};

export default function Strengths() {
  return (
    <section className="py-24 relative bg-[#070A12] border-t border-slate-800/60 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[420px] h-[420px] glow-orb-indigo blur-3xl pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Work Ethic & Soft Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Strengths</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Core interpersonal abilities and attributes that support disciplined software engineering and productive team synergy.
          </p>
        </div>

        {/* Strengths Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {personalStrengths.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.title}
                className="rounded-2xl bg-[#0E1322] border border-slate-800 p-6 card-hover-glow relative group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-105 group-hover:bg-purple-500/20 transition-all duration-200">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Key Competency</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages Section */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-[#0E1322] border border-slate-800 p-8 text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <LanguagesIcon className="w-3.5 h-3.5" />
            <span>Communication</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Languages
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-6">
            Languages used for academic research, documentation, and team communication.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white font-medium text-sm sm:text-base shadow-sm hover:border-purple-500/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <Globe2 className="w-4 h-4" />
                </div>
                <span>{lang.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
