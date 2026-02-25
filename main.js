const numbersContainer = document.getElementById('numbers');
const generateBtn = document.getElementById('generate-btn');
const historyList = document.getElementById('history');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

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

const generateNumbers = () => {
  // 기존 번호 삭제
  numbersContainer.innerHTML = '';

  // 1~45 사이의 숫자 6개 생성
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }

  const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

  // 화면에 번호 표시
  sortedNumbers.forEach(number => {
    const numberEl = document.createElement('div');
    numberEl.classList.add('number');
    numberEl.textContent = number;
    numbersContainer.appendChild(numberEl);
  });

  // 추첨 내역에 추가 (맨 위에 추가)
  const historyItem = document.createElement('li');
  historyItem.textContent = sortedNumbers.join(', ');
  historyList.prepend(historyItem);

  // 5개 초과 시 가장 오래된 내역 삭제
  while (historyList.children.length > 5) {
    historyList.removeChild(historyList.lastChild);
  }
};

generateBtn.addEventListener('click', generateNumbers);
