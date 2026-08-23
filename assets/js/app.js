/**
 * Portfolio Dynamic Rendering & Interactive Application Engine
 * Author: Neel Kore
 * Description: Reads single-source portfolioData object and dynamically populates
 * all portfolio sections. Manages theme toggle, animated count-up stats, category filter tabs,
 * scroll-reveal animations, ultra-fast Apple glass cursor ring, email clipboard toast,
 * document downloads, image fallbacks, and mobile drawer toggles.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure portfolioData is loaded
  if (typeof portfolioData === 'undefined') {
    console.error('Error: portfolioData is not loaded. Please ensure assets/js/data.js is linked prior to app.js');
    return;
  }

  // Initialize Theme (Dark/Light mode)
  initTheme();

  // Execute Section Renderers
  renderNavigation();
  renderHero();
  renderStats();
  renderAbout();
  renderExperience();
  renderSkills();
  renderProjects();
  renderCertifications();
  renderDocuments();
  renderEducation();
  renderContact();
  renderFooter();

  // Initialize Interactive Engine & Animations
  setupInteractions();
  setupProjectFilters();
  setupScrollReveal();
  setupStatsCounter();
  setupCustomCursor();
  setupContactForm();
});

/* --------------------------------------------------------------------------
   0. THEME TOGGLE ENGINE (LIGHT / DARK MODE)
   -------------------------------------------------------------------------- */
function initTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme.toUpperCase()} theme`);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#themeToggleBtn i');
  if (!icon) return;
  if (theme === 'light') {
    icon.className = 'fa-solid fa-sun';
  } else {
    icon.className = 'fa-solid fa-moon';
  }
}

/* --------------------------------------------------------------------------
   1. NAVIGATION RENDERER
   -------------------------------------------------------------------------- */
function renderNavigation() {
  const brandEl = document.getElementById('navBrand');
  const navCtaEl = document.getElementById('navCta');
  
  if (brandEl) {
    brandEl.textContent = portfolioData.personal.logoName;
  }
  if (navCtaEl) {
    navCtaEl.href = portfolioData.socials.github;
  }
}

/* --------------------------------------------------------------------------
   2. HERO SECTION RENDERER
   -------------------------------------------------------------------------- */
function renderHero() {
  const statusBadgeEl = document.getElementById('heroStatusBadge');
  const nameEl = document.getElementById('heroName');
  const roleEl = document.getElementById('heroRole');
  const bioEl = document.getElementById('heroBio');
  const ctaGroupEl = document.getElementById('heroCtas');
  const portraitInnerEl = document.getElementById('portraitInner');

  if (statusBadgeEl) {
    statusBadgeEl.innerHTML = `<span class="status-dot"></span>${portfolioData.personal.statusBadge}`;
  }

  if (roleEl) {
    roleEl.innerHTML = `<span>${portfolioData.personal.role} | ${portfolioData.personal.subRole}</span><span class="cursor-blink"></span>`;
  }
  if (bioEl) bioEl.textContent = portfolioData.personal.bio;

  if (ctaGroupEl) {
    ctaGroupEl.innerHTML = `
      <a href="#documents" class="btn btn-primary">
        <i class="fa-solid fa-file-arrow-down"></i> Download Resume
      </a>
      <a href="#contact" class="btn btn-secondary">
        <i class="fa-solid fa-envelope"></i> Contact Me
      </a>
      <a href="${portfolioData.socials.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-icon" title="GitHub Profile">
        <i class="fa-brands fa-github"></i>
      </a>
    `;
  }

  if (portraitInnerEl) {
    const avatarSrc = portfolioData.personal.avatar;
    portraitInnerEl.innerHTML = `
      <img src="${avatarSrc}" alt="${portfolioData.personal.name}" class="portrait-img" id="portraitImg" onerror="handleImageError(this)">
    `;
  }
}

function handleImageError(imgEl) {
  const parent = imgEl.parentElement;
  if (!parent) return;
  
  if (imgEl.classList.contains('portrait-img')) {
    parent.innerHTML = `
      <div class="portrait-fallback">
        <i class="fa-solid fa-user-astronaut"></i>
        <span>${portfolioData.personal.name}</span>
        <span class="portrait-status-sub">Photo Pending Upload</span>
      </div>
    `;
  } else if (imgEl.classList.contains('cert-preview-img')) {
    parent.innerHTML = `
      <div class="cert-preview-placeholder">
        <i class="fa-solid fa-award"></i>
        <span>Verified Credential</span>
      </div>
    `;
  }
}

/* --------------------------------------------------------------------------
   3. ANIMATED STATS ROW RENDERER & COUNTER ENGINE
   -------------------------------------------------------------------------- */
function renderStats() {
  const statsGrid = document.getElementById('statsGrid');
  if (!statsGrid || !portfolioData.stats) return;

  statsGrid.innerHTML = portfolioData.stats.map(stat => `
    <div class="stat-card glass-card">
      <div class="stat-number-wrapper">
        <span class="stat-number" data-target="${stat.number}">0</span>
        <span class="stat-suffix">${stat.suffix}</span>
      </div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');
}

function setupStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length === 0) return;

  let counted = false;

  const countUp = () => {
    statNumbers.forEach(num => {
      const target = parseInt(num.getAttribute('data-target'), 10);
      const duration = 1600;
      const step = Math.ceil(target / (duration / 30));
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          num.textContent = target;
          clearInterval(timer);
        } else {
          num.textContent = current;
        }
      }, 30);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        countUp();
        counted = true;
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.getElementById('stats');
  if (statsSection) observer.observe(statsSection);
}

/* --------------------------------------------------------------------------
   4. ABOUT SECTION RENDERER
   -------------------------------------------------------------------------- */
function renderAbout() {
  const summaryEl = document.getElementById('aboutSummary');
  const focusGridEl = document.getElementById('aboutFocusGrid');
  const quickInfoEl = document.getElementById('aboutQuickInfo');

  if (summaryEl) {
    summaryEl.innerHTML = portfolioData.about.summary.map(paragraph => `<p>${paragraph}</p>`).join('');
  }

  if (focusGridEl) {
    focusGridEl.innerHTML = portfolioData.about.coreFocus.map(item => `
      <div class="focus-item">
        <div class="focus-header">
          <i class="fa-solid ${item.icon}"></i>
          <h4>${item.title}</h4>
        </div>
        <p>${item.description}</p>
      </div>
    `).join('');
  }

  if (quickInfoEl) {
    quickInfoEl.innerHTML = portfolioData.about.quickInfo.map(info => `
      <li class="quick-info-item">
        <span class="info-lbl">${info.label}</span>
        <span class="info-val">${info.value}</span>
      </li>
    `).join('');
  }
}

/* --------------------------------------------------------------------------
   5. EXPERIENCE SECTION RENDERER
   -------------------------------------------------------------------------- */
function renderExperience() {
  const expContainer = document.getElementById('experienceContainer');
  if (!expContainer) return;

  expContainer.innerHTML = portfolioData.experience.map(exp => `
    <div class="glass-card exp-card reveal">
      <div class="exp-header">
        <div>
          <h3 class="exp-role">${exp.title}</h3>
          <div class="exp-company">${exp.company}</div>
        </div>
        <div class="exp-badge-group">
          <span class="exp-pill">${exp.duration}</span>
          <span class="exp-location"><i class="fa-solid fa-location-dot"></i> ${exp.location}</span>
        </div>
      </div>
      <div class="exp-project-name">
        <i class="fa-solid fa-folder-open"></i> ${exp.projectTitle}
      </div>
      <p class="exp-description">${exp.description}</p>

      <div class="exp-highlights-title">Key Engineering Highlights & Learnings</div>
      <ul class="exp-highlights-list">
        ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>

      <div class="exp-tags-wrapper">
        ${exp.skills.map(skill => `<span class="tech-tag">${skill}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   6. SKILLS SECTION RENDERER (WITH PROFICIENCY LEVEL BADGES)
   -------------------------------------------------------------------------- */
function renderSkills() {
  const skillsGrid = document.getElementById('skillsGrid');
  if (!skillsGrid) return;

  skillsGrid.innerHTML = portfolioData.skills.map(group => `
    <div class="glass-card skill-card reveal">
      <div class="skill-card-header">
        <i class="fa-solid ${group.icon}"></i>
        <h3>${group.category}</h3>
      </div>
      <div class="skill-tags-flex">
        ${group.items.map(item => `
          <div class="skill-pill-box">
            <span class="skill-pill-name">${item.name || item}</span>
            ${item.level ? `<span class="skill-badge-level">${item.level}</span>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   7. FEATURED PROJECTS RENDERER & INTERACTIVE CATEGORY FILTERING
   -------------------------------------------------------------------------- */
function renderProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;

  projectsGrid.innerHTML = portfolioData.projects.map(proj => `
    <div class="glass-card project-card reveal" data-category="${proj.category || 'all'}">
      <div class="project-top">
        <div class="project-icon-box">
          <i class="fa-solid ${proj.icon}"></i>
        </div>
        <span class="project-badge">${proj.badge}</span>
      </div>
      <h3 class="project-title">${proj.title}</h3>
      <p class="project-desc">${proj.description}</p>
      
      <div class="project-tags">
        ${proj.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>

      <div class="project-actions">
        <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> View Project
        </a>
        <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-icon" title="View Source Code">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  `).join('');
}

function setupProjectFilters() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterTabs.length === 0) return;

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   8. CERTIFICATIONS SECTION RENDERER
   -------------------------------------------------------------------------- */
function renderCertifications() {
  const certsGrid = document.getElementById('certsGrid');
  if (!certsGrid) return;

  certsGrid.innerHTML = portfolioData.certifications.map(cert => {
    const hasImage = cert.imageUrl && cert.imageUrl.trim() !== "";
    const imageHtml = hasImage 
      ? `<img src="${cert.imageUrl}" alt="${cert.title}" class="cert-preview-img" onerror="handleImageError(this)">`
      : `
        <div class="cert-preview-placeholder">
          <i class="fa-solid ${cert.icon || 'fa-award'}"></i>
          <span>${cert.badge}</span>
        </div>
      `;

    return `
      <div class="glass-card cert-card reveal">
        <div class="cert-preview-box">
          ${imageHtml}
        </div>
        <span class="cert-badge">${cert.badge}</span>
        <h3 class="cert-title">${cert.title}</h3>
        <div class="cert-issuer"><i class="fa-solid fa-building-columns"></i> ${cert.issuer}</div>
        <div class="cert-date">${cert.date}</div>
        <p class="cert-desc">${cert.description}</p>
      </div>
    `;
  }).join('');
}

/* --------------------------------------------------------------------------
   9. DOCUMENTS SECTION RENDERER
   -------------------------------------------------------------------------- */
function renderDocuments() {
  const docsGrid = document.getElementById('docsGrid');
  if (!docsGrid) return;

  docsGrid.innerHTML = portfolioData.documents.map(doc => `
    <div class="glass-card doc-card reveal">
      <div class="doc-top">
        <div class="doc-icon-box">
          <i class="fa-solid ${doc.icon || 'fa-file-pdf'}"></i>
        </div>
        <span class="doc-badge">${doc.badge}</span>
      </div>
      <h3 class="doc-title">${doc.title}</h3>
      <p class="doc-desc">${doc.description}</p>
      
      <div class="doc-action">
        <a href="${doc.filePath}" target="_blank" class="btn btn-secondary doc-download-btn" data-filepath="${doc.filePath}" data-doctitle="${doc.title}">
          <i class="fa-solid fa-download"></i> View / Download Document
        </a>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.doc-download-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const path = btn.getAttribute('data-filepath');
      const title = btn.getAttribute('data-doctitle');
      
      fetch(path, { method: 'HEAD' })
        .then(res => {
          if (!res.ok) {
            e.preventDefault();
            showToast(`ℹ️ "${title}" will be available once uploaded to ${path}`);
          }
        })
        .catch(() => {
          e.preventDefault();
          showToast(`ℹ️ "${title}" will be available once uploaded to ${path}`);
        });
    });
  });
}

/* --------------------------------------------------------------------------
   10. EDUCATION SECTION RENDERER
   -------------------------------------------------------------------------- */
function renderEducation() {
  const eduContainer = document.getElementById('educationContainer');
  if (!eduContainer) return;

  const edu = portfolioData.education;
  eduContainer.innerHTML = `
    <div class="glass-card edu-card reveal">
      <div class="edu-header-flex">
        <div>
          <h3 class="edu-degree">${edu.degree} in ${edu.branch}</h3>
          <div class="edu-institution"><i class="fa-solid fa-graduation-cap"></i> ${edu.institution}</div>
        </div>
        <span class="exp-pill">${edu.duration}</span>
      </div>

      <div class="edu-meta-tags">
        <div class="edu-meta-pill">Location: <strong>${edu.location}</strong></div>
      </div>

      <div class="coursework-title">Key Computer Engineering Coursework</div>
      <div class="coursework-grid">
        ${edu.coursework.map(course => `<div class="course-item">${course}</div>`).join('')}
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   11. CONTACT SECTION RENDERER & FORM HANDLING
   -------------------------------------------------------------------------- */
function renderContact() {
  const contactCard = document.getElementById('contactCard');
  if (!contactCard) return;

  contactCard.innerHTML = `
    <h3 class="contact-card-heading"><i class="fa-solid fa-address-book"></i> Direct Contact Info</h3>
    
    <div class="contact-info-list">
      <div class="contact-info-row">
        <i class="fa-solid fa-envelope info-icon"></i>
        <div>
          <span class="info-label">Email Address</span>
          <a href="mailto:${portfolioData.socials.email}" class="info-value">${portfolioData.socials.email}</a>
        </div>
      </div>
      
      <div class="contact-info-row">
        <i class="fa-solid fa-location-dot info-icon"></i>
        <div>
          <span class="info-label">Location</span>
          <span class="info-value">${portfolioData.personal.location}</span>
        </div>
      </div>

      <div class="contact-info-row">
        <i class="fa-solid fa-user-graduate info-label"></i>
        <div>
          <span class="info-label">Status</span>
          <span class="info-value">B.Tech Computer Engineering Student</span>
        </div>
      </div>
    </div>

    <div class="contact-social-row">
      <button class="btn btn-primary copy-email-btn" id="copyEmailBtn">
        <i class="fa-solid fa-copy"></i> Copy Email
      </button>
      <a href="${portfolioData.socials.linkedin}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-icon" title="LinkedIn Profile">
        <i class="fa-brands fa-linkedin-in"></i>
      </a>
      <a href="${portfolioData.socials.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-icon" title="GitHub Profile">
        <i class="fa-brands fa-github"></i>
      </a>
      <a href="${portfolioData.socials.instagram}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-icon" title="Instagram Profile">
        <i class="fa-brands fa-instagram"></i>
      </a>
    </div>
  `;
}

function setupContactForm() {
  const form = document.getElementById('portfolioContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    showToast(`✓ Thank you ${name}! Your message has been prepared.`);
    form.reset();
  });
}

/* --------------------------------------------------------------------------
   12. FOOTER RENDERER
   -------------------------------------------------------------------------- */
function renderFooter() {
  const footerContent = document.getElementById('footerContent');
  if (!footerContent) return;

  footerContent.innerHTML = `
    <div class="footer-copy">
      © ${new Date().getFullYear()} ${portfolioData.personal.name}. All rights reserved.
    </div>
    <div class="footer-socials">
      <a href="${portfolioData.socials.github}" target="_blank" rel="noopener noreferrer" title="GitHub"><i class="fa-brands fa-github"></i></a>
      <a href="${portfolioData.socials.linkedin}" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
      <a href="${portfolioData.socials.instagram}" target="_blank" rel="noopener noreferrer" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
      <a href="mailto:${portfolioData.socials.email}" title="Email"><i class="fa-solid fa-envelope"></i></a>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   13. INTERACTIVE ENGINE & EVENTS
   -------------------------------------------------------------------------- */
function setupInteractions() {
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPos = window.scrollY + 180;

    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    if (navLinks) {
      navLinks.querySelectorAll('a').forEach(link => {
        link.classList.remove('active');
        if (currentSectionId && link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  const copyBtn = document.getElementById('copyEmailBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(portfolioData.socials.email)
        .then(() => {
          showToast('✓ Email address copied to clipboard!');
        })
        .catch(err => {
          console.error('Failed to copy email:', err);
          showToast(`Email: ${portfolioData.socials.email}`);
        });
    });
  }
}

/* --------------------------------------------------------------------------
   14. SCROLL REVEAL ANIMATION ENGINE (INTERSECTION OBSERVER)
   -------------------------------------------------------------------------- */
function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, section.section-padding');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }
}

/* --------------------------------------------------------------------------
   15. ULTRA-FAST APPLE GLASS MOUSE CURSOR RING ENGINE
   -------------------------------------------------------------------------- */
function setupCustomCursor() {
  if (window.innerWidth <= 768) return;

  let cursor = document.getElementById('cursorRing');
  if (!cursor) {
    cursor = document.createElement('div');
    cursor.id = 'cursorRing';
    cursor.className = 'cursor-ring';
    document.body.appendChild(cursor);
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
  document.addEventListener('mouseup', () => cursor.classList.remove('clicking'));

  const hoverables = 'a, button, .glass-card, .btn, .tech-tag, .skill-pill-box, .focus-item, .filter-tab';
  document.querySelectorAll(hoverables).forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.85;
    cursorY += (mouseY - cursorY) * 0.85;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);
}

function showToast(message) {
  const toastNotification = document.getElementById('toastNotification');
  if (!toastNotification) return;
  toastNotification.textContent = message;
  toastNotification.classList.add('show');
  setTimeout(() => {
    toastNotification.classList.remove('show');
  }, 4000);
}
