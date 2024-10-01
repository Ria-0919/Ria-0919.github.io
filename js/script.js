document.addEventListener('DOMContentLoaded', function () {
  const navButtons = document.querySelectorAll('.nav-btn');
  const header = document.getElementById('scroll-nav');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.style.display = 'block'; // 스크롤 시 헤더 표시
    } else {
      header.style.display = 'none'; // 최상단 시 헤더 숨김
    }
  });

  navButtons.forEach(button => {
    button.addEventListener('click', function () {
      const target = document.querySelector(this.getAttribute('data-target'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
