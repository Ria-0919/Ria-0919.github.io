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

// 추가된 코드
const projectButtons = document.querySelectorAll('.project-btn');
const projectDisplay = document.getElementById('project-display');

projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const projectInfo = document.querySelector(targetId);

    if (projectInfo) {
      projectDisplay.innerHTML = projectInfo.innerHTML;
    }
  });
});
