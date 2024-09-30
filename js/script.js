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



// 프로젝트 토글

function toggleProject(projectId) {

    const project = document.getElementById(projectId);

    project.classList.toggle('hidden');

}



// 더 알아보기 상세 내용 표시

function showMore(detailsId) {

    const details = document.getElementById(detailsId);

    details.classList.toggle('hidden');

}
