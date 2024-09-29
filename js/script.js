function showSection(section) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(s => s.classList.remove('visible')); // 모든 섹션 숨기기

    document.getElementById(section).classList.add('visible'); // 클릭한 섹션 보여주기
}

// 처음 페이지 로드 시 프로필 섹션 보이기
document.addEventListener('DOMContentLoaded', () => {
    showSection('profile');
});
