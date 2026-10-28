// Portfolio data strictly based on M. M. A. Udari Wathsala's CV
import udariProfileImg from '../assets/udari-profile.jpg';
import udariCvPdf from '../assets/Udari_Wathsala_CV.pdf';

export const personalInfo = {
  name: "M. M. A. Udari Wathsala",
  shortName: "Udari Wathsala",
  title: "IT Undergraduate | Aspiring Software Developer",
  tagline: "Passionate about building innovative software solutions, developing web and mobile applications, and exploring machine learning technologies.",
  profileImage: udariProfileImg,
  cvFile: udariCvPdf,
  email: "Wathsalaudari821@gmail.com",
  phone: "+94 74 356 0224",
  location: "Dambadeniya, Sri Lanka",
  institution: "Sri Lanka Institute of Advanced Technological Education (SLIATE), Kurunegala",
  program: "Higher National Diploma in Information Technology (HNDIT)",
  period: "2025 – Present",
  socials: {
    github: "https://github.com/wathsala-21",
    linkedin: "https://linkedin.com/in/udari-wathsala",
  },
  bio: [
    "I am an enthusiastic Information Technology undergraduate currently pursuing the Higher National Diploma in Information Technology (HNDIT) at the Sri Lanka Institute of Advanced Technological Education (SLIATE), Kurunegala.",
    "Driven by curiosity and a desire to build real-world digital solutions, I have acquired hands-on academic project experience spanning software development, responsive web applications, native Android mobile development, and machine learning models.",
    "I possess strong problem-solving abilities, logical thinking, and an eagerness to embrace emerging technologies. I value teamwork, disciplined time management, and adaptability as I seek entry-level IT and software development opportunities."
  ],
  academicFocus: [
    { title: "Software Development", description: "Architecture, OOP principles, and clean modular coding." },
    { title: "Web Technologies", description: "Modern responsive web applications with React and JavaScript." },
    { title: "Mobile App Development", description: "Native Android application development using Android Studio." },
    { title: "Machine Learning", description: "Data preprocessing, predictive model training, and evaluation." },
    { title: "Database & Management Systems", description: "CRUD operations, structured database management, and data handling." }
  ]
};

export const technicalSkills = [
  {
    category: "Programming Languages",
    icon: "Code2",
    description: "Core languages utilized across academic software projects",
    skills: ["Java", "JavaScript", "C#", "Python"]
  },
  {
    category: "Web Development",
    icon: "Globe",
    description: "Front-end and interactive web application tools",
    skills: ["React", "JavaScript"]
  },
  {
    category: "Mobile Development",
    icon: "Smartphone",
    description: "Native Android app engineering environment",
    skills: ["Android Studio"]
  },
  {
    category: "Machine Learning",
    icon: "BrainCircuit",
    description: "Data-driven analysis and predictive modeling workflow",
    skills: [
      "Data Preprocessing",
      "Model Training",
      "Prediction using Python & Jupyter Notebook"
    ]
  },
  {
    category: "Development Tools",
    icon: "Wrench",
    description: "Integrated environments and version control tools",
    skills: ["NetBeans", "GitHub", "Jupyter Notebook", "Android Studio"]
  },
  {
    category: "Software Project Areas",
    icon: "Layers",
    description: "Key application domains covered during academic coursework",
    skills: [
      "Management Systems",
      "CRUD Operations",
      "Data Handling",
      "Application Development"
    ]
  }
];

export const projects = [
  {
    id: "heart-attack-risk",
    title: "Heart Attack Risk Prediction",
    category: "Machine Learning",
    subtitle: "Predictive Analytics & Model Training",
    description: "A machine-learning project developed using Python and Jupyter Notebook to predict heart attack risk. Includes data processing, model training, and GitHub documentation.",
    highlights: [
      "Dataset cleaning, exploratory analysis, and feature normalization",
      "Model training and performance evaluation using predictive algorithms",
      "Comprehensive documentation hosted on GitHub repository"
    ],
    technologies: ["Python", "Jupyter Notebook", "Machine Learning", "Data Preprocessing", "GitHub"],
    githubUrl: "https://github.com/wathsala-21/heart-attack-risk-prediction",
    liveDemoUrl: null,
    icon: "BrainCircuit",
    accentColor: "from-rose-500/20 to-purple-500/20",
    badgeColor: "text-rose-400 border-rose-500/30 bg-rose-500/10"
  },
  {
    id: "news-reporter-app",
    title: "News Reporter Mobile App",
    category: "Mobile Development",
    subtitle: "Native Android Application",
    description: "An Android mobile application designed to support news and report submission, featuring an intuitive mobile UI for real-time reporting workflows.",
    highlights: [
      "Native Android user interface built with Android Studio",
      "Structured report and news submission flow",
      "Mobile-optimized form management and data handling"
    ],
    technologies: ["Android Studio", "Java / Android", "Mobile UI", "CRUD Operations"],
    githubUrl: "https://github.com/wathsala-21/news-reporter-mobile-app",
    liveDemoUrl: null,
    icon: "Smartphone",
    accentColor: "from-blue-500/20 to-cyan-500/20",
    badgeColor: "text-blue-400 border-blue-500/30 bg-blue-500/10"
  },
  {
    id: "library-management",
    title: "Library Management System",
    category: "Software Development",
    subtitle: "Desktop Application with NetBeans",
    description: "A Java-based academic project developed using NetBeans to support book tracking, member records, and overall library management operations.",
    highlights: [
      "Book inventory management, issue, and return tracking",
      "User record handling with structured CRUD data operations",
      "Desktop GUI designed in NetBeans IDE"
    ],
    technologies: ["Java", "NetBeans", "Desktop GUI", "CRUD Operations", "Database Handling"],
    githubUrl: "https://github.com/wathsala-21/library-management-system",
    liveDemoUrl: null,
    icon: "BookOpen",
    accentColor: "from-amber-500/20 to-indigo-500/20",
    badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10"
  },
  {
    id: "cafe-management",
    title: "Cafe Management System",
    category: "Software Development",
    subtitle: "Operational Point-of-Sale & Order Tracking",
    description: "A Java application developed to support cafe management operations, order handling, and service workflow coordination.",
    highlights: [
      "Order intake and bill calculation system",
      "Menu item organization and sales tracking",
      "Robust Java backend architecture"
    ],
    technologies: ["Java", "OOP Principles", "Data Handling", "Desktop App"],
    githubUrl: "https://github.com/wathsala-21/cafe-management-system",
    liveDemoUrl: null,
    icon: "Coffee",
    accentColor: "from-orange-500/20 to-amber-500/20",
    badgeColor: "text-orange-400 border-orange-500/30 bg-orange-500/10"
  },
  {
    id: "school-management",
    title: "School Management System",
    category: "Software Development",
    subtitle: "Administrative Desktop Application",
    description: "A C# application designed to support school administrative tasks, student enrollment records, and academic operations.",
    highlights: [
      "Student and staff data administration module",
      "Record keeping and structured administrative workflow",
      "Engineered with C# object-oriented programming"
    ],
    technologies: ["C#", ".NET", "Management Systems", "CRUD Operations"],
    githubUrl: "https://github.com/wathsala-21/school-management-system",
    liveDemoUrl: null,
    icon: "GraduationCap",
    accentColor: "from-indigo-500/20 to-purple-500/20",
    badgeColor: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10"
  },
  {
    id: "restaurant-management",
    title: "Restaurant Management System",
    category: "Web & Full Stack",
    subtitle: "Web & Java Integrated System",
    description: "A comprehensive management system developed using Java and React to streamline restaurant dining operations, order processing, and administrative tracking.",
    highlights: [
      "Modern interactive frontend built with React",
      "Java backend logic for operational data handling",
      "Seamless customer ordering and table tracking workflows"
    ],
    technologies: ["React", "JavaScript", "Java", "Web Technologies", "CRUD Operations"],
    githubUrl: "https://github.com/wathsala-21/restaurant-management-system",
    liveDemoUrl: null,
    icon: "UtensilsCrossed",
    accentColor: "from-emerald-500/20 to-teal-500/20",
    badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
  },
  {
    id: "tourist-management",
    title: "Tourist Management System",
    category: "Web Development",
    subtitle: "JavaScript Web Application",
    description: "A tourist management system developed using JavaScript to facilitate travel package browsing, tour booking, and visitor inquiry management.",
    highlights: [
      "Dynamic interactive UI developed with modern JavaScript",
      "Destination package discovery and detail viewing",
      "Form validation and visitor submission handling"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Web Development", "Data Handling"],
    githubUrl: "https://github.com/wathsala-21/tourist-management-system",
    liveDemoUrl: null,
    icon: "Compass",
    accentColor: "from-cyan-500/20 to-sky-500/20",
    badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10"
  }
];

export const educationTimeline = [
  {
    degree: "Higher National Diploma in Information Technology (HNDIT)",
    institution: "Sri Lanka Institute of Advanced Technological Education (SLIATE)",
    campus: "Kurunegala, Sri Lanka",
    period: "2025 – Present",
    status: "Currently Reading",
    description: "Specialized undergraduate program focused on software engineering principles, web and mobile development, databases, and applied computing methodologies.",
    current: true
  },
  {
    degree: "G.C.E. Advanced Level Examination",
    institution: "Dambadeniya Central College",
    campus: "Dambadeniya, Sri Lanka",
    period: "2024",
    status: "Completed",
    description: "Successfully completed secondary education laying a strong mathematical, analytical, and logical foundation for computing studies.",
    current: false
  },
  {
    degree: "G.C.E. Ordinary Level Examination",
    institution: "Dambadeniya Central College",
    campus: "Dambadeniya, Sri Lanka",
    period: "2021",
    status: "Completed",
    description: "Completed general secondary education with distinguished academic performance across foundational subjects.",
    current: false
  }
];

export const personalStrengths = [
  {
    title: "Problem-solving & Logical Thinking",
    description: "Strong ability to break complex computational problems into clear, solvable logical components and algorithmic steps.",
    icon: "Cpu"
  },
  {
    title: "Willingness to Learn New Technologies",
    description: "Constantly curious and passionate about exploring new frameworks, languages, and machine learning breakthroughs.",
    icon: "Sparkles"
  },
  {
    title: "Teamwork & Collaboration",
    description: "Effective team player who communicates clearly, shares technical insights, and contributes constructively to group projects.",
    icon: "Users"
  },
  {
    title: "Time Management & Attention to Detail",
    description: "Disciplined approach to project deadlines, structured code quality, and meticulous verification of software behavior.",
    icon: "Clock"
  },
  {
    title: "Adaptability & Responsibility",
    description: "Quick to adjust to new technical environments and project requirements with accountability and dependable execution.",
    icon: "ShieldCheck"
  }
];

export const languages = [
  { name: "Sinhala" },
  { name: "English" }
];

export const academicReferences = [
  {
    name: "S. Shifran",
    position: "Senior Software QA Engineer / Visiting Lecturer",
    qualifications: "MSc in IT, BSc in IS, ISTQB, CIMA",
    contact: "0768701466"
  },
  {
    name: "Yasas Adikari",
    position: "Senior Quality Engineer",
    organization: "ICBT Campus, Kurunegala",
    contact: "0374 777 888"
  }
];
