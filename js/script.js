function openBook() {
    const book = document.getElementById("book");
    const content = document.querySelector(".portfolio-content");
    
    book.classList.add("open");
    
    setTimeout(() => {
        book.style.display = "none"; // 책을 숨김
        content.classList.remove("hidden"); // 콘텐츠 표시
    }, 1000); // 1초 후에 콘텐츠를 표시
}

function showSection(section) {
    const sections = document.querySelectorAll('.content > section');
    sections.forEach(s => s.classList.add('hidden')); // 모든 섹션 숨기기

    document.getElementById(section).classList.remove('hidden'); // 클릭한 섹션 보여주기
}
