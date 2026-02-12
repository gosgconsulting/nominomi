// Animation Controller for NOMI NOMI using AOS Library
(function() {
    'use strict';

    function init() {
        // Initialize AOS (Animate On Scroll)
        AOS.init({
            duration: 800,           // Animation duration
            easing: 'ease-out',      // Easing function
            once: true,              // Animation จะเกิดครั้งเดียว
            offset: 100,             // Offset จาก viewport (px)
            delay: 0,                // Delay ก่อนเริ่ม animation
            disable: function() {
                // Disable AOS on reduced motion preference
                return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            }
        });
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
