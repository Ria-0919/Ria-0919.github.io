// 스크롤 시 상단 네비게이션 표시
window.addEventListener('scroll', function() {
  var scrollNav = document.getElementById('scroll-nav');
  if (window.scrollY > 200) {
    scrollNav.classList.remove('hidden');
  } else {
    scrollNav.classList.add('hidden');
  }
});
