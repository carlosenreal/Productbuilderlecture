const numbersContainer = document.getElementById('numbers');
const generateBtn = document.getElementById('generate-btn');
const historyList = document.getElementById('history');

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

  // 추첨 내역에 추가
  const historyItem = document.createElement('li');
  historyItem.textContent = sortedNumbers.join(', ');
  historyList.appendChild(historyItem);
};

generateBtn.addEventListener('click', generateNumbers);
