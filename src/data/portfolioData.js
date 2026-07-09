export const profile = {
  name: "Jennifer Lumabi",
  roles: [
    "Database Designer",
    "Software Quality Assurance Tester",
    "UI/UX Designer",
    "Web Developer",
  ],
  location: "Valenzuela City, Philippines",
  email: "jenniferlumabi99@gmail.com",
  phone: "+63 948 6359 654",
  github: "https://github.com/jen-0415",
  linkedin: "https://linkedin.com/in/jennifer-lumabi",
  summary:
    "I enjoy building user-centered applications that combine thoughtful design with solid engineering. From designing databases and developing backend APIs to creating responsive web interfaces and AI-powered solutions, I enjoy turning ideas into practical, reliable systems.",
  aboutBio:
    "I'm passionate about building software that combines thoughtful design with solid engineering. From designing databases and developing backend APIs to creating responsive web applications and AI-powered systems, I enjoy building solutions that are practical, reliable, and user-focused.",
};

export const interests = [
  "Database Designing & Optimization",
  "Software Quality Assurance",
  "UI/UX Design",
  "Web Development",
];

export const skillSchema = [
  { field: "languages", type: "varchar[]", values: ["HTML", "Tailwind CSS", "JavaScript", "C#", "Python"] },
  { field: "frameworks", type: "varchar[]", values: ["ReactJS", "FastAPI", "TensorFlow"] },
  { field: "databases", type: "varchar[]", values: ["MySQL", "NoSQL"] },
  { field: "ai_ml", type: "varchar[]", values: ["CNN (EfficientNetB0)", "Global RGB Feature Extraction"] },
  { field: "tools", type: "varchar[]", values: ["Git", "GitHub", "SSMS"] },
  { field: "ui_ux", type: "varchar[]", values: ["Figma"] },
];

export const experience = [
  {
    org: "ProjectEngage Inc.",
    role: "IT Intern",
    period: "Sep 2025 — Feb 2026",
    place: "Bel-Air, Makati",
    points: [
      "Designed and maintained database schemas for a real-time HR Information System, improving data accuracy, query performance, and scalability.",
      "Built responsive UI/UX interfaces and front-end components using ReactJS and Tailwind CSS in collaboration with a cross-functional team.",
      "Assisted in software quality assurance activities, documenting and resolving bugs to ensure reliable feature delivery.",
    ],
  },
  {
    org: "AWS Cloud Clubs Philippines",
    role: "Resource Allocation Officer",
    period: "Jul 2024 — Jan 2026",
    place: "Nationwide (Remote)",
    points: [
      "Coordinated distribution of AWS resources to AWSCC-affiliated universities nationwide, managing logistics and tracking allocation status across multiple student chapters.",
    ],
  },
];

export const education = [
  {
    school: "Polytechnic University of the Philippines",
    program: "Bachelor of Science in Computer Science",
    period: "Aug 2023 — Present",
    place: "Anonas Street, Sta. Mesa, Manila",
  },
  {
    school: "Polytechnic University of the Philippines",
    program: "Science, Technology, Engineering, and Mathematics",
    period: "2021 — 2023",
    place: "Anonas Street, Sta. Mesa, Manila",
  },
];

export const projects = [
  {
    name: "iReportPH",
    tagline: "Digital Police Blotter Reporting System",
    description:
      "Designed normalized relational database schemas to manage police blotter and incident data with minimal redundancy. Created UI/UX wireframes and interfaces in Figma to streamline digital reporting workflows for non-technical users.",
    image: "/projects/ireport.png",
    tech: ["SQL", "Figma", "DBMS Design"],
    accent: ["#B24CE0", "#8B2FC9"],
    tag: "iRP",
  },
  {
    name: "HueView",
    tagline: "CNN-Based Skin Tone & Undertone Classification",
    description:
      "Built the backend API using FastAPI and Python to handle image uploads, run the skin tone inference pipeline, and return classification results as JSON. Trained an EfficientNetB0-based CNN using Global RGB Feature Extraction, achieving 90.97% accuracy across six skin tone categories on a 2,801-image test set.",
    image: "/projects/hueview.png",
    tech: ["FastAPI", "Python", "TensorFlow", "CNN"],
    accent: ["#8B2FC9", "#B24CE0"],
    tag: "HV",
  },
  {
    name: "Bloom & Beat",
    tagline: "Two-Player AI Garden Strategy Game",
    description:
      "Designed the game interface and system architecture for a two-player AI strategy game on an 8x8 grid, incorporating Minimax, BFS, and A* pathfinding to drive intelligent gameplay. Executed end-to-end testing to validate AI decision-making, cascading spread events, and pathfinding behavior.",
    image: "/projects/bloom&beat.png",
    tech: ["Minimax", "BFS", "A* Search", "Game AI"],
    accent: ["#F0549A", "#B24CE0"],
    tag: "B&B",
  },
  {
    name: "FlutterShutter",
    tagline: "Photography Booking & Management System",
    description:
      "Designed and implemented the relational database schema for a full-stack photography booking system supporting real-time availability tracking, appointment management, and payment processing for dual user roles. Developed core modules in C# using MVC, enabling secure role-based authentication and automated scheduling conflict resolution.",
    image: "/projects/fluttershutter.png",
    tech: ["C#", "MVC", "SQL"],
    accent: ["#8B2FC9", "#F0549A"],
    tag: "FS",
  },
  {
    name: "SL Temps",
    tagline: "Centralized HR Information System",
    description:
      "Architected a centralized HR Information System from scratch, designing the full relational and NoSQL database structure to support five role-based portals — Employee, Supervisor, HR, Accounting, and IT Help Desk. Designed end-to-end UI/UX in Figma and built the front-end for all portals, implementing attendance tracking, leave management, payroll processing, and IT ticketing.",
    image: "/projects/sl-temps.png",
    tech: ["ReactJS", "Tailwind CSS", "Figma", "NoSQL", "SQL"],
    accent: ["#B24CE0", "#F0549A"],
    tag: "SLT",
  },
];
