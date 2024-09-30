window.onscroll = function() {
    var header = document.getElementById("sticky-header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.remove("hidden");
    } else {
        header.classList.add("hidden");
    }
};

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function toggleProject(projectId) {
    var project = document.getElementById(projectId);
    if (project.classList.contains("hidden")) {
        project.classList.remove("hidden");
    } else
