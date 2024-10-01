document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = button.getAttribute('data-target');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', function() {
        const header = document.getElementById('scroll-nav');
        if (window.scrollY > 50) {
            header.style.display = 'block'; // 스크롤 시 헤더 나타나기
        } else {
            header.style.display = 'none'; // 스크롤 최상단 시 헤더 숨기기
        }
    });
});
