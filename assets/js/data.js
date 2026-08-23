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
    role: "Computer Engineering Student",
    subRole: "Software Developer & Security Enthusiast",
    statusBadge: "Available for Internships & Opportunities",
    bio: "Computer Engineering student building modern web applications, software solutions, and secure data systems. Passionate about full-stack development, database architecture, and continuous technical learning.",
    avatar: "assets/images/profile.jpg",
    location: "Palghar, Maharashtra, India",
    email: "neelkore25@gmail.com"
  },

  stats: [
    { number: 2, suffix: "+", label: "Years Engineering Study" },
    { number: 15, suffix: "+", label: "Projects & Repositories" },
    { number: 3, suffix: "+", label: "Verified Credentials" }
  ],

  about: {
    summary: [
      "I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Engineering at St. John College of Engineering and Management.",
      "My primary interests lie at the intersection of Software Engineering, Full Stack Web Development, Database Management, and Cybersecurity. I enjoy transforming complex requirements into clean, performant, and reliable applications."
    ],
    coreFocus: [
      {
        icon: "fa-code",
        title: "Software Engineering",
        description: "Building clean, modular, and maintainable software following core OOP and architectural standards."
      },
      {
        icon: "fa-layer-group",
        title: "Full Stack Web",
        description: "Developing responsive web applications with modern HTML5, CSS3, JavaScript (ES6+), and MERN stack principles."
      },
      {
        icon: "fa-shield-halved",
        title: "Cybersecurity & Resilience",
        description: "Understanding network security, enterprise backup systems, disaster recovery, and infrastructure safety."
      },
      {
        icon: "fa-database",
        title: "Database Architecture",
        description: "Designing relational databases, writing optimized SQL queries, and maintaining data integrity with PostgreSQL/DBMS."
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

  skills: [
    {
      category: "Languages",
      icon: "fa-terminal",
      items: [
        { name: "C", level: "Intermediate" },
        { name: "C++", level: "Intermediate" },
        { name: "Java", level: "Intermediate" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "SQL", level: "Advanced" }
      ]
    },
    {
      category: "Web & Full Stack",
      icon: "fa-laptop-code",
      items: [
        { name: "HTML5 / CSS3", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "React", level: "Intermediate" },
        { name: "Node.js & Express", level: "Intermediate" },
        { name: "Responsive UI/UX", level: "Advanced" }
      ]
    },
    {
      category: "CS & Security Fundamentals",
      icon: "fa-brain",
      items: [
        { name: "Database Systems (DBMS)", level: "Advanced" },
        { name: "Operating Systems", level: "Intermediate" },
        { name: "Computer Networks", level: "Intermediate" },
        { name: "Information Security", level: "Intermediate" },
        { name: "Data Structures", level: "Intermediate" }
      ]
    },
    {
      category: "Tools & Environment",
      icon: "fa-gears",
      items: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "Linux Basics", level: "Intermediate" }
      ]
    }
  ],

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
      credentialUrl: "",
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
