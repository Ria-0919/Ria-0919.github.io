// 섹션으로 스크롤 이동

function scrollToSection(sectionId) {

    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });

}



// 스크롤할 때 상단 내비게이션 보이기

window.addEventListener('scroll', function() {

    const header = document.getElementById('sticky-header');

    if (window.scrollY > 300) {

        header.classList.add('visible');

    } else {

        header.classList.remove('visible');

    }

});



// 프로젝트 전환

function showProject(projectId) {

    const projects = document.querySelectorAll('.project');

    projects.forEach(project => project.classList.add('hidden'));

    document.getElementById(projectId).classList.remove('hidden');

}



// 프로젝트 상세 페이지 열기 (새 창)

function openProjectDetails() {

    window.open('project-details.html', '_blank');

}
