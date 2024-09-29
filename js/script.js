function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.add('hidden'); // 모든 섹션 숨기기
    });
    
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.remove('hidden'); // 클릭한 섹션 보여주기
    }
}

// 초기화 시 첫 번째 섹션을 보이게 하려면 아래 주석을 해제하세요.
// document.addEventListener('DOMContentLoaded', () => showSection('profile'));
