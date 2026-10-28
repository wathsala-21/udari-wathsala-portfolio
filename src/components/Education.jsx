import React from 'react';
import { GraduationCap, Calendar, MapPin, Sparkles, UserCheck, PhoneCall, Building } from 'lucide-react';
import { educationTimeline, academicReferences } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-[#070A12] border-t border-slate-800/60 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] glow-orb-purple blur-3xl pointer-events-none opacity-20"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Timeline</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Formal educational background and current undergraduate study in Sri Lanka.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
          {educationTimeline.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-10 group">
              
              {/* Timeline Node Icon */}
              <div
                className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  item.current
                    ? 'bg-[#0E1322] border-purple-500 text-purple-400 shadow-lg shadow-purple-500/40 ring-4 ring-purple-500/10'
                    : 'bg-[#0E1322] border-slate-700 text-slate-400 group-hover:border-cyan-400 group-hover:text-cyan-300'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Year Stamp for Desktop on the Left */}
              <div className="hidden md:block absolute -left-36 top-2 text-right w-24">
                <span
                  className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-lg border ${
                    item.current
                      ? 'bg-purple-950/60 text-purple-300 border-purple-800/80'
                      : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}
                >
                  {item.period}
                </span>
              </div>

              {/* Timeline Card */}
              <div
                className={`rounded-2xl bg-[#0E1322] border p-6 card-hover-glow transition-all duration-300 ${
                  item.current
                    ? 'border-purple-500/40 shadow-xl shadow-purple-900/10'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Mobile Year Badge */}
                <div className="md:hidden inline-flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-900 text-purple-300 border border-purple-800/50 mb-2">
                  <Calendar className="w-3 h-3" />
                  <span>{item.period}</span>
                </div>

                {/* Degree / Examination Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {item.degree}
                </h3>

                {/* Institution & Location */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-cyan-400 font-medium">
                  <span>{item.institution}</span>
                  <span className="text-slate-500 hidden sm:inline">•</span>
                  <span className="inline-flex items-center gap-1 text-slate-400 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {item.campus}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                  {item.description}
                </p>

                {/* Current Status Badge */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium ${
                      item.current
                        ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/60'
                        : 'bg-slate-900 text-slate-400 border border-slate-800'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        item.current ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'
                      }`}
                    ></span>
                    {item.status}
                  </span>

                  <span className="text-slate-400 text-[11px] font-mono">
                    Academic Credential
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* References Section from CV */}
        <div className="mt-20 pt-12 border-t border-slate-800/80">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 text-xs font-mono uppercase tracking-widest mb-2">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Academic & Professional References</span>
            </div>
            <h3 className="text-xl font-bold text-white">References</h3>
            <p className="text-xs text-slate-400 mt-1">Verified referees from curriculum vitae</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {academicReferences.map((ref, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0E1322] border border-slate-800 p-6 card-hover-glow relative"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-base font-bold text-white">{ref.name}</h4>
                    <p className="text-xs text-purple-400 font-medium">{ref.position}</p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <UserCheck className="w-4 h-4" />
                  </div>
                </div>

                {ref.qualifications && (
                  <p className="text-xs text-slate-300 mb-2">
                    <span className="text-slate-500 font-mono">Qualifications: </span>
                    {ref.qualifications}
                  </p>
                )}

                {ref.organization && (
                  <p className="text-xs text-slate-300 mb-2 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-slate-500" />
                    <span>{ref.organization}</span>
                  </p>
                )}

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono">Contact:</span>
                  <a
                    href={`tel:${ref.contact.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1 font-mono text-cyan-400 hover:text-cyan-300"
                  >
                    <PhoneCall className="w-3 h-3" />
                    <span>{ref.contact}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
