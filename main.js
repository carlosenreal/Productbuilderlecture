const menuDisplay = document.getElementById('menu-display');
const recommendBtn = document.getElementById('recommend-btn');
const menuHistory = document.getElementById('menu-history');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const menuList = [
  '김치찌개', '된장찌개', '제육볶음', '돈까스', '초밥', 
  '치킨', '피자', '삼겹살', '파스타', '떡볶이',
  '비빔밥', '순대국', '짜장면', '짬뽕', '탕수육',
  '스테이크', '연어덮밥', '냉면', '부대찌개', '마라탕'
];

// 테마 초기화
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '🌙';
  }
});

const recommendMenu = () => {
  // 랜덤 메뉴 선택
  const randomIndex = Math.floor(Math.random() * menuList.length);
  const selectedMenu = menuList[randomIndex];

  // 화면에 표시
  menuDisplay.innerHTML = `<div class="recommended-menu">${selectedMenu}</div>`;

  // 추첨 내역에 추가 (맨 위에 추가)
  const historyItem = document.createElement('li');
  historyItem.textContent = selectedMenu;
  menuHistory.prepend(historyItem);

  // 5개 초과 시 가장 오래된 내역 삭제
  while (menuHistory.children.length > 5) {
    menuHistory.removeChild(menuHistory.lastChild);
  }
};

recommendBtn.addEventListener('click', recommendMenu);
