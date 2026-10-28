import React from 'react';
import { 
  GraduationCap, 
  Code2, 
  Globe, 
  Smartphone, 
  BrainCircuit, 
  Database, 
  Sparkles,
  MapPin,
  CheckCircle,
  FolderGit2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const experienceAreas = [
  {
    title: "Software Development",
    icon: Code2,
    color: "from-blue-500 to-indigo-600",
    badge: "OOP & Architecture",
    description: "Hands-on academic projects implementing object-oriented programming principles, application logic, and desktop systems in Java and C#."
  },
  {
    title: "Web Technologies",
    icon: Globe,
    color: "from-cyan-500 to-blue-600",
    badge: "Frontend & Full-Stack",
    description: "Building responsive, modern user interfaces and front-end architectures using React, modern JavaScript, HTML5, and CSS3."
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    color: "from-emerald-500 to-teal-600",
    badge: "Android Studio",
    description: "Developing native Android mobile apps with structured report submissions, form validation, and user-friendly mobile layouts."
  },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    color: "from-purple-500 to-pink-600",
    badge: "Python & Jupyter",
    description: "Data preprocessing, feature handling, model training, and performance evaluation to solve predictive analytics challenges like heart attack risk prediction."
  },
  {
    title: "Database & Management Systems",
    icon: Database,
    color: "from-amber-500 to-orange-600",
    badge: "CRUD & Data Handling",
    description: "Designing structured administrative workflows, record keeping, and CRUD data handling across multiple business and academic management domains."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#070A12] border-t border-slate-800/60">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 glow-orb-indigo blur-3xl pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Top Summary Card */}
        <div className="rounded-2xl bg-[#0E1322]/90 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 glow-orb-purple blur-3xl pointer-events-none opacity-30"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p className="text-white font-medium text-base sm:text-lg">
                I am <span className="text-purple-400 font-semibold">{personalInfo.name}</span>, a motivated Information Technology undergraduate reading for the <span className="text-cyan-300 font-medium">Higher National Diploma in Information Technology (HNDIT)</span> at the <span className="text-slate-100 font-semibold">{personalInfo.institution}</span>.
              </p>
              <p>
                My academic journey is centered around developing solid software engineering practices, learning how modern computing frameworks operate under the hood, and translating theoretical concepts into robust digital applications.
              </p>
              <p>
                Equipped with strong <span className="text-slate-100 font-medium">problem-solving abilities</span>, <span className="text-slate-100 font-medium">teamwork and collaboration</span>, <span className="text-slate-100 font-medium">adaptability</span>, and a genuine <span className="text-slate-100 font-medium">enthusiasm for learning new technologies</span>, I am actively seeking an entry-level IT or software development opportunity to contribute meaningfully while further advancing my technical expertise.
              </p>

              {/* Highlights pills */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-purple-300 border border-slate-700">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                  SLIATE Kurunegala (2025 – Present)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-cyan-300 border border-slate-700">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  Dambadeniya, Sri Lanka
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-emerald-300 border border-slate-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  7 Academic Systems & ML Projects
                </span>
              </div>
            </div>

            {/* Right Quick Metric Cards */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                <GraduationCap className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <div className="text-lg font-bold text-white">HNDIT</div>
                <div className="text-[11px] text-slate-400">SLIATE Kurunegala</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                <FolderGit2 className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <div className="text-lg font-bold text-white">7+</div>
                <div className="text-[11px] text-slate-400">Academic Projects</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                <MapPin className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-lg font-bold text-white">Sri Lanka</div>
                <div className="text-[11px] text-slate-400">Dambadeniya</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                <BrainCircuit className="w-6 h-6 text-rose-400 mx-auto mb-2" />
                <div className="text-lg font-bold text-white">ML & Dev</div>
                <div className="text-[11px] text-slate-400">Web & Mobile</div>
              </div>
            </div>

          </div>
        </div>

        {/* Academic Experience Areas Grid */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block"></span>
              Academic Experience Areas
            </h3>
            <span className="text-xs text-slate-400 font-mono">From SLIATE Curriculum & Projects</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {experienceAreas.map((area, idx) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={area.title}
                  className="rounded-2xl bg-[#0E1322] border border-slate-800/90 p-5 card-hover-glow relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${area.color} flex items-center justify-center text-white shadow-md shadow-purple-500/10`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium text-slate-300 bg-slate-800 border border-slate-700">
                        {area.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors mb-2">
                      {area.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
