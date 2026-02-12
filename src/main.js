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

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    initAOS();
    initMenu();
  });
} else {
  initAOS();
  initMenu();
}
