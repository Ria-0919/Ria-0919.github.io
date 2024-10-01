document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".nav-btn");
    const header = document.getElementById("scroll-nav");

    // 상단 네비게이션 표시/숨기기
    window.onscroll = function() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.style.display = "block";
        } else {
            header.style.display = "none";
        }
    };

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const target = document.querySelector(this.dataset.target);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
