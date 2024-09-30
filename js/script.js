document.addEventListener('scroll', function() {
    const header = document.getElementById('sticky-header');
    if (window.scrollY > 50) {
        header.classList.remove('hidden');
    } else {
        header.classList.add('hidden');
    }
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

function toggleProject(projectId) {
    const project = document.getElementById(projectId);
    const allProjects = document.querySelectorAll('.project');

    // 다른 프로젝트 숨기기
    allProjects.forEach((proj) => {
        if (proj !== project) {
            proj.classList.add('hidden');
        }
    });

    // 선택한 프로젝트 토글
    project.classList.toggle('hidden');
}

function showMore(detailId) {
    const details = document.getElementById(detailId);
    details.classList.toggle('hidden');
}
