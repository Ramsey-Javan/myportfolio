// Main interactions for Ramsey Javan portfolio
(function() {
  const prefers = localStorage.getItem('theme');
  if (prefers) document.documentElement.setAttribute('data-theme', prefers);
})();

// Theme toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  toggle?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? null : 'light';
    if (next) document.documentElement.setAttribute('data-theme', next);
    else document.documentElement.removeAttribute('data-theme');
    if (next) localStorage.setItem('theme', next); else localStorage.removeItem('theme');
  });

  // Footer year
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Typewriter effect
  const tw = document.getElementById('typewriter');
  const text = 'Code the Future, Today.';
  let i = 0;
  function type() {
    if (!tw) return;
    tw.textContent = text.slice(0, i);
    i = (i + 1) % (text.length + 20); // pause at end
    setTimeout(type, 90);
  }
  type();

  // Skills render + progress bars animate
  const skillsDataEl = document.getElementById('skills-data');
  const skillsGrid = document.querySelector('.skills-grid');
  if (skillsDataEl && skillsGrid) {
    const data = JSON.parse(skillsDataEl.textContent);
    Object.entries(data).forEach(([group, items]) => {
      const container = document.createElement('div');
      container.className = 'card';
      const title = document.createElement('h3');
      title.textContent = group;
      container.appendChild(title);
      items.forEach(item => {
        const skill = document.createElement('div');
        skill.className = 'skill';
        skill.innerHTML = `
          <div class="top"><i class="${item.icon}"></i><strong>${item.name}</strong><span style="margin-left:auto">${item.level}%</span></div>
          <div class="progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${item.level}"><div class="bar"></div></div>
        `;
        container.appendChild(skill);
      });
      skillsGrid.appendChild(container);
    });

    // animate bars when section in view
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.bar').forEach((bar, idx) => {
            const level = entry.target.querySelectorAll('.progress')[idx].getAttribute('aria-valuenow');
            requestAnimationFrame(() => { bar.style.width = level + '%'; });
          });
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('#skills .card').forEach(card => observer.observe(card));
  }

  // Testimonials carousel
  const quotes = Array.from(document.querySelectorAll('.quote'));
  let q = 0;
  function showQuote(idx) {
    quotes.forEach((el, i) => el.classList.toggle('active', i === idx));
  }
  showQuote(0);
  document.querySelector('.carousel .next')?.addEventListener('click', ()=> { q = (q+1)%quotes.length; showQuote(q); });
  document.querySelector('.carousel .prev')?.addEventListener('click', ()=> { q = (q-1+quotes.length)%quotes.length; showQuote(q); });

  // tsParticles init
  if (window.tsParticles) {
    tsParticles.load('particles', {
      fpsLimit: 60,
      detectRetina: true,
      background: { color: 'transparent' },
      particles: {
        number: { value: 60, density: { enable: true, area: 900 } },
        color: { value: ['#00f2ff', '#d400ff'] },
        links: { enable: true, distance: 150, opacity: 0.3 },
        move: { enable: true, speed: 1.1 },
        size: { value: { min: 1, max: 3 } },
        opacity: { value: 0.5 },
      },
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: { enable: true, mode: 'repulse' },
          onClick: { enable: true, mode: 'push' }
        },
        modes: {
          repulse: { distance: 120 },
          push: { quantity: 3 }
        }
      }
    });
  }

  // Smooth focus outlines for keyboard users
  function handleFirstTab(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
    }
  }
  window.addEventListener('keydown', handleFirstTab);

  // Blog loader
  fetch('data/blog.json').then(r=>r.json()).then(posts => {
    const grid = document.getElementById('blogGrid');
    posts.forEach(p => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `<h3>${p.title}</h3><small>${p.date}</small><p>${p.excerpt}</p><em>Coming Soon</em>`;
      grid.appendChild(card);
    });
  });
});
