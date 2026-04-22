/**
 * Portfolio Application Controller
 * ─────────────────────────────────
 * Renders all dynamic content from PORTFOLIO_DATA (data.js)
 * and manages UI interactions.
 */
(function () {
  "use strict";

  const D = PORTFOLIO_DATA;

  /* ═══════════════════════════════════════════
     RENDERERS — Build HTML from data
     ═══════════════════════════════════════════ */

  /** Render skill cards into the grid */
  function renderSkills() {
    const grid = document.getElementById("skills-grid");
    if (!grid) return;

    grid.innerHTML = D.skills
      .map(
        (s) => `
      <div class="skill-card" data-category="${s.category}" data-visible="true">
        <div class="skill-icon-wrapper bg-gradient-to-br ${s.gradient}">
          ${
            s.imgSrc
              ? `<img src="${s.imgSrc}" alt="${s.name}" style="width:28px;height:28px;" />`
              : s.isFA
              ? `<i class="${s.icon}" style="color:white;font-size:1.5rem;"></i>`
              : `<i class="${s.icon}" style="color:white;font-size:1.5rem;"></i>`
          }
        </div>
        <div class="skill-name">${s.name}</div>
      </div>`
      )
      .join("");
  }

  /** Render skill category filter buttons */
  function renderSkillCategories() {
    const container = document.getElementById("skills-categories");
    if (!container) return;

    container.innerHTML = D.skillCategories
      .map(
        (c, i) => `
      <button class="skills-category-btn${i === 0 ? " active" : ""}"
              data-filter="${c.id}">${c.label}</button>`
      )
      .join("");
  }

  /** Render project cards */
  function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    grid.innerHTML = D.projects
      .map(
        (p, idx) => `
      <div class="project-card">
        <div class="project-thumbnail">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
          <div class="project-overlay"></div>
          <span class="project-badge" style="background:${p.badge.color}cc;">${p.badge.text}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc" id="pdesc-${idx}">${p.description}</p>
          <button class="read-more-btn" onclick="window.__toggleDesc('pdesc-${idx}', this)">Read more</button>
          <div class="project-tags">
            ${p.tags.map((t) => `<span class="project-tag bg-gradient-to-r ${t.gradient}">${t.label}</span>`).join("")}
          </div>
          <div class="project-actions">
            ${p.code ? `<a href="${p.code}" target="_blank" class="btn-project btn-project--outline"><i class="fab fa-github"></i> Code</a>` : ""}
          </div>
        </div>
      </div>`
      )
      .join("");
  }

  /** Render certificate filter buttons */
  function renderCertificateFilters() {
    const bar = document.getElementById("cert-filter-bar");
    if (!bar) return;

    bar.innerHTML = D.certificateCategories
      .map(
        (c, i) => `
      <button class="filter-btn${i === 0 ? " active" : ""}"
              data-cert-filter="${c.id}">${c.label}</button>`
      )
      .join("");
  }

  /** Render certificate cards */
  function renderCertificates() {
    const grid = document.getElementById("certificates-grid");
    if (!grid) return;

    grid.innerHTML = D.certificates
      .map(
        (c) => `
      <div class="cert-card" data-category="${c.category}" data-visible="true">
        <a href="${c.link}" target="_blank" class="cert-card__image">
          <img src="${c.image}" alt="${c.title}" loading="lazy" />
          <span class="cert-card__badge cert-card__year">${c.year}</span>
          <span class="cert-card__badge cert-card__issuer" style="background:${c.issuerColor}cc;">${c.issuerLabel}</span>
        </a>
        <div class="cert-card__body">
          <h3 class="cert-card__title">${c.title}</h3>
        </div>
      </div>`
      )
      .join("");
  }

  /** Render personal info into the About section */
  function renderAbout() {
    const el = (id) => document.getElementById(id);
    const p = D.personal;

    const aboutPhoto = el("about-photo-img");
    if (aboutPhoto) aboutPhoto.src = p.photo;

    const aboutName = el("about-name-text");
    if (aboutName) aboutName.textContent = p.name;

    const aboutBio = el("about-bio-text");
    if (aboutBio) aboutBio.textContent = p.bio;

    const infoPills = el("info-pills");
    if (infoPills) {
      const pills = [
        { icon: "fa-map-marker-alt", text: p.location, cls: "info-pill--location", color: "var(--color-electric-blue)" },
        { icon: "fa-envelope", text: p.email, cls: "info-pill--email", color: "var(--color-green-glow)" },
        { icon: "fa-phone", text: p.phone, cls: "info-pill--phone", color: "var(--color-purple-glow)" },
        { icon: "fa-graduation-cap", text: p.education, cls: "info-pill--education", color: "var(--color-orange-glow)" },
      ];
      infoPills.innerHTML = pills
        .map(
          (pi) => `
        <div class="info-pill ${pi.cls}">
          <i class="fas ${pi.icon}" style="color:${pi.color}"></i>
          <span>${pi.text}</span>
        </div>`
        )
        .join("");
    }

    // CV link
    const cvLink = el("cv-download-link");
    if (cvLink) cvLink.href = p.cvFile;

    // Social links
    const socials = el("social-links");
    if (socials) {
      socials.innerHTML = `
        <a href="${p.social.github}" target="_blank" class="social-link social-link--github" aria-label="GitHub"><i class="fab fa-github"></i></a>
        <a href="${p.social.linkedin}" target="_blank" class="social-link social-link--linkedin" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="${p.social.instagram}" target="_blank" class="social-link social-link--instagram" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
      `;
    }
  }

  /* ═══════════════════════════════════════════
     INTERACTIONS — Behavior & state
     ═══════════════════════════════════════════ */

  // --- Theme toggle ---
  function initTheme() {
    const toggle = document.getElementById("theme-toggle");
    const html = document.documentElement;

    if (localStorage.getItem("theme") === "light") {
      html.classList.remove("dark");
    }

    if (toggle) {
      toggle.addEventListener("click", () => {
        html.classList.toggle("dark");
        localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
      });
    }
  }

  // --- Mobile menu ---
  function initMobileMenu() {
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-nav");
    if (!btn || !menu) return;

    btn.addEventListener("click", () => menu.classList.toggle("open"));

    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => menu.classList.remove("open"));
    });
  }

  // --- Smooth scroll ---
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          const headerH = document.querySelector(".site-header")?.offsetHeight || 0;
          window.scrollTo({
            top: target.offsetTop - headerH,
            behavior: "smooth",
          });
        }
      });
    });
  }

  // --- Active nav highlight ---
  function initActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    const mobileLinks = document.querySelectorAll("#mobile-nav a");

    function update() {
      const scrollY = window.scrollY + 120;
      let current = "";

      sections.forEach((s) => {
        if (scrollY >= s.offsetTop && scrollY < s.offsetTop + s.clientHeight) {
          current = s.id;
        }
      });

      const updateLinks = (links) => {
        links.forEach((l) => {
          l.classList.toggle("active", l.getAttribute("href") === `#${current}`);
        });
      };

      updateLinks(navLinks);
      updateLinks(mobileLinks);
    }

    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(() => { update(); ticking = false; });
        ticking = true;
      }
    }, { passive: true });

    update();
  }

  // --- Header scroll effect ---
  function initHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 30);
    }, { passive: true });
  }

  // --- Typing effect ---
  function typeEffect(el, text, speed = 100, delay = 0) {
    if (!el) return;
    setTimeout(() => {
      el.textContent = "";
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          el.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(timer);
        }
      }, speed);
    }, delay);
  }

  // --- Intersection Observer for animations ---
  function initScrollAnimations() {
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: isMobile ? 0.05 : 0.15, rootMargin: "50px" }
    );

    document.querySelectorAll(".stagger-children").forEach((el) => observer.observe(el));
  }

  // --- Skill category filter + toggle ---
  const SKILL_DEFAULT_VISIBLE = 6;
  let skillShowAll = false;
  let skillActiveFilter = "all";

  function updateSkillView() {
    const cards = document.querySelectorAll("#skills-grid .skill-card");
    const countEl = document.getElementById("skill-visible-count");
    const totalEl = document.getElementById("skill-total-count");
    const toggleBtn = document.getElementById("toggle-skills-btn");

    const filtered = [];
    cards.forEach((c) => {
      const match = skillActiveFilter === "all" || c.dataset.category === skillActiveFilter;
      if (match) filtered.push(c);
      c.dataset.visible = "false";
    });

    const limit = skillShowAll ? filtered.length : SKILL_DEFAULT_VISIBLE;
    const shown = Math.min(limit, filtered.length);

    for (let i = 0; i < shown; i++) {
      filtered[i].dataset.visible = "true";
    }

    if (countEl) countEl.textContent = shown;
    if (totalEl) totalEl.textContent = filtered.length;

    if (toggleBtn) {
      if (filtered.length > SKILL_DEFAULT_VISIBLE) {
        toggleBtn.style.display = "";
        toggleBtn.textContent = skillShowAll ? "Show Less" : "Show All";
      } else {
        toggleBtn.style.display = "none";
      }
    }
  }

  function initSkillFilter() {
    const container = document.getElementById("skills-categories");
    if (!container) return;

    container.addEventListener("click", (e) => {
      const btn = e.target.closest(".skills-category-btn");
      if (!btn) return;

      container.querySelectorAll(".skills-category-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      skillActiveFilter = btn.dataset.filter;
      skillShowAll = false;
      updateSkillView();
    });

    const toggleBtn = document.getElementById("toggle-skills-btn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        skillShowAll = !skillShowAll;
        updateSkillView();
      });
    }
  }

  // --- Certificate filter + toggle ---
  const CERT_DEFAULT_VISIBLE = 4;
  let certShowAll = false;
  let certActiveFilter = "all";

  function updateCertView() {
    const cards = document.querySelectorAll("#certificates-grid .cert-card");
    const countEl = document.getElementById("cert-visible-count");
    const totalEl = document.getElementById("cert-total-count");
    const toggleBtn = document.getElementById("toggle-certs-btn");

    const filtered = [];
    cards.forEach((c) => {
      const match = certActiveFilter === "all" || c.dataset.category === certActiveFilter;
      if (match) filtered.push(c);
      c.dataset.visible = "false";
    });

    const limit = certShowAll ? filtered.length : CERT_DEFAULT_VISIBLE;
    const shown = Math.min(limit, filtered.length);

    for (let i = 0; i < shown; i++) {
      filtered[i].dataset.visible = "true";
    }

    if (countEl) countEl.textContent = shown;
    if (totalEl) totalEl.textContent = filtered.length;

    if (toggleBtn) {
      if (filtered.length > CERT_DEFAULT_VISIBLE) {
        toggleBtn.style.display = "";
        toggleBtn.textContent = certShowAll ? "Show Less" : "Show All";
      } else {
        toggleBtn.style.display = "none";
      }
    }
  }

  function initCertFilter() {
    const bar = document.getElementById("cert-filter-bar");
    if (!bar) return;

    bar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;

      bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      certActiveFilter = btn.dataset.certFilter;
      certShowAll = false;
      updateCertView();
    });

    const toggleBtn = document.getElementById("toggle-certs-btn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        certShowAll = !certShowAll;
        updateCertView();
      });
    }
  }

  // --- Read more toggle (global so inline onclick works) ---
  window.__toggleDesc = function (id, btn) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle("expanded");
    btn.textContent = el.classList.contains("expanded") ? "Read less" : "Read more";
  };

  // --- Contact form (EmailJS) ---
  function initContact() {
    if (typeof emailjs !== "undefined") {
      emailjs.init({ publicKey: D.emailjs.publicKey });
    }

    const form = document.getElementById("emailForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }

  // Global send function
  window.sendEmail = function () {
    const params = {
      subject: document.getElementById("subject")?.value,
      name: document.getElementById("name")?.value,
      message: document.getElementById("message")?.value,
      email: document.getElementById("email")?.value,
    };

    if (typeof emailjs === "undefined") {
      alert("Email service not loaded. Please try again.");
      return;
    }

    emailjs
      .send(D.emailjs.serviceId, D.emailjs.templateId, params)
      .then(() => {
        alert("Email sent successfully!");
        document.getElementById("emailForm")?.reset();
      })
      .catch((err) => {
        console.error("Email failed:", err);
        alert("Email failed. Try again later.");
      });
  };

  // --- Footer year ---
  function setFooterYear() {
    const el = document.getElementById("current-year");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ═══════════════════════════════════════════
     BOOTSTRAP
     ═══════════════════════════════════════════ */
  function init() {
    // 1. Render data-driven content
    renderAbout();
    renderSkillCategories();
    renderSkills();
    renderProjects();
    renderCertificateFilters();
    renderCertificates();

    // 2. Initialize interactions
    initTheme();
    initMobileMenu();
    initSmoothScroll();
    initActiveNav();
    initHeaderScroll();
    initScrollAnimations();
    initSkillFilter();
    initCertFilter();
    initContact();
    setFooterYear();

    // 3. Typing effects
    typeEffect(document.getElementById("hero-name"), D.personal.name, 120);
    typeEffect(document.getElementById("hero-title"), D.personal.title, 80, 1800);

    // 4. Initial views
    updateSkillView();
    updateCertView();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
