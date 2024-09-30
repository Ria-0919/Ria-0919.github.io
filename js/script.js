// 스크롤 시 네비게이션 표시
window.addEventListener('scroll', () => {
  const nav = document.getElementById('scroll-nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// 네비게이션 버튼 클릭 시 섹션으로 스크롤
const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// 프로젝트 버튼 클릭 시 내용 표시
const projectButtons = document.querySelectorAll('.project-btn');
projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const projectContent = document.getElementById('project-content');

    // 프로젝트 내용을 업데이트 (임시 내용 추가)
    if (targetId === "#project-deception") {
      projectContent.innerHTML = `
        <h3>Project Deception</h3>
        <p>실시간 추리 마피아게임</p>
        <img src="https://via.placeholder.com/300" alt="Project Deception" />
      `;
    } else if (targetId === "#defense-game") {
      projectContent.innerHTML = `
        <h3>Defense Game</h3>
        <p>1대1 전략 디펜스 게임</p>
        <img src="https://via.placeholder.com/300" alt="Defense Game" />
      `;
    }
  });
});
