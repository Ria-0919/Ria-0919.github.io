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

// 책 넘기기 애니메이션 토글 함수
function toggleBook() {
  const book = document.getElementById("book");
  book.classList.toggle("open");
}
