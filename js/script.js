window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});

const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const targetId = e.target.getAttribute('data-target');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});
