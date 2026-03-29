(function () {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const navLinks = document.querySelectorAll('.site-nav a[data-nav]');
  const yearNodes = document.querySelectorAll('#year');

  yearNodes.forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const routeMap = {
    '/': 'home',
    '/about': 'about',
    '/about.html': 'about',
    '/publications': 'publications',
    '/publications.html': 'publications',
    '/contact': 'contact',
    '/contact.html': 'contact',
    '/privacy': 'privacy',
    '/privacy.html': 'privacy',
    '/terms': 'terms',
    '/terms.html': 'terms'
  };

  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
  const currentNav = routeMap[currentPath] || 'home';

  navLinks.forEach((link) => {
    const isCurrent = link.dataset.nav === currentNav;
    if (isCurrent) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
