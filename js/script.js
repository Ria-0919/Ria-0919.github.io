function showSection(section) {
    const sections = document.querySelectorAll('section');
    sections.forEach(s => {
        s.style.display = 'none';
    });
    document.getElementById(section).style.display = 'block';
}

function showSubSection(project) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(p => {
        p.classList.remove('active');
    });
    document.getElementById(project).classList.add('active');
}

function openOverlay(project) {
    const overlay = document.getElementById('overlay');
    const overlayContent = document.getElementById('overlayContent');
    overlayContent.innerHTML = getProjectDetails(project);
    overlay.classList.add('active');
}

function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('active');
}

function getProjectDetails(project) {
    switch (project) {
        case 'gameDeception':
            return `<h3>Project Deception</h3><p>실시간 추리 마피아 게임입니다.</p><p>자세한 설명 내용이 여기에 들어갑니다.</p>`;
        case 'defenseGame':
            return `<h3>Defense Game</h3><p>1대1 전략 디펜스 게임입니다.</p><p>자세한 설명 내용이 여기에 들어갑니다.</p>`;
        case 'adventureGame':
            return `<h3>Adventure Game</h3><p>플레이어가 탐험하는 판타지 RPG입니다.</p><p>자세한 설명 내용이 여기에 들어갑니다.</p>`;
        case 'gameCharacter':
            return `<h3>Game Character Design</h3><p>캐릭터 디자인 프로젝트입니다.</p><p>자세한 설명 내용이 여기에 들어갑니다.</p>`;
        case 'fantasyLandscapes':
            return `<h3>Fantasy Landscapes</h3><p>다양한 판타지 배경을 그린 프로젝트입니다.</p><p>자세한 설명 내용이 여기에 들어갑니다.</p>`;
        case 'conceptArt':
            return `<h3>Concept Art</h3><p>게임을 위한 개념 미술 프로젝트입니다.</p><p>자세한 설명 내용이 여기에 들어갑니다.</p>`;
        case 'characterModeling':
            return `<h3>3D Character Modeling</h3><p>게임 캐릭터 모델링 작업입니다.</p><p>자세한 설명 내용이 여기에 들어갑니다.</p>`;
        case 'environmentModeling':
            return `<h3>Game Environment Modeling</h3><p>게임 환경 모델링 프로젝트입니다.</p><p>자세한 설명 내용이 여기에 들어갑니다.</p>`;
        case 'propsDesign':
            return `<h3>3D Props Design</h3><p>게임 소품 디자인 프로젝트입니다.</p><p>자세한 설명 내용이 여기에 들어갑니다.</p>`;
        default:
            return `<h3>Unknown Project</h3><p>상세 정보를 찾을 수 없습니다.</p>`;
    }
}
