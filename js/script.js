// script.js
const nav = document.getElementById('scroll-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.display = 'flex'; // 스크롤 시 네비게이션 표시
    } else {
        nav.style.display = 'none'; // 스크롤 위치가 50px 이하일 경우 숨김
    }
});

document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`No section found for ${targetId}`);
        }
    });
});
