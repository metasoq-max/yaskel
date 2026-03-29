(function () {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const yearNodes = document.querySelectorAll('#year');

  if (yearNodes.length) {
    const currentYear = new Date().getFullYear();
    yearNodes.forEach((node) => {
      node.textContent = currentYear;
    });
  }

  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });
  }
})();
