/**
 * Portfolio Single Source of Truth Data File
 * Author: Neel Kore
 * Description: Contains all editable information for personal details,
 * about info, industrial experience, skills, projects, certifications, documents, education, and socials.
 * Modifying arrays here automatically updates the UI without changing any HTML or rendering code.
 */

const portfolioData = {
  personal: {
    name: "Neel Kore",
    logoName: "Neel",
    role: "Computer Engineering Student",
    subRole: "Full Stack Developer & Security Enthusiast",
    statusBadge: "Available for Internships & Opportunities",
    bio: "Computer Engineering student passionate about software development, database systems, and cybersecurity. Experienced in enterprise data backup, RAID storage, and network resilience through hands-on industrial training at Nuclear Power Corporation of India Limited (NPCIL).",
    avatar: "assets/images/profile.jpg",
    location: "Maharashtra, India",
    email: "neelkore25@gmail.com"
  },

  about: {
    summary: [
      "I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Engineering at St. John College of Engineering and Management.",
      "My core engineering focus spans Software Engineering, Full Stack Web Development (MERN), Database Management Systems, Cybersecurity, and Networking.",
      "I excel at solving structured technical problems, understanding system-level security architecture, and building performant, modern web applications."
    ],
    coreFocus: [
      {
        icon: "fa-code",
        title: "Software Engineering",
        description: "Designing modular, clean, and maintainable software applications following SOLID principles and best practices."
      },
      {
        icon: "fa-layer-group",
        title: "MERN & Web Stack",
        description: "Building responsive modern web applications using modern JavaScript (ES6+), HTML5, CSS3, and Node/React ecosystems."
      },
      {
        icon: "fa-shield-halved",
        title: "Cybersecurity & Resiliency",
        description: "Enterprise data backup systems, air-gapped infrastructure, Commvault software, RAID configurations, and disaster recovery."
      },
      {
        icon: "fa-database",
        title: "Database Systems",
        description: "Relational database design, PostgreSQL, SQL query optimization, ER modeling, and data integrity."
      },
      {
        icon: "fa-network-wired",
        title: "Computer Networks",
        description: "Understanding network protocols, TCP/IP stack, secure data transmission, and server infrastructure."
      },
      {
        icon: "fa-lightbulb",
        title: "Problem Solving",
        description: "Algorithmic thinking, data structures, and continuous adoption of modern development tools."
      }
    ],
    quickInfo: [
      { label: "Current Status", value: "B.Tech Student (Computer Engineering)" },
      { label: "Institution", value: "St. John College of Eng. & Management" },
      { label: "Location", value: "Maharashtra, India" },
      { label: "Primary Interest", value: "Software Eng. & Cybersecurity" },
      { label: "Expected Graduation", value: "May 2028" }
    ]
  },

  experience: [
    {
      title: "Project Trainee — Industrial Exposure",
      company: "Nuclear Power Corporation of India Limited (NPCIL)",
      location: "Tarapur, Maharashtra Site",
      duration: "1 Month",
      projectTitle: "Study of Data Backup and Cyber Security",
      description: "Completed practical industrial training at Nuclear Power Corporation of India Limited (NPCIL), Tarapur Site. Gained direct exposure to enterprise-grade backup infrastructure, disaster recovery protocols, and cybersecurity practices implemented in critical nuclear power plant environments.",
      highlights: [
        "Studied enterprise data backup architectures incorporating Commvault software, RAID storage arrays, and physical LTO tape automation.",
        "Visited secure site server facilities and observed enterprise backup operations functioning within air-gapped, highly protected networks.",
        "Gained deep understanding of cybersecurity posture, disaster recovery matrices, and business continuity for critical infrastructure.",
        "Observed strict nuclear safety protocols, security compliance frameworks, and administrative access governance.",
        "Documented comprehensive technical learnings in a formal project report submitted to NPCIL department mentors."
      ],
      skills: ["Commvault", "RAID Arrays", "LTO Tape Systems", "Air-Gapped Networks", "Cybersecurity", "Disaster Recovery", "Data Resilience"]
    }
  ],

  skills: [
    {
      category: "Languages",
      icon: "fa-terminal",
      items: ["C", "C++", "Java", "JavaScript (ES6+)", "SQL"]
    },
    {
      category: "Frameworks & Web Stack",
      icon: "fa-laptop-code",
      items: ["HTML5", "CSS3", "JavaScript", "React", "Node.js Basics", "Express.js Basics", "Responsive Design", "DOM API"]
    },
    {
      category: "CS & Security Fundamentals",
      icon: "fa-brain",
      items: ["Database Management (DBMS)", "Operating Systems", "Computer Networks", "Information Security", "Data Structures & Algorithms", "Disaster Recovery"]
    },
    {
      category: "Developer Tools & Systems",
      icon: "fa-gears",
      items: ["Git", "GitHub", "VS Code", "PostgreSQL", "Commvault Systems", "RAID Configurations", "Linux Fundamentals"]
    }
  ],

  projects: [
    {
      id: "finance-risk",
      title: "Finance Risk Analytics Platform",
      badge: "Featured Analytics",
      description: "A comprehensive web-based platform designed for evaluating financial risk indicators, analyzing portfolio exposure, and presenting interactive metrics for risk mitigation.",
      tags: ["JavaScript", "HTML5/CSS3", "Financial Analytics", "Data Visualization", "UI/UX"],
      liveUrl: "https://neelkore25.github.io/finance-risk-management/",
      githubUrl: "https://github.com/Neelkore25/finance-risk-management",
      icon: "fa-chart-line"
    },
    {
      id: "smart-todo",
      title: "Smart-Todo Productivity Suite",
      badge: "Productivity Suite",
      description: "An intuitive, feature-packed task management application featuring smart task categorizations, priority matrices, persistent web storage, and seamless workflow organization.",
      tags: ["JavaScript", "Web Storage API", "DOM Architecture", "Productivity Design"],
      liveUrl: "https://neelkore25.github.io/smart-todo/",
      githubUrl: "https://github.com/Neelkore25/smart-todo",
      icon: "fa-list-check"
    },
    {
      id: "scent-atlas",
      title: "The Scent Atlas",
      badge: "Web Application",
      description: "An interactive visual fragrance discovery engine and sensory catalog, allowing users to explore olfactory notes, fragrance families, and detailed scent profiles.",
      tags: ["JavaScript", "Interactive UI", "CSS Animations", "Catalog System"],
      liveUrl: "https://neelkore25.github.io/scent-atlas/",
      githubUrl: "https://github.com/Neelkore25/scent-atlas",
      icon: "fa-compass"
    }
  ],

  /**
   * Certifications list:
   * Edit, add, or remove entries in this array to automatically update the Certifications section grid.
   */
  certifications: [
    {
      id: "cert-npcil",
      title: "Industrial Training — Data Backup & Cybersecurity",
      issuer: "Nuclear Power Corporation of India Limited (NPCIL)",
      date: "Tarapur Site, Maharashtra",
      badge: "Verified NPCIL",
      icon: "fa-shield-halved",
      description: "Practical training certificate covering Commvault, RAID arrays, LTO tape, and air-gapped security infrastructure.",
      credentialUrl: "",
      imageUrl: "assets/images/certificates/npcil_cert.jpg"
    },
    {
      id: "cert-dbms",
      title: "Database Management Systems & SQL",
      issuer: "St. John College of Engineering & Management",
      date: "Academic Coursework",
      badge: "Core Engineering",
      icon: "fa-database",
      description: "Comprehensive coursework in relational database design, SQL querying, indexing, and schema normalization.",
      credentialUrl: "",
      imageUrl: ""
    },
    {
      id: "cert-security",
      title: "Information Security & Networking Fundamentals",
      issuer: "Technical Exposure",
      date: "Verified Domain Skill",
      badge: "Security Focus",
      icon: "fa-network-wired",
      description: "Foundational validation in network security protocols, data protection mechanisms, and system integrity.",
      credentialUrl: "",
      imageUrl: ""
    }
  ],

  /**
   * Documents & Downloads List:
   * Add, edit, or remove document files here. Place actual PDF/DOC files into assets/docs/ folder.
   * To mark a document as the main resume for the Hero button, set isPrimary: true.
   */
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
      description: "Complete technical report on enterprise data backup, Commvault systems, and cybersecurity at NPCIL Tarapur.",
      icon: "fa-file-lines",
      badge: "Training Report",
      filePath: "assets/docs/npcil_training_report.pdf",
      isPrimary: false
    }
  ],

  education: {
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Engineering",
    institution: "St. John College of Engineering and Management",
    location: "Palghar / Thane, Maharashtra",
    duration: "2024 — 2028 (Expected)",
    status: "Currently Pursuing — Year 2",
    coursework: [
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming (OOP)",
      "Software Engineering Principles",
      "Data Structures & Algorithms",
      "Information Security Fundamentals",
      "Web Technologies & Architectures"
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
