// === Spain Vacation 2026: Shared Navigation & Scroll Effects ===

(function() {
  // Drawer toggle
  const menuBtn = document.querySelector('.menu-btn');
  const drawer = document.querySelector('.lesson-drawer');
  const overlay = document.querySelector('.drawer-overlay');
  const closeBtn = document.querySelector('.drawer-close');

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  // Close drawer on link click
  drawer?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      setTimeout(closeDrawer, 200);
    });
  });

  // Keyboard shortcut: Escape closes drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  // Scroll-triggered reveal animations
  function handleReveals() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 80) {
        el.classList.add('visible');
      }
    });
  }

  // Run on load and scroll
  window.addEventListener('load', handleReveals);
  window.addEventListener('scroll', handleReveals);

  // Highlight current section in drawer
  function updateActiveSection() {
    const sections = document.querySelectorAll('[id]');
    const links = document.querySelectorAll('.lesson-list a');
    let currentId = '';

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120) {
        currentId = section.id;
      }
    });

    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === '#' + currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveSection);
  window.addEventListener('load', updateActiveSection);
})();