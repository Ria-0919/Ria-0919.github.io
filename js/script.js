window.onscroll = function() {
    var header = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.display = "block";
    } else {
        header.style.display = "none";
    }
};

function showProject(projectId) {
    var projects = document.getElementsByClassName("project-details");
    for (var i = 0; i < projects.length; i++) {
        projects[i].style.display = "none";
    }
    document.getElementById(projectId).style.display = "block";
}

function showOverlay(overlayId) {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "flex";
    // You can add more logic to display specific content based on overlayId
}

function closeOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}
