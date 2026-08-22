/**
 * Portfolio Dynamic Rendering & Interactive Application Engine
 * Author: Neel Kore
 * Description: Reads single-source portfolioData object and dynamically populates
 * all portfolio sections. Manages scroll-reveal animations, spotlight cursor tracking,
 * email clipboard toast, document downloads, image fallbacks, and mobile drawer toggles.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure portfolioData is loaded
  if (typeof portfolioData === 'undefined') {
    console.error('Error: portfolioData is not loaded. Please ensure assets/js/data.js is linked prior to app.js');
    return;
  }

  // Execute Section Renderers
  renderNavigation();
  renderHero();
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
  setupScrollReveal();
  setupCardSpotlight();
});

/* --------------------------------------------------------------------------
   1. NAVIGATION RENDERER
   -------------------------------------------------------------------------- */
function renderNavigation() {
  const brandEl = document.getElementById('navBrand');
  const navCtaEl = document.getElementById('navCta');
  
  if (brandEl) {
    brandEl.innerHTML = `${portfolioData.personal.logoName}<span>.</span>`;
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

  if (nameEl) nameEl.textContent = portfolioData.personal.name;
  if (roleEl) {
    roleEl.innerHTML = `<span>${portfolioData.personal.role} | ${portfolioData.personal.subRole}</span><span class="cursor-blink"></span>`;
  }
  if (bioEl) bioEl.textContent = portfolioData.personal.bio;

  if (ctaGroupEl) {
    ctaGroupEl.innerHTML = `
      <a href="#projects" class="btn btn-primary">
        <i class="fa-solid fa-arrow-down"></i> View Projects
      </a>
      <a href="${portfolioData.socials.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
        <i class="fa-brands fa-github"></i> GitHub
      </a>
      <a href="#documents" class="btn btn-secondary">
        <i class="fa-solid fa-file-arrow-down"></i> Documents & Resume
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

/**
 * Image Fallback Handler for profile photo or certificates
 */
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
   3. ABOUT SECTION RENDERER
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
   4. EXPERIENCE SECTION RENDERER
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
   5. SKILLS SECTION RENDERER
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
        ${group.items.map(item => `<span class="skill-pill">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   6. FEATURED PROJECTS RENDERER
   -------------------------------------------------------------------------- */
function renderProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;

  projectsGrid.innerHTML = portfolioData.projects.map(proj => `
    <div class="glass-card project-card reveal">
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
          <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
        </a>
        <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-icon" title="View Source Code">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   7. CERTIFICATIONS SECTION RENDERER
   -------------------------------------------------------------------------- */
function renderCertifications() {
  const certsGrid = document.getElementById('certsGrid');
  if (!certsGrid) return;

  if (!portfolioData.certifications || portfolioData.certifications.length === 0) {
    certsGrid.innerHTML = `
      <div class="glass-card" style="padding: 32px; grid-column: 1 / -1; text-align: center; color: var(--text-muted);">
        No certifications listed yet. Edit portfolioData.certifications in assets/js/data.js.
      </div>
    `;
    return;
  }

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
   8. DOCUMENTS & DOWNLOADS SECTION RENDERER
   -------------------------------------------------------------------------- */
function renderDocuments() {
  const docsGrid = document.getElementById('docsGrid');
  if (!docsGrid) return;

  if (!portfolioData.documents || portfolioData.documents.length === 0) {
    docsGrid.innerHTML = `
      <div class="glass-card" style="padding: 32px; grid-column: 1 / -1; text-align: center; color: var(--text-muted);">
        No documents listed. Add items to portfolioData.documents in assets/js/data.js.
      </div>
    `;
    return;
  }

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

  // Attach safe click handler to document download buttons to prevent raw 404 pages
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
   9. EDUCATION SECTION RENDERER
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
   10. CONTACT SECTION RENDERER
   -------------------------------------------------------------------------- */
function renderContact() {
  const contactCard = document.getElementById('contactCard');
  if (!contactCard) return;

  contactCard.innerHTML = `
    <h2 class="contact-title">Let's Build Together</h2>
    <p class="contact-text">
      I am open to software engineering internships, technical collaborations, and exploring full-stack & cybersecurity opportunities.
    </p>
    <div class="contact-buttons-row">
      <button class="btn btn-primary copy-email-btn" id="copyEmailBtn">
        <i class="fa-solid fa-copy"></i> Copy Email
      </button>
      <a href="mailto:${portfolioData.socials.email}" class="btn btn-secondary">
        <i class="fa-solid fa-envelope"></i> Send Email
      </a>
      <a href="${portfolioData.socials.linkedin}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-icon" title="LinkedIn Profile">
        <i class="fa-brands fa-linkedin-in"></i>
      </a>
      <a href="${portfolioData.socials.instagram}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-icon" title="Instagram Profile">
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a href="${portfolioData.socials.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-icon" title="GitHub Profile">
        <i class="fa-brands fa-github"></i>
      </a>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   11. FOOTER RENDERER
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
   12. INTERACTIVE ENGINE & EVENTS
   -------------------------------------------------------------------------- */
function setupInteractions() {
  // Mobile Nav Drawer Toggle
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

    // Close menu when link clicked
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

  // Active Navigation Scroll-Spy
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

  // Email Clipboard Copy Functionality
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
   13. SCROLL REVEAL ANIMATION ENGINE (INTERSECTION OBSERVER)
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
   14. GLASS CARD SPOTLIGHT MOUSE TRACKING
   -------------------------------------------------------------------------- */
function setupCardSpotlight() {
  document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.glass-card').forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
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
