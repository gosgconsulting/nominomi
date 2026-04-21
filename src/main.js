import './styles/main.css';
import './styles/style.css';
import './styles/animations.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 100,
      delay: 0,
      disable: function () {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      },
    });
  }
}

function initMenu() {
  const menuBtn = document.querySelector('.menu-btn');
  const menuMb = document.querySelector('.menu-mb');

  if (!menuBtn || !menuMb) return;

  function openMenu() {
    menuMb.classList.add('active');
  }

  function closeMenu() {
    menuMb.classList.remove('active');
  }

  menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (menuMb.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menuMb.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });

  ['click', 'touchstart'].forEach(function (eventName) {
    document.addEventListener(eventName, function (event) {
      const isClickInsideMenu = menuMb.contains(event.target);
      const isClickOnButton = menuBtn.contains(event.target);
      if (!isClickInsideMenu && !isClickOnButton && menuMb.classList.contains('active')) {
        closeMenu();
      }
    });
  });
}

function initShopSidebar() {
  const overlay = document.getElementById('shopSidebarOverlay');
  const sidebar = document.getElementById('shopSidebar');
  const closeBtn = document.getElementById('shopSidebarClose');
  const triggers = [
    document.getElementById('shopNowBtnDesktop'),
    document.getElementById('shopNowBtnMobile'),
  ];

  if (!overlay || !sidebar) return;

  function openSidebar() {
    overlay.classList.add('active');
    sidebar.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    overlay.classList.remove('active');
    sidebar.classList.remove('active');
    document.body.style.overflow = '';
  }

  triggers.forEach(function (btn) {
    if (btn) btn.addEventListener('click', openSidebar);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeSidebar();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    initAOS();
    initMenu();
    initShopSidebar();
  });
} else {
  initAOS();
  initMenu();
  initShopSidebar();
}
