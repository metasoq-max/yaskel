(() => {
  const y = new Date().getFullYear();
  document.querySelectorAll('#year').forEach((n) => (n.textContent = String(y)));

  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.main-nav');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  }

  const slug = (location.pathname.replace(/\/+$/, '').split('/').filter(Boolean).pop() || 'home').replace('.html', '');
  const map = { index: 'home', '': 'home', about: 'about', publications: 'publications', contact: 'contact', privacy: 'privacy', terms: 'terms' };
  const current = map[slug] || 'home';
  document.querySelectorAll('.main-nav a[data-page]').forEach((a) => {
    if (a.dataset.page === current) a.setAttribute('aria-current', 'page');
  });
})();
