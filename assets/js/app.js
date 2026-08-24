/**
 * Neel Kore Personal Developer Portfolio Engine
 * Author: Neel Kore
 * Specification: PDF-Inspired Compact & Balanced Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof portfolioData === 'undefined') {
    console.error('Error: portfolioData is not loaded. Please link data.js prior to app.js');
    return;
  }

  // Theme & Progress
  initTheme();
  setupScrollProgress();

  // Renderers
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

  // Interactive Mechanics
  setupInteractions();
  setupProjectFilters();
  setupScrollReveal();
  setupContactForm();
});

/* --------------------------------------------------------------------------
   0. THEME & SCROLL PROGRESS
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
  icon.className = theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

function setupScrollProgress() {
  const bar = document.getElementById('scrollProgressBar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    bar.style.width = `${progress}%`;
  });
}

/* --------------------------------------------------------------------------
   1. NAVIGATION RENDERER
   -------------------------------------------------------------------------- */
function renderNavigation() {
  const brandEl = document.getElementById('navBrand');
  if (brandEl) brandEl.textContent = portfolioData.personal.logoName;
}

/* --------------------------------------------------------------------------
   2. HERO RENDERER & CONSOLIDATED SOCIAL SYSTEM
   -------------------------------------------------------------------------- */
function renderHero() {
  const nameEl = document.getElementById('heroName');
  const roleEl = document.getElementById('heroRole');
  const statusBadgeEl = document.getElementById('heroStatusBadge');
  const bioEl = document.getElementById('heroBio');
  const portraitInnerEl = document.getElementById('portraitInner');
  const heroSocialGroupEl = document.getElementById('heroSocialGroup');

  if (nameEl) nameEl.textContent = portfolioData.personal.name;
  if (roleEl) roleEl.textContent = portfolioData.personal.role;
  if (statusBadgeEl) {
    statusBadgeEl.innerHTML = `<span class="status-dot"></span>${portfolioData.personal.statusBadge}`;
  }
  if (bioEl) bioEl.textContent = portfolioData.personal.bio;

  if (portraitInnerEl) {
    portraitInnerEl.innerHTML = `
      <img src="${portfolioData.personal.avatar}" alt="${portfolioData.personal.name}" class="portrait-img" id="portraitImg" onerror="handleImageError(this)">
    `;
  }

  // Consolidated Social System
  if (heroSocialGroupEl && portfolioData.socials) {
    heroSocialGroupEl.innerHTML = `
      <a href="${portfolioData.socials.github}" target="_blank" rel="noopener noreferrer" class="social-btn-pill" aria-label="GitHub Profile">
        <i class="fa-brands fa-github"></i> GitHub
      </a>
      <a href="${portfolioData.socials.linkedin}" target="_blank" rel="noopener noreferrer" class="social-btn-pill" aria-label="LinkedIn Profile">
        <i class="fa-brands fa-linkedin-in"></i> LinkedIn
      </a>
      <a href="${portfolioData.socials.instagram}" target="_blank" rel="noopener noreferrer" class="social-btn-pill" aria-label="Instagram Profile">
        <i class="fa-brands fa-instagram"></i> Instagram
      </a>
    `;
  }
}

function handleImageError(imgEl) {
  const parent = imgEl.parentElement;
  if (!parent) return;
  
  if (imgEl.classList.contains('portrait-img')) {
    parent.innerHTML = `
      <div style="padding:20px; text-align:center; color:var(--text-muted);">
        <i class="fa-solid fa-user-astronaut" style="font-size:2.5rem; color:var(--accent-cyan);"></i>
        <div>${portfolioData.personal.name}</div>
      </div>
    `;
  } else if (imgEl.classList.contains('cert-preview-img')) {
    parent.innerHTML = `
      <div style="padding:20px; text-align:center; color:var(--text-subtle);">
        <i class="fa-solid fa-award" style="font-size:1.8rem; color:var(--accent-cyan);"></i>
        <div>Verified Credential</div>
      </div>
    `;
  }
}

/* --------------------------------------------------------------------------
   3. ABOUT SECTION RENDERER
   -------------------------------------------------------------------------- */
function renderAbout() {
  const summaryEl = document.getElementById('aboutSummary');
  const quickInfoEl = document.getElementById('aboutQuickInfo');

  if (summaryEl && portfolioData.about) {
    summaryEl.innerHTML = portfolioData.about.summary.map(p => `<p>${p}</p>`).join('');
  }

  if (quickInfoEl && portfolioData.about) {
    quickInfoEl.innerHTML = portfolioData.about.quickInfo.map(info => `
      <li class="quick-info-item">
        <span class="info-lbl">${info.label}</span>
        <span class="info-val">${info.value}</span>
      </li>
    `).join('');
  }
}

/* --------------------------------------------------------------------------
   4. COMPACT EXPERIENCE RENDERER (SINGLE EXPERIENCE ITEM)
   -------------------------------------------------------------------------- */
function renderExperience() {
  const container = document.getElementById('experienceContainer');
  if (!container || !portfolioData.experience) return;

  const exp = portfolioData.experience[0]; // Real single experience item
  if (!exp) return;

  container.innerHTML = `
    <div class="timeline-single-item">
      <div class="timeline-dot"></div>
      <div class="glass-card timeline-card">
        <span class="exp-date-badge">${exp.duration}</span>
        <h3 class="exp-role">${exp.title}</h3>
        <div class="exp-company"><i class="fa-solid fa-building-columns"></i> ${exp.company} (${exp.location})</div>
        <p class="exp-description">${exp.description}</p>
        
        <ul class="exp-highlights-list">
          ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>

        <div class="exp-tags-wrapper">
          ${exp.skills.map(s => `<span class="tech-tag">${s}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   5. SKILLS SECTION RENDERER
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
            <span class="skill-pill-name">${item.name || item}</span>
            ${item.level ? `<span class="skill-badge-level">${item.level}</span>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   6. BENTO PROJECTS RENDERER & FILTER ENGINE
   -------------------------------------------------------------------------- */
function renderProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid || !portfolioData.projects) return;

  projectsGrid.innerHTML = portfolioData.projects.map(proj => `
    <div class="glass-card project-card" data-category="${proj.category || 'all'}">
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
        <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" title="View Source Code" aria-label="View Source Code">
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
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filterValue = tab.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => { card.style.display = 'none'; }, 200);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   7. CERTIFICATIONS RENDERER
   -------------------------------------------------------------------------- */
function renderCertifications() {
  const certsGrid = document.getElementById('certsGrid');
  if (!certsGrid || !portfolioData.certifications) return;

  certsGrid.innerHTML = portfolioData.certifications.map(cert => {
    const hasImage = cert.imageUrl && cert.imageUrl.trim() !== "";
    const imageHtml = hasImage 
      ? `<img src="${cert.imageUrl}" alt="${cert.title}" class="cert-preview-img" onerror="handleImageError(this)">`
      : `
        <div style="padding:16px; text-align:center; color:var(--text-subtle);">
          <i class="fa-solid ${cert.icon || 'fa-award'}" style="font-size:1.8rem; color:var(--accent-cyan);"></i>
          <div style="font-size:0.78rem; margin-top:4px;">${cert.badge}</div>
        </div>
      `;

    return `
      <div class="glass-card cert-card">
        <div class="cert-preview-box">${imageHtml}</div>
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
   8. DOCUMENTS RENDERER
   -------------------------------------------------------------------------- */
function renderDocuments() {
  const docsGrid = document.getElementById('docsGrid');
  if (!docsGrid || !portfolioData.documents) return;

  docsGrid.innerHTML = portfolioData.documents.map(doc => `
    <div class="glass-card doc-card">
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
   9. EDUCATION RENDERER
   -------------------------------------------------------------------------- */
function renderEducation() {
  const container = document.getElementById('educationContainer');
  if (!container || !portfolioData.education) return;

  const edu = portfolioData.education;
  container.innerHTML = `
    <div class="glass-card edu-card">
      <div class="edu-header-flex">
        <div>
          <h3 class="edu-degree">${edu.degree} in ${edu.branch}</h3>
          <div class="edu-institution"><i class="fa-solid fa-graduation-cap"></i> ${edu.institution}</div>
        </div>
        <span class="exp-date-badge">${edu.duration}</span>
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
   10. CONTACT SECTION & MINIMAL FORM
   -------------------------------------------------------------------------- */
function renderContact() {
  const card = document.getElementById('contactCard');
  if (!card) return;

  card.innerHTML = `
    <h3 class="about-card-title"><i class="fa-solid fa-address-book"></i> Direct Info</h3>
    
    <div class="contact-info-list">
      <div class="contact-info-row">
        <i class="fa-solid fa-envelope info-icon"></i>
        <div>
          <span class="info-lbl">Inbox</span>
          <a href="mailto:${portfolioData.socials.email}" class="info-val" style="text-decoration:none;">${portfolioData.socials.email}</a>
        </div>
      </div>
      
      <div class="contact-info-row">
        <i class="fa-solid fa-location-dot info-icon"></i>
        <div>
          <span class="info-lbl">Location</span>
          <span class="info-val">${portfolioData.personal.location}</span>
        </div>
      </div>

      <div class="contact-info-row">
        <i class="fa-solid fa-user-graduate info-icon"></i>
        <div>
          <span class="info-lbl">Status</span>
          <span class="info-val">B.Tech Computer Engineering</span>
        </div>
      </div>
    </div>
  `;
}

function setupContactForm() {
  const form = document.getElementById('portfolioContactForm');
  const submitBtn = document.getElementById('contactSubmitBtn');
  if (!form || !submitBtn) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const accessKeyEl = document.getElementById('web3formsKey');
    const accessKey = accessKeyEl ? accessKeyEl.value : '';

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;

    if (accessKey === 'YOUR_FREE_ACCESS_KEY' || !accessKey) {
      const mailtoUrl = `mailto:${portfolioData.socials.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      window.location.href = mailtoUrl;
      showToast(`Opening email client to send to ${portfolioData.socials.email}...`);
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...`;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          subject: `Portfolio Message: ${subject}`,
          message: message
        })
      });

      const data = await response.json();
      if (data.success) {
        showToast(`✓ Thank you ${name}! Your message has been sent to Neel's inbox.`);
        form.reset();
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Contact Form Error:', err);
      const mailtoUrl = `mailto:${portfolioData.socials.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      window.location.href = mailtoUrl;
      showToast(`Opening email client to send to ${portfolioData.socials.email}...`);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Send Message`;
    }
  });
}

/* --------------------------------------------------------------------------
   11. FOOTER
   -------------------------------------------------------------------------- */
function renderFooter() {
  const footerContent = document.getElementById('footerContent');
  if (!footerContent) return;

  footerContent.innerHTML = `
    <div class="footer-copy">
      © ${new Date().getFullYear()} ${portfolioData.personal.name}. All rights reserved.
    </div>
    <div class="social-pill-group">
      <a href="${portfolioData.socials.github}" target="_blank" rel="noopener noreferrer" class="social-btn-pill" aria-label="GitHub Profile">
        <i class="fa-brands fa-github"></i> GitHub
      </a>
      <a href="${portfolioData.socials.linkedin}" target="_blank" rel="noopener noreferrer" class="social-btn-pill" aria-label="LinkedIn Profile">
        <i class="fa-brands fa-linkedin-in"></i> LinkedIn
      </a>
      <a href="${portfolioData.socials.instagram}" target="_blank" rel="noopener noreferrer" class="social-btn-pill" aria-label="Instagram Profile">
        <i class="fa-brands fa-instagram"></i> Instagram
      </a>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   12. INTERACTION MECHANICS & REVEAL
   -------------------------------------------------------------------------- */
function setupInteractions() {
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

  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPos = window.scrollY + 140;

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
}

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
      threshold: 0.08,
      rootMargin: '0px 0px -20px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }
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
