function showSection(section) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(s => s.classList.remove('visible')); // 모든 섹션 숨기기

    document.getElementById(section).classList.add('visible'); // 클릭한 섹션 보여주기
}
