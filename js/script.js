const navButtons = document.querySelectorAll('.nav-btn');
const scrollNav = document.getElementById('scroll-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    scrollNav.style.display = 'flex';
  } else {
    scrollNav.style.display = 'none';
  }
});

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const projectButtons = document.querySelectorAll('.project-btn');

projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');

    document.querySelectorAll('.project-details').forEach(detail => {
      detail.style.display = 'none'; // 모든 프로젝트 설명 숨기기
    });

    const targetDetail = document.querySelector(targetId);
    if (targetDetail) {
      targetDetail.style.display = 'block'; // 클릭한 프로젝트 설명 보여주기
    }
  });
});
