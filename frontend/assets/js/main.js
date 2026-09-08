/* ==========================================================================
   Smart Health & Diet Recommendation System - Main Navigation & Helper Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  // Highlight active sidebar navigation link
  const currentPath = window.location.pathname.split('/').pop();
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  sidebarLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'dashboard.html')) {
      link.classList.add('active');
    }
  });

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
