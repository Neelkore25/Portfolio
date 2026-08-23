/**
 * Portfolio Single Source of Truth Data File
 * Author: Neel Kore
 * Description: Contains streamlined, recruiter-optimized content for Neel Kore's portfolio.
 * Modifying arrays here automatically updates the UI without changing any HTML or rendering code.
 */

const portfolioData = {
  personal: {
    name: "Neel Kore",
    logoName: "Neel Kore",
    role: "Cybersecurity & Full Stack Developer",
    subRole: "Computer Engineering Student @ SJCEM",
    statusBadge: "Open to Internships & Opportunities",
    tagline: "Building secure web applications, automation tools, and modern digital experiences.",
    bio: "Computer Engineering student building performant web applications, software tools, and secure data infrastructure. Passionate about full-stack development (MERN), database architecture, and cybersecurity resilience.",
    avatar: "assets/images/profile.jpg",
    location: "Palghar, Maharashtra, India",
    email: "neelkore25@gmail.com"
  },

  // Action-based recruiter metrics (Bug Fix #7)
  stats: [
    { number: 10, suffix: "+", label: "Projects Built & Deployed" },
    { number: 5, suffix: "+", label: "Core Credentials & Badges" },
    { number: 1, suffix: "+", label: "Months Industrial Exposure (NPCIL)" }
  ],

  about: {
    summary: [
      "I am a Computer Engineering student at St. John College of Engineering and Management (SJCEM), specializing in software development, web applications, and network security concepts.",
      "My technical journey combines hands-on full-stack development with enterprise data resilience training at Nuclear Power Corporation of India Limited (NPCIL). I focus on writing clean, efficient code while applying security-first principles."
    ],
    services: [
      { icon: "fa-layer-group", title: "Web Development", desc: "Building responsive full-stack web applications using modern JavaScript, HTML5/CSS3, and React." },
      { icon: "fa-shield-halved", title: "Cybersecurity & Resilience", desc: "Analyzing data protection, air-gapped network security, and enterprise disaster recovery matrices." },
      { icon: "fa-code-branch", title: "API Development", desc: "Designing RESTful API endpoints, Web Storage integrations, and client-server workflows." },
      { icon: "fa-gears", title: "Automation & Scripting", desc: "Crafting lightweight developer scripts, task utilities, and workflow automation." },
      { icon: "fa-linux", title: "Linux Administration", desc: "Navigating Linux environments, basic shell scripting, and server configuration fundamentals." }
    ],
    coreFocus: [
      {
        icon: "fa-code",
        title: "Software Engineering",
        description: "Building clean, modular, and maintainable software following OOP and architectural standards."
      },
      {
        icon: "fa-layer-group",
        title: "Full Stack Web",
        description: "Developing responsive web applications with HTML5, CSS3, JavaScript (ES6+), and MERN principles."
      },
      {
        icon: "fa-shield-halved",
        title: "Cybersecurity & Resilience",
        description: "Understanding network security, enterprise backup systems, disaster recovery, and infrastructure safety."
      },
      {
        icon: "fa-database",
        title: "Database Architecture",
        description: "Designing relational databases, writing optimized SQL queries, and maintaining data integrity."
      }
    ],
    quickInfo: [
      { label: "Degree", value: "B.Tech Computer Engineering" },
      { label: "Institution", value: "St. John College of Engineering & Management" },
      { label: "Location", value: "Palghar, Maharashtra, India" },
      { label: "Expected Graduation", value: "May 2028" }
    ]
  },

  experience: [
    {
      title: "Project Trainee",
      company: "Nuclear Power Corporation of India Limited (NPCIL)",
      location: "Tarapur, Maharashtra",
      duration: "1 Month Industrial Exposure",
      projectTitle: "Enterprise Data Backup & Cybersecurity Study",
      description: "Completed practical industrial training at NPCIL Tarapur. Gained direct insight into enterprise data backup systems, cybersecurity protocols, and disaster recovery planning implemented in critical infrastructure environments.",
      highlights: [
        "Studied enterprise data resilience architectures, automated storage redundancy, and backup system operations.",
        "Observed secure server infrastructure functioning within air-gapped, high-security network environments.",
        "Analyzed disaster recovery matrices, business continuity planning, and strict facility security protocols."
      ],
      skills: ["Enterprise Backup", "Cybersecurity", "Disaster Recovery", "Infrastructure Resilience", "Data Security"]
    }
  ],

  // Rebalanced proficiency badges (Bug Fix #6)
  skills: [
    {
      category: "Languages",
      icon: "fa-terminal",
      items: [
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "SQL", level: "Advanced" },
        { name: "C", level: "Intermediate" },
        { name: "C++", level: "Intermediate" },
        { name: "Java", level: "Intermediate" }
      ]
    },
    {
      category: "Web & Full Stack",
      icon: "fa-laptop-code",
      items: [
        { name: "HTML5 / CSS3", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "React", level: "Proficient" },
        { name: "Node.js & Express", level: "Proficient" },
        { name: "Responsive UI/UX", level: "Proficient" }
      ]
    },
    {
      category: "CS & Security Fundamentals",
      icon: "fa-brain",
      items: [
        { name: "Database Systems (DBMS)", level: "Proficient" },
        { name: "Computer Networks", level: "Intermediate" },
        { name: "Information Security", level: "Intermediate" },
        { name: "Operating Systems", level: "Intermediate" },
        { name: "Data Structures", level: "Intermediate" }
      ]
    },
    {
      category: "Tools & Environment",
      icon: "fa-gears",
      items: [
        { name: "Git & GitHub", level: "Proficient" },
        { name: "VS Code", level: "Proficient" },
        { name: "PostgreSQL", level: "Proficient" },
        { name: "Linux Basics", level: "Intermediate" }
      ]
    }
  ],

  // Featured Project & Grid Projects
  featuredProject: {
    id: "finance-risk-featured",
    category: "web-dev",
    title: "Finance Risk Analytics Platform",
    badge: "Featured Analytics Suite",
    description: "A comprehensive, interactive web analytics suite designed for evaluating financial risk indicators, analyzing portfolio exposure matrices, and presenting dynamic decision-support data visualizations.",
    tags: ["JavaScript (ES6+)", "HTML5/CSS3", "Financial Risk Modeling", "Data Visualization", "DOM Architecture"],
    liveUrl: "https://neelkore25.github.io/finance-risk-management/",
    githubUrl: "https://github.com/Neelkore25/finance-risk-management",
    icon: "fa-chart-line"
  },

  projects: [
    {
      id: "finance-risk",
      category: "web-dev",
      categoryName: "Web Dev",
      title: "Finance Risk Analytics Platform",
      badge: "Analytics Suite",
      description: "An interactive web platform designed for evaluating financial risk indicators, analyzing portfolio exposure, and presenting decision-support analytics.",
      tags: ["JavaScript", "HTML5/CSS3", "Financial Analytics", "Data Visualization"],
      liveUrl: "https://neelkore25.github.io/finance-risk-management/",
      githubUrl: "https://github.com/Neelkore25/finance-risk-management",
      icon: "fa-chart-line"
    },
    {
      id: "smart-todo",
      category: "tools",
      categoryName: "Tools",
      title: "Smart-Todo Productivity Suite",
      badge: "Productivity App",
      description: "A streamlined task management suite featuring smart task categories, priority tracking, persistent storage, and clean workflow tools.",
      tags: ["JavaScript", "Web Storage API", "DOM Architecture", "Productivity UI"],
      liveUrl: "https://neelkore25.github.io/smart-todo/",
      githubUrl: "https://github.com/Neelkore25/smart-todo",
      icon: "fa-list-check"
    },
    {
      id: "scent-atlas",
      category: "web-dev",
      categoryName: "Web Dev",
      title: "The Scent Atlas",
      badge: "Visual Catalog",
      description: "An interactive fragrance discovery catalog allowing users to explore scent notes, fragrance families, and detailed sensory profiles.",
      tags: ["JavaScript", "Interactive UI", "CSS Animations", "Catalog Architecture"],
      liveUrl: "https://neelkore25.github.io/scent-atlas/",
      githubUrl: "https://github.com/Neelkore25/scent-atlas",
      icon: "fa-compass"
    },
    {
      id: "npcil-security",
      category: "security",
      categoryName: "Security",
      title: "Enterprise Data Resilience Study",
      badge: "Cybersecurity Trainee Report",
      description: "Comprehensive technical analysis of enterprise data backup systems, air-gapped network security, and disaster recovery at NPCIL Tarapur.",
      tags: ["Cybersecurity", "Disaster Recovery", "Air-Gapped Security", "Data Backup"],
      liveUrl: "assets/docs/npcil_training_report.pdf",
      githubUrl: "https://github.com/Neelkore25",
      icon: "fa-shield-halved"
    }
  ],

  certifications: [
    {
      id: "cert-npcil",
      title: "Industrial Training — Enterprise Data Backup & Cybersecurity",
      issuer: "Nuclear Power Corporation of India Limited (NPCIL)",
      date: "Tarapur Site, Maharashtra",
      badge: "Verified Industrial Training",
      icon: "fa-shield-halved",
      description: "Practical industrial training validation covering data resilience, infrastructure backup, and security protocols.",
      credentialUrl: "assets/docs/npcil_training_report.pdf",
      imageUrl: "assets/images/certificates/npcil_cert.jpg"
    },
    {
      id: "cert-dbms",
      title: "Database Management Systems & SQL",
      issuer: "St. John College of Engineering & Management",
      date: "Academic Domain Skill",
      badge: "Core Engineering",
      icon: "fa-database",
      description: "Comprehensive validation in relational database design, SQL querying, indexing, and schema normalization.",
      credentialUrl: "",
      imageUrl: ""
    },
    {
      id: "cert-security",
      title: "Information Security & Computer Networks",
      issuer: "Technical Exposure",
      date: "Verified Domain Skill",
      badge: "Security Focus",
      icon: "fa-network-wired",
      description: "Foundational training in network protocols, data protection, and system security fundamentals.",
      credentialUrl: "",
      imageUrl: ""
    }
  ],

  documents: [
    {
      id: "doc-resume",
      title: "Official Resume / CV",
      description: "Comprehensive engineering resume outlining technical competencies, internship experience, and projects.",
      icon: "fa-file-pdf",
      badge: "Primary Resume",
      filePath: "assets/docs/resume.pdf",
      isPrimary: true
    },
    {
      id: "doc-npcil-report",
      title: "NPCIL Industrial Training Report",
      description: "Technical project report on enterprise data backup and cybersecurity at NPCIL Tarapur.",
      icon: "fa-file-lines",
      badge: "Project Report",
      filePath: "assets/docs/npcil_training_report.pdf",
      isPrimary: false
    }
  ],

  education: {
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Engineering",
    institution: "St. John College of Engineering and Management",
    location: "Palghar, Maharashtra",
    duration: "2024 — 2028 (Expected)",
    coursework: [
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming (OOP)",
      "Software Engineering",
      "Data Structures & Algorithms",
      "Information Security",
      "Web Technologies"
    ]
  },

  socials: {
    github: "https://github.com/Neelkore25",
    linkedin: "https://www.linkedin.com/in/neel-kore-00567231b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/neel_kore?utm_source=qr&igsh=cjZsZW5ydGdid3N6",
    email: "neelkore25@gmail.com"
  }
};

if (typeof window !== 'undefined') {
  window.portfolioData = portfolioData;
}
