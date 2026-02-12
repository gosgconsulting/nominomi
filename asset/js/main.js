// Menu Toggle
(function() {
    'use strict';
    
    // รอให้ DOM โหลดเสร็จ
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        const menuBtn = document.querySelector('.menu-btn');
        const menuMb = document.querySelector('.menu-mb');
        
        console.log('Script loaded!');
        console.log('Menu Button:', menuBtn);
        console.log('Menu Mobile:', menuMb);
        
        if (!menuBtn || !menuMb) {
            console.error('ไม่พบ element!');
            return;
        }
        
        // Toggle menu เมื่อคลิกปุ่ม
        menuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isActive = menuMb.classList.contains('active');
            
            if (isActive) {
                closeMenu('Menu closed');
            } else {
                openMenu();
            }
        });

        // ปิดเมนูเมื่อแตะลิงก์ภายในเมนู
        menuMb.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                closeMenu('Menu closed by link click');
            });
        });

        // ปิด menu เมื่อคลิกนอก menu (รองรับทั้ง click และ touch)
        ['click', 'touchstart'].forEach(function(eventName) {
            document.addEventListener(eventName, function(event) {
                const isClickInsideMenu = menuMb.contains(event.target);
                const isClickOnButton = menuBtn.contains(event.target);
    
                if (!isClickInsideMenu && !isClickOnButton && menuMb.classList.contains('active')) {
                    closeMenu('Menu closed by outside ' + eventName);
                }
            });
        });
        
        function openMenu() {
            menuMb.classList.add('active');
            console.log('Menu opened');
        }
        
        function closeMenu(message) {
            menuMb.classList.remove('active');
            if (message) {
                console.log(message);
            }
        }
        
        console.log('Event listeners attached successfully!');
    }
})();
