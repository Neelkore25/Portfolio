/**
 * Neel Kore Personal Developer Portfolio Engine
 * Author: Neel Kore
 * Specification: Lightweight Vanilla JavaScript Rendering Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof portfolioData === 'undefined') {
    console.error('Error: portfolioData is not loaded. Please link data.js prior to app.js');
    return;
  }

  // Renderers
  renderNavigation();
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderExperience();
  renderCertifications();
  renderEducation();
  renderFooter();

  // Mechanics
  setupMobileNav();
  setupScrollReveal();
  setupActiveNavHighlight();
});

/* --------------------------------------------------------------------------
   1. NAVIGATION
   -------------------------------------------------------------------------- */
function renderNavigation() {
  const brandEl = document.getElementById('navBrand');
  if (brandEl && portfolioData.personal) {
    brandEl.textContent = portfolioData.personal.name;
  }
}

function setupMobileNav() {
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

function setupActiveNavHighlight() {
  const navLinks = document.getElementById('navLinks');
  const sections = document.querySelectorAll('section[id]');
  if (!navLinks || sections.length === 0) return;

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.classList.remove('active');
      if (currentSectionId && link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   2. HERO
   -------------------------------------------------------------------------- */
function renderHero() {
  const nameEl = document.getElementById('heroName');
  const roleEl = document.getElementById('heroRole');
  const statusBadgeEl = document.getElementById('heroStatusBadge');
  const bioEl = document.getElementById('heroBio');
  const portraitInnerEl = document.getElementById('portraitInner');

  if (nameEl) nameEl.textContent = portfolioData.personal.name;
  if (roleEl) roleEl.textContent = portfolioData.personal.role;
  if (statusBadgeEl) {
    statusBadgeEl.innerHTML = `<span class="status-dot"></span>${portfolioData.personal.statusBadge}`;
  }
  if (bioEl) bioEl.textContent = portfolioData.personal.bio;

  if (portraitInnerEl) {
    portraitInnerEl.innerHTML = `
      <img src="${portfolioData.personal.avatar}" alt="${portfolioData.personal.name}" class="portrait-img">
    `;
  }
}

/* --------------------------------------------------------------------------
   3. ABOUT
   -------------------------------------------------------------------------- */
function renderAbout() {
  const summaryEl = document.getElementById('aboutSummary');
  const quickInfoEl = document.getElementById('aboutQuickInfo');

  if (summaryEl && portfolioData.about) {
    summaryEl.textContent = portfolioData.about.summary;
  }

  if (quickInfoEl && portfolioData.about && portfolioData.about.academicCard) {
    const info = portfolioData.about.academicCard;
    quickInfoEl.innerHTML = `
      <li class="quick-info-item"><span class="info-lbl">Degree</span><span class="info-val">${info.degree}</span></li>
      <li class="quick-info-item"><span class="info-lbl">College</span><span class="info-val">${info.institution}</span></li>
      <li class="quick-info-item"><span class="info-lbl">Location</span><span class="info-val">${info.location}</span></li>
      <li class="quick-info-item"><span class="info-lbl">Graduation</span><span class="info-val">${info.graduation}</span></li>
    `;
  }
}

/* --------------------------------------------------------------------------
   4. SKILLS
   -------------------------------------------------------------------------- */
function renderSkills() {
  const skillsGrid = document.getElementById('skillsGrid');
  if (!skillsGrid || !portfolioData.skills) return;

  skillsGrid.innerHTML = portfolioData.skills.map(group => `
    <div class="glass-card skill-card">
      <div class="skill-card-header">
        <i class="fa-solid ${group.icon}"></i>
        <h3>${group.category}</h3>
      </div>
      <div class="skill-tags-flex">
        ${group.items.map(item => `
          <div class="skill-pill-box">
            <span class="skill-pill-name">${item}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   5. FEATURED PROJECTS
   -------------------------------------------------------------------------- */
function renderProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid || !portfolioData.projects) return;

  projectsGrid.innerHTML = portfolioData.projects.map(proj => {
    const hasLive = proj.liveUrl && proj.liveUrl.trim() !== '';
    const hasGithub = proj.githubUrl && proj.githubUrl.trim() !== '';

    let liveBtnText = proj.reportLabel || 'Live Demo';
    let liveBtnIcon = proj.reportLabel ? 'fa-file-lines' : 'fa-arrow-up-right-from-square';

    return `
      <div class="glass-card project-card">
        <div class="project-top">
          <div class="project-icon-box">
            <i class="fa-solid ${proj.icon}"></i>
          </div>
        </div>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
        
        <div class="project-tags">
          ${proj.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        <div class="project-actions">
          ${hasGithub ? `
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
              <i class="fa-brands fa-github"></i> GitHub →
            </a>
          ` : ''}
          ${hasLive ? `
            <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              <i class="fa-solid ${liveBtnIcon}"></i> ${liveBtnText} →
            </a>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

/* --------------------------------------------------------------------------
   6. EXPERIENCE
   -------------------------------------------------------------------------- */
function renderExperience() {
  const container = document.getElementById('experienceContainer');
  if (!container || !portfolioData.experience || portfolioData.experience.length === 0) return;

  const exp = portfolioData.experience[0];

  container.innerHTML = `
    <div class="glass-card timeline-card">
      <span class="exp-date-badge">${exp.duration}</span>
      <h3 class="exp-role">${exp.role}</h3>
      <div class="exp-company"><i class="fa-solid fa-building-columns"></i> ${exp.organization} (${exp.location})</div>
      
      <ul class="exp-highlights-list">
        ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>

      <div class="exp-tags-wrapper">
        ${exp.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   7. CERTIFICATIONS
   -------------------------------------------------------------------------- */
function renderCertifications() {
  const certsGrid = document.getElementById('certsGrid');
  if (!certsGrid || !portfolioData.certifications) return;

  certsGrid.innerHTML = portfolioData.certifications.map(cert => `
    <div class="glass-card cert-card">
      <div class="cert-info-flex">
        <div class="cert-icon-box">
          <i class="fa-solid ${cert.icon || 'fa-award'}"></i>
        </div>
        <div>
          <h3 class="cert-title">${cert.title}</h3>
          <div class="cert-issuer">${cert.issuer} · ${cert.date}</div>
        </div>
      </div>
      ${cert.documentUrl ? `
        <a href="${cert.documentUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <i class="fa-solid fa-file-pdf"></i> View Credential →
        </a>
      ` : ''}
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   8. EDUCATION
   -------------------------------------------------------------------------- */
function renderEducation() {
  const container = document.getElementById('educationContainer');
  if (!container || !portfolioData.education) return;

  const edu = portfolioData.education;
  container.innerHTML = `
    <div class="glass-card edu-card">
      <div class="edu-header-flex">
        <div>
          <h3 class="edu-degree">${edu.degree}</h3>
          <div class="edu-institution"><i class="fa-solid fa-graduation-cap"></i> ${edu.institution}</div>
        </div>
        <span class="exp-date-badge">${edu.duration}</span>
      </div>

      <div class="coursework-title">Relevant Computer Engineering Coursework</div>
      <div class="coursework-grid">
        ${edu.coursework.map(course => `<div class="course-item">${course}</div>`).join('')}
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   9. FOOTER
   -------------------------------------------------------------------------- */
function renderFooter() {
  const footerContent = document.getElementById('footerContent');
  if (!footerContent || !portfolioData.socials) return;

  footerContent.innerHTML = `
    <div class="footer-copy">
      © ${new Date().getFullYear()} ${portfolioData.personal.name}. All rights reserved.
    </div>
    <div class="footer-links">
      <a href="${portfolioData.socials.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="${portfolioData.socials.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="mailto:${portfolioData.socials.email}">Email</a>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   10. SCROLL REVEAL (INTERSECTION OBSERVER)
   -------------------------------------------------------------------------- */
function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -10px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }
}
