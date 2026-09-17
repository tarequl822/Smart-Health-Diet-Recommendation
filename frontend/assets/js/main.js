/* ==========================================================================
   Smart Health & Diet Recommendation System - Main Navigation & Helper Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  // Keep navigation state and mobile behavior consistent across dashboard pages.
  const currentPath = window.location.pathname.split('/').pop();
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  sidebarLinks.forEach(link => {
    const href = link.getAttribute('href');
    const isSignOutLink = link.classList.contains('text-danger');
    const isActive = !isSignOutLink && (href === currentPath || (currentPath === '' && href === 'dashboard.html'));
    link.classList.toggle('active', isActive);
  });

  const sidebar = document.querySelector('.sidebar');
  const mainWrapper = document.querySelector('.main-wrapper');

  if (sidebar && mainWrapper) {
    const menuButton = document.createElement('button');
    menuButton.type = 'button';
    menuButton.className = 'mobile-menu-button';
    menuButton.setAttribute('aria-label', 'Open navigation menu');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.innerHTML = '<span></span><span></span><span></span>';

    const overlay = document.createElement('button');
    overlay.type = 'button';
    overlay.className = 'sidebar-overlay';
    overlay.setAttribute('aria-label', 'Close navigation menu');

    const header = mainWrapper.querySelector('.top-header');
    if (header) header.prepend(menuButton);
    document.body.appendChild(overlay);

    const setMenuState = isOpen => {
      sidebar.classList.toggle('mobile-open', isOpen);
      overlay.classList.toggle('visible', isOpen);
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    };

    menuButton.addEventListener('click', () => setMenuState(!sidebar.classList.contains('mobile-open')));
    overlay.addEventListener('click', () => setMenuState(false));
    sidebarLinks.forEach(link => link.addEventListener('click', () => setMenuState(false)));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) setMenuState(false);
    });
  }

  // Global UI helper object
  window.SHD_UI = {
    openModal: function (modalId) {
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.add('active');
    },
    closeModal: function (modalId) {
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.remove('active');
    }
  };
});
