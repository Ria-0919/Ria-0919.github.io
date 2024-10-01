document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".nav-btn");
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const target = document.querySelector(this.dataset.target);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
