// ── CANVAS PARTICLE NETWORK ──────────────────────────────────────────────────
const canvas = document.getElementById('hero-canvas');
const ctx    = canvas.getContext('2d');
let particles = [], packets = [];
let mouseX = -9999, mouseY = -9999;
let hoveredIdx = -1;

window.addEventListener('mousemove', e => {
  const r = canvas.getBoundingClientRect();
  mouseX = e.clientX - r.left;
  mouseY = e.clientY - r.top;
});
document.addEventListener('mouseleave', () => { mouseX = -9999; mouseY = -9999; });

function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }

class Particle {
  constructor() {
    this.x  = Math.random() * canvas.width;
    this.y  = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.38;
    this.vy = (Math.random() - 0.5) * 0.38;
    this.r  = Math.random() * 1.4 + 0.5;
    this.op = Math.random() * 0.45 + 0.2;
    this.pulse = Math.random() < 0.1;
    this.ph = Math.random() * Math.PI * 2;
    this.captureTimer = 0;
  }
  update() {
    this.x += this.vx; this.y += this.vy; this.ph += 0.025;
    if (this.x < 0) this.x = canvas.width;
    if (this.x > canvas.width)  this.x = 0;
    if (this.y < 0) this.y = canvas.height;
    if (this.y > canvas.height) this.y = 0;
    const mdx = mouseX - this.x, mdy = mouseY - this.y;
    const md  = Math.sqrt(mdx * mdx + mdy * mdy);
    if (md < 150 && md > 0) {
      const f = (150 - md) / 150 * 0.016;
      this.vx += (mdx / md) * f; this.vy += (mdy / md) * f;
      const spd = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (spd > 1.8) { this.vx = (this.vx / spd) * 1.8; this.vy = (this.vy / spd) * 1.8; }
    }
    if (md < 32) {
      this.captureTimer++;
      if (this.captureTimer > 22) {
        this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.38; this.vy = (Math.random() - 0.5) * 0.38;
        this.captureTimer = 0;
      }
    } else { this.captureTimer = Math.max(0, this.captureTimer - 1); }
  }
  draw() {
    const p   = this.pulse ? Math.sin(this.ph) * 0.38 + 0.62 : 1;
    const cap = Math.min(this.captureTimer / 22, 1);
    const r   = this.r * p * (1 + cap * 2.5);
    const op  = this.op * p;
    ctx.beginPath();
    ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
    ctx.fillStyle = cap > 0 ? `rgba(0,212,255,${op + cap * 0.7})` : `rgba(0,212,255,${op})`;
    ctx.fill();
    if (this.pulse || cap > 0) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, r * (cap > 0 ? 6 : 4.5), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,212,255,${cap > 0 ? 0.12 * cap : 0.055 * p})`;
      ctx.fill();
    }
  }
}

function initParticles() {
  particles = [];
  const n = Math.min(85, Math.floor(canvas.width * canvas.height / 14000));
  for (let i = 0; i < n; i++) particles.push(new Particle());
}

function drawEdges() {
  const MAX = 135;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const d  = Math.sqrt(dx * dx + dy * dy);
      if (d < MAX) {
        const boost = (hoveredIdx >= 0 && (i === hoveredIdx || j === hoveredIdx)) ? 0.5 : 0;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(0,212,255,${(1 - d / MAX) * (0.18 + boost)})`;
        ctx.lineWidth = boost > 0.1 ? 0.8 : 0.5;
        ctx.stroke();
      }
    }
  }
}

function tickPackets() {
  if (Math.random() < 0.025 && packets.length < 10) {
    const i = Math.floor(Math.random() * particles.length);
    let best = -1, bd = Infinity;
    for (let j = 0; j < particles.length; j++) {
      if (j === i) continue;
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const d  = Math.sqrt(dx * dx + dy * dy);
      if (d < 135 && d < bd) { bd = d; best = j; }
    }
    if (best !== -1) packets.push({ f: i, t: best, p: 0, s: 0.012 + Math.random() * 0.014 });
  }
  packets = packets.filter(pk => {
    pk.p += pk.s;
    if (pk.p > 1) return false;
    const a = particles[pk.f], b = particles[pk.t];
    if (!a || !b) return false;
    const x = a.x + (b.x - a.x) * pk.p;
    const y = a.y + (b.y - a.y) * pk.p;
    ctx.beginPath(); ctx.arc(x, y, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,212,255,0.95)'; ctx.fill();
    ctx.beginPath(); ctx.arc(x, y, 5.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,212,255,0.18)'; ctx.fill();
    return true;
  });
}

function drawMouseGlow() {
  if (mouseX < -999 || hoveredIdx < 0) return;
  const g = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 110);
  g.addColorStop(0,   'rgba(0,212,255,0.09)');
  g.addColorStop(0.4, 'rgba(0,212,255,0.04)');
  g.addColorStop(1,   'rgba(0,212,255,0)');
  ctx.fillStyle = g;
  ctx.beginPath(); ctx.arc(mouseX, mouseY, 110, 0, Math.PI * 2); ctx.fill();
}

function frame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'rgba(0,212,255,0.022)'; ctx.lineWidth = 1;
  for (let x = 0; x < canvas.width; x += 80) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke(); }
  for (let y = 0; y < canvas.height; y += 80) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke(); }
  hoveredIdx = -1;
  for (let k = 0; k < particles.length; k++) {
    const dx = particles[k].x - mouseX, dy = particles[k].y - mouseY;
    if (dx * dx + dy * dy < 324) { hoveredIdx = k; break; }
  }
  drawMouseGlow(); drawEdges(); tickPackets();
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(frame);
}

// ── TYPEWRITER ───────────────────────────────────────────────────────────────
function initTypewriter(roles) {
  let ri = 0, ci = 0, del = false;
  const typer = document.getElementById('typer');
  function type() {
    const cur = roles[ri];
    typer.textContent = del ? cur.slice(0, ci - 1) : cur.slice(0, ci + 1);
    del ? ci-- : ci++;
    if (!del && ci === cur.length) { setTimeout(() => { del = true; type(); }, 2200); return; }
    if (del && ci === 0) { del = false; ri = (ri + 1) % roles.length; }
    setTimeout(type, del ? 55 : 95);
  }
  type();
}

// ── SVG ICONS ─────────────────────────────────────────────────────────────────
const GH_ICON    = `<svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`;
const EMAIL_ICON = `<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`;
const LI_ICON   = `<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;
const PH_ICON   = `<svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`;

// ── HTML BUILDERS ─────────────────────────────────────────────────────────────
function pipeDividerHTML(p) {
  const nodes = p.nodes.map(n =>
    `<div class="pn" style="left:${n.left}"><div class="pn-dot"></div><div class="pn-lbl">${n.label}</div></div>`
  ).join('');
  return `<div class="pipe-divider"><div class="pipe-inner"><div class="pipe-rail"></div><div class="pipe-nodes">${nodes}</div><div class="pipe-pkt"></div><div class="pipe-caption">${p.caption}</div></div></div>`;
}

// ── RENDER FUNCTIONS ──────────────────────────────────────────────────────────
function renderNav(data) {
  const links = data.nav.map(l => `<li><a href="${l.href}">${l.text}</a></li>`).join('');
  document.getElementById('nav').innerHTML =
    `<a href="#hero" class="nav-logo">umair<span>.dev</span></a><ul class="nav-links">${links}</ul>`;
}

function renderHero(data) {
  const hero    = document.getElementById('hero');
  const content = hero.querySelector('.hero-content');
  data.floatingKeywords.forEach(kw => {
    const s = document.createElement('span');
    s.className = 'floating-kw';
    s.setAttribute('style', kw.style);
    s.textContent = kw.text;
    hero.insertBefore(s, content);
  });
  content.innerHTML = `
    <div class="hero-badge"><span class="dot"></span>${data.meta.badge}</div>
    <h1 class="hero-name">${data.meta.name}</h1>
    <div class="hero-title"><span id="typer"></span><span class="cursor"></span></div>
    <p class="hero-desc">${data.meta.heroDesc}</p>
    <div class="hero-buttons">
      <a href="#experience" class="btn-primary">View My Work</a>
      <a href="${data.meta.linkedin}" target="_blank" class="btn-ghost">LinkedIn</a>
      <a href="${data.meta.github}" target="_blank" class="btn-ghost">GitHub</a>
    </div>`;
}

function renderAbout(data) {
  const paras = data.about.paragraphs.map(p => `<p>${p}</p>`).join('');
  const stats = data.stats.map(s =>
    `<div class="stat-card"><span class="stat-num" data-count="${s.count}">0</span><span class="stat-lbl">${s.label}</span></div>`
  ).join('');
  return `
<div class="section-wrap" id="about">
  <div class="label">About me</div>
  <h2 class="section-h">Turning Data into <span>Decisions</span></h2>
  <div class="divider"></div>
  <div class="about-grid reveal">
    <div class="about-text">${paras}</div>
    <div class="stats-grid">${stats}</div>
  </div>
</div>`;
}

function renderSkills(data) {
  const cats = data.skills.map(cat => {
    const tags = cat.tags.map(t =>
      `<span class="tag${t.highlight ? ' hi' : ''}">${t.name}</span>`
    ).join('');
    return `<div class="skill-cat reveal"><h3>${cat.category}</h3><div class="skill-tags">${tags}</div></div>`;
  }).join('');
  return `
<div class="section-full" id="skills">
  <div class="inner">
    <div class="label">Technical Arsenal</div>
    <h2 class="section-h">Skills &amp; <span>Technologies</span></h2>
    <div class="divider"></div>
    <div class="skills-wrap">${cats}</div>
  </div>
</div>`;
}

function renderExperience(data) {
  const jobs = data.experience.map((job, ji) => {
    const projs = job.projects.map(proj => {
      const bullets = proj.bullets.map(b => `<li>${b}</li>`).join('');
      const chips   = proj.chips.map(c => `<span class="chip">${c}</span>`).join('');
      return `<div class="proj-block">
        <div class="proj-name">${proj.name} <span class="proj-badge">${proj.badge}</span></div>
        <ul class="bullets">${bullets}</ul>
        <div class="chips">${chips}</div>
      </div>`;
    }).join('');
    return `<div class="job" id="j${ji + 1}">
      <div class="job-co">${job.company}</div>
      <div class="job-meta">
        <span class="job-role">${job.role}</span>
        <span class="job-period">${job.period}</span>
      </div>
      <div class="job-body">${projs}</div>
    </div>`;
  }).join('');
  return `
<div class="section-wrap" id="experience">
  <div class="label">Career</div>
  <h2 class="section-h">Work <span>Experience</span></h2>
  <div class="divider"></div>
  <div class="timeline"><div id="pipe-dot"></div>${jobs}</div>
</div>`;
}

function renderProjects(data) {
  const cards = data.projects.map((proj, i) => {
    const bullets = proj.bullets.map(b => `<li>${b}</li>`).join('');
    return `<div class="proj-card" id="pc${i + 1}">
      <div class="proj-card-title">
        ${proj.name}
        <a href="${proj.github}" target="_blank">${GH_ICON} github</a>
      </div>
      <div class="proj-card-tech">${proj.tech}</div>
      <ul class="bullets">${bullets}</ul>
    </div>`;
  }).join('');
  return `
<div class="section-wrap" id="projects">
  <div class="label">Personal Work</div>
  <h2 class="section-h">Featured <span>Project</span></h2>
  <div class="divider"></div>
  ${cards}
</div>`;
}

function renderAchievements(data) {
  const cards = data.achievements.map((a, i) =>
    `<div class="ach-card" id="a${i + 1}">
      <div class="ach-icon ${a.iconClass}">${a.iconEmoji}</div>
      <div>
        <h4>${a.title}</h4>
        <p>${a.description}</p>
        <a class="ach-link" href="${a.link}" target="_blank">${a.linkText}</a>
      </div>
    </div>`
  ).join('');
  return `
<div class="section-wrap" id="achievements">
  <div class="label">Recognition</div>
  <h2 class="section-h">Certifications &amp; <span>Achievements</span></h2>
  <div class="divider"></div>
  <div class="ach-grid">${cards}</div>
</div>`;
}

function renderEducation(data) {
  const items = data.education.map(e =>
    `<div class="edu-card reveal">
      <div class="edu-icon">🎓</div>
      <div>
        <h3>${e.institution}</h3>
        <div class="edu-deg">${e.degree}</div>
        <div class="edu-per">${e.location} · ${e.period}</div>
        <div class="edu-gpa">⭐ CGPA: ${e.gpa}</div>
      </div>
    </div>`
  ).join('');
  return `
<div class="section-wrap" id="education">
  <div class="label">Academic Background</div>
  <h2 class="section-h">Education</h2>
  <div class="divider"></div>
  ${items}
</div>`;
}

function renderContact(data) {
  return `
<div class="section-wrap" id="contact-section">
  <div class="label">Get in touch</div>
  <h2 class="section-h" style="text-align:center">Let's <span>Connect</span></h2>
  <div class="divider" style="margin:0 auto 1.5rem"></div>
  <p class="contact-desc">Open to senior Data Engineering roles, consulting opportunities, and interesting data platform challenges.</p>
  <div class="contact-links">
    <a class="c-link" href="mailto:${data.meta.email}">${EMAIL_ICON} ${data.meta.email}</a>
    <a class="c-link" href="${data.meta.linkedin}" target="_blank">${LI_ICON} linkedin.com/in/umairkarel</a>
    <a class="c-link" href="${data.meta.github}" target="_blank">${GH_ICON} github.com/umairkarel</a>
    <a class="c-link" href="tel:${data.meta.phone}">${PH_ICON} ${data.meta.phone}</a>
  </div>
</div>`;
}

// ── OBSERVERS & COUNTERS ──────────────────────────────────────────────────────
function initObservers() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      if (e.target.classList.contains('skill-cat')) {
        e.target.querySelectorAll('.tag').forEach((t, i) =>
          setTimeout(() => t.classList.add('in'), i * 55));
      }
      if (e.target.classList.contains('pipe-divider')) {
        e.target.querySelectorAll('.pn').forEach((n, i) => {
          n.style.transitionDelay = (0.35 + i * 0.2) + 's';
        });
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal, .job, .proj-card, .ach-card, .skill-cat, .pipe-divider')
    .forEach(el => io.observe(el));

  const cio = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, tgt = parseInt(el.dataset.count);
      let cur = 0;
      const step = Math.ceil(tgt / 28);
      const t = setInterval(() => {
        cur = Math.min(cur + step, tgt);
        el.textContent = cur + '+';
        if (cur >= tgt) clearInterval(t);
      }, 55);
      cio.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-num[data-count]').forEach(el => cio.observe(el));

  window.addEventListener('scroll', () => {
    document.getElementById('nav').style.borderBottomColor =
      window.scrollY > 60 ? 'rgba(0,212,255,0.22)' : 'rgba(0,212,255,0.12)';
  });
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
function init() {
  const data = PORTFOLIO_DATA;

  renderNav(data);
  renderHero(data);

  document.getElementById('app').innerHTML =
    renderAbout(data) +
    pipeDividerHTML(data.pipelines[0]) +
    renderSkills(data) +
    pipeDividerHTML(data.pipelines[1]) +
    renderExperience(data) +
    pipeDividerHTML(data.pipelines[2]) +
    renderProjects(data) +
    renderAchievements(data) +
    renderEducation(data) +
    renderContact(data);

  document.querySelector('footer').innerHTML =
    `<p><span>${data.meta.name}</span> · ${data.meta.footerLine}</p>`;

  initTypewriter(data.meta.roles);

  resize(); initParticles(); frame();
  window.addEventListener('resize', () => { resize(); initParticles(); });

  initObservers();
}

init();
