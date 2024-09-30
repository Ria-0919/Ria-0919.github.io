window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.display = "flex";
    } else {
        navbar.style.display = "none";
    }
};

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function toggleProject(detailsId) {
    const details = document.getElementById(detailsId);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
