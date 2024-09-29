function showSection(sectionId) {
    // 모든 섹션 숨기기
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.remove('visible');
    });

    // 선택된 섹션 보이기
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('visible');
    }
}
