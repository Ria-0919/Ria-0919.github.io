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
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const projectButtons = document.querySelectorAll('.project-btn');
const projectDetails = document.querySelectorAll('.project-details');

projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetDetail = document.getElementById(targetId);

    if (targetDetail) {
      targetDetail.style.display = targetDetail.style.display === 'none' ? 'block' : 'none';
    }
  });
});
