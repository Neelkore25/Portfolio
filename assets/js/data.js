/**
 * Neel Kore Developer Portfolio — Single Source of Truth Data File
 * Author: Neel Kore
 * Description: Contains verified real information for Neel Kore's developer portfolio.
 */

const portfolioData = {
  personal: {
    name: "Neel Kore",
    role: "Computer Engineering Student & Developer",
    statusBadge: "Open to Internships & Opportunities",
    bio: "Building practical software, full-stack applications, and secure systems.",
    avatar: "assets/images/profile.jpg",
    location: "Palghar, Maharashtra, India",
    email: "neelkore25@gmail.com"
  },

  about: {
    summary: "I am pursuing a B.Tech in Computer Engineering at St. John College of Engineering and Management. My technical focus centers on software engineering, full-stack web development, database architecture, and cybersecurity resilience.",
    academicCard: {
      degree: "B.Tech Computer Engineering",
      institution: "St. John College of Engineering and Management",
      location: "Palghar, Maharashtra",
      graduation: "Expected May 2028"
    }
  },

  skills: [
    {
      category: "Languages",
      icon: "fa-terminal",
      items: ["C", "C++", "Java", "JavaScript", "SQL"]
    },
    {
      category: "Web Development",
      icon: "fa-laptop-code",
      items: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express"]
    },
    {
      category: "Database & Systems",
      icon: "fa-database",
      items: ["SQL", "PostgreSQL", "DBMS", "Operating Systems"]
    },
    {
      category: "Tools & Environment",
      icon: "fa-gears",
      items: ["Git", "GitHub", "Linux", "VS Code"]
    },
    {
      category: "Security & Resilience",
      icon: "fa-shield-halved",
      items: ["Enterprise Backup", "Cybersecurity", "Computer Networks", "Disaster Recovery"]
    }
  ],

  projects: [
    {
      id: "finance-risk",
      title: "Finance Risk Analytics Platform",
      description: "Interactive web platform for evaluating financial risk indicators, analyzing portfolio exposure, and presenting decision-support analytics.",
      tags: ["JavaScript", "HTML5/CSS3", "Financial Analytics", "Data Visualization"],
      liveUrl: "https://neelkore25.github.io/finance-risk-management/",
      githubUrl: "https://github.com/Neelkore25/finance-risk-management",
      icon: "fa-chart-line"
    },
    {
      id: "smart-todo",
      title: "Smart-Todo Productivity Suite",
      description: "Streamlined task management suite featuring smart task categories, priority tracking, persistent storage, and clean workflow tools.",
      tags: ["JavaScript", "Web Storage API", "DOM Architecture", "Productivity UI"],
      liveUrl: "https://neelkore25.github.io/smart-todo/",
      githubUrl: "https://github.com/Neelkore25/smart-todo",
      icon: "fa-list-check"
    },
    {
      id: "scent-atlas",
      title: "The Scent Atlas",
      description: "Interactive fragrance discovery catalog allowing users to explore scent notes, fragrance families, and detailed sensory profiles.",
      tags: ["JavaScript", "Interactive UI", "CSS Animations", "Catalog Architecture"],
      liveUrl: "https://neelkore25.github.io/scent-atlas/",
      githubUrl: "https://github.com/Neelkore25/scent-atlas",
      icon: "fa-compass"
    },
    {
      id: "npcil-security",
      title: "Enterprise Data Resilience Study",
      description: "Technical analysis of enterprise data backup systems, air-gapped network security, and disaster recovery implemented at NPCIL Tarapur.",
      tags: ["Cybersecurity", "Disaster Recovery", "Air-Gapped Security", "Data Backup"],
      liveUrl: "assets/docs/npcil_training_report.pdf",
      githubUrl: "https://github.com/Neelkore25",
      icon: "fa-shield-halved",
      reportLabel: "View Report"
    }
  ],

  experience: [
    {
      role: "Vocational Trainee – Data Storage, Backup & Cybersecurity Systems",
      organization: "Nuclear Power Corporation of India Limited (NPCIL) – Tarapur Atomic Power Station",
      location: "",
      duration: "May 2026",
      documentUrl: "assets/docs/npcil_training_report.pdf",
      highlights: [
        "Completed vocational training in data storage, backup, and disaster recovery management systems at Tarapur Atomic Power Station, NPCIL, under the guidance of the plant’s IT & Communications department.",
        "Studied RAID architectures (RAID 0/1/5/10), enterprise backup strategies (full, incremental, differential, and hybrid), Commvault backup architecture including CommServe, Media Agents, and Deduplication Database, LTO tape storage systems, and disaster recovery planning based on RTO/RPO and the 3-2-1 backup rule.",
        "Also studied enterprise cybersecurity through the Defense-in-Depth model, including firewalls, IDS/IPS, SIEM/SOAR systems, and air-gapped network design used to protect critical infrastructure such as nuclear facilities."
      ],
      technologies: [
        "Data Backup",
        "Disaster Recovery",
        "RAID",
        "Commvault",
        "Network Security",
        "Cybersecurity Fundamentals"
      ]
    }
  ],

  certifications: [
    {
      id: "cert-npcil",
      title: "Industrial Training — Enterprise Data Backup & Cybersecurity",
      issuer: "Nuclear Power Corporation of India Limited (NPCIL)",
      date: "Tarapur Site, Maharashtra",
      documentUrl: "assets/docs/npcil_training_report.pdf",
      icon: "fa-shield-halved"
    }
  ],

  education: {
    degree: "B.Tech in Computer Engineering",
    institution: "St. John College of Engineering and Management",
    location: "Palghar, Maharashtra",
    duration: "Expected May 2028",
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
    email: "neelkore25@gmail.com",
    resume: "assets/docs/resume.pdf"
  }
};

if (typeof window !== 'undefined') {
  window.portfolioData = portfolioData;
}
