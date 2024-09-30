window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 100) {
    header.style.display = 'flex';
  } else {
    header.style.display = 'none';
  }
});

const chapterButtons = document.querySelectorAll('.chapter-button');
chapterButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const target = document.querySelector(e.target.dataset.target);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
