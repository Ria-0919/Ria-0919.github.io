function openBook() {
    const book = document.getElementById("book");
    const content = document.querySelector(".portfolio-content");
    
    // 책이 펼쳐지는 애니메이션 효과
    book.classList.add("open");
    
    // 책이 펼쳐진 후 콘텐츠를 보여줌
    setTimeout(() => {
        book.style.display = "none"; // 책을 숨김
        content.classList.remove("hidden"); // 콘텐츠 표시
    }, 1000); // 1초 후에 콘텐츠를 표시
}
