const navButtons = document.querySelectorAll('.nav-btn');
const scrollNav = document.getElementById('scroll-nav');

window.addEventListener('scroll', () => {
  scrollNav.style.display = window.scrollY > 50 ? 'flex' : 'none';
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
