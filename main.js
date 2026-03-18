const menuDisplay = document.getElementById('menu-display');
const recommendBtn = document.getElementById('recommend-btn');
const menuHistory = document.getElementById('menu-history');
const themeToggle = document.body.querySelector('#theme-toggle');
const shareSection = document.querySelector('.share-section');
const body = document.body;
const htmlLang = document.documentElement.lang;

let lastRecommendedMenu = '';

const menus = {
  ko: [
    { name: '김치찌개', desc: '한국인의 소울푸드, 얼큰한 김치찌개입니다.', tip: '두부와 돼지고기를 듬뿍 넣어 단백질을 보충하세요.' },
    { name: '된장찌개', desc: '구수한 된장 향이 일품인 전통 찌개입니다.', tip: '계절 채소를 듬뿍 넣으면 비타민 섭취에 좋습니다.' },
    { name: '제육볶음', desc: '매콤달콤한 양념이 밴 밥도둑 돼지고기 볶음입니다.', tip: '쌈채소와 함께 드시면 식이섬유를 챙길 수 있습니다.' },
    { name: '돈까스', desc: '겉바속촉, 남녀노소 즐기는 바삭한 돈까스입니다.', tip: '샐러드를 곁들여 균형 잡힌 식사를 즐기세요.' },
    { name: '초밥', desc: '신선한 해산물의 풍미를 느낄 수 있는 깔끔한 한 끼입니다.', tip: '흰살 생선부터 시작해 진한 맛의 생선 순으로 드셔보세요.' },
    { name: '치킨', desc: '오늘 하루 고생한 당신을 위한 최고의 보상입니다.', tip: '무와 함께 드시면 소화를 돕고 입맛을 깔끔하게 해줍니다.' },
    { name: '피자', desc: '다양한 토핑이 어우러진 든든한 서양식 별미입니다.', tip: '통곡물 도우를 선택하면 더욱 건강하게 즐길 수 있습니다.' },
    { name: '삼겹살', desc: '지글지글 구워 먹는 재미가 있는 고소한 삼겹살입니다.', tip: '마늘과 양파를 함께 구워 드시면 영양 궁합이 좋습니다.' },
    { name: '파스타', desc: '다양한 소스로 취향껏 즐길 수 있는 면 요리입니다.', tip: '올리브유 기반 소스는 혈관 건강에 도움을 줄 수 있습니다.' },
    { name: '떡볶이', desc: '스트레스를 날려버릴 매콤한 국민 간식 겸 식사입니다.', tip: '삶은 달걀을 추가해 단백질 균형을 맞춰보세요.' }
  ],
  en: [
    { name: 'Kimchi Stew', desc: 'A spicy and comforting Korean soul food.', tip: 'Add tofu and pork for extra protein.' },
    { name: 'Soybean Paste Stew', desc: 'A savory traditional stew with a deep nutty flavor.', tip: 'Include seasonal vegetables for extra vitamins.' },
    { name: 'Spicy Pork', desc: 'A sweet and spicy stir-fry that goes perfectly with rice.', tip: 'Eat with lettuce wraps to add fiber to your meal.' },
    { name: 'Pork Cutlet', desc: 'Crispy on the outside, juicy on the inside.', tip: 'Pair with a fresh salad for a balanced meal.' },
    { name: 'Sushi', desc: 'A clean and elegant meal featuring fresh seafood.', tip: 'Try starting with white fish and moving to richer flavors.' },
    { name: 'Fried Chicken', desc: 'The perfect reward for a long day of work.', tip: 'Pickled radishes help digestion and cleanse the palate.' },
    { name: 'Pizza', desc: 'A satisfying Western classic with various toppings.', tip: 'Choosing a whole-grain crust makes it a healthier choice.' },
    { name: 'Grilled Pork Belly', desc: 'Savory pork belly grilled to perfection.', tip: 'Grill garlic and onions together for a nutritious combination.' },
    { name: 'Pasta', desc: 'A versatile noodle dish with your choice of sauce.', tip: 'Olive oil-based sauces can be beneficial for heart health.' },
    { name: 'Tteokbokki', desc: 'A spicy and popular Korean snack turned meal.', tip: 'Add a boiled egg to balance out the protein content.' }
  ]
};

const currentMenus = menus[htmlLang] || menus.ko;

// 테마 초기화
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  if (themeToggle) themeToggle.textContent = '☀️';
}

if (themeToggle) {
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
}

const recommendMenu = () => {
  // 버튼 비활성화 (애니메이션 효과용)
  recommendBtn.disabled = true;
  menuDisplay.innerHTML = `<p class="loading-text">${htmlLang === 'en' ? 'Finding the best menu...' : '최고의 메뉴를 찾는 중...'}</p>`;

  setTimeout(() => {
    // 랜덤 메뉴 선택
    const randomIndex = Math.floor(Math.random() * currentMenus.length);
    const selected = currentMenus[randomIndex];
    lastRecommendedMenu = selected.name;

    // 화면에 표시 (고품질 컨텐츠)
    menuDisplay.innerHTML = `
      <div class="recommended-menu-card">
        <h2 class="menu-name">${selected.name}</h2>
        <p class="menu-desc">${selected.desc}</p>
        <div class="menu-tip-box">
          <strong>Tip:</strong> ${selected.tip}
        </div>
      </div>
    `;

    // 추첨 내역에 추가 (이름만)
    const historyItem = document.createElement('li');
    historyItem.textContent = selected.name;
    menuHistory.prepend(historyItem);

    // 5개 초과 시 가장 오래된 내역 삭제
    while (menuHistory.children.length > 5) {
      menuHistory.removeChild(menuHistory.lastChild);
    }
    
    // 공유 섹션 표시
    if (shareSection) {
      shareSection.classList.add('visible');
    }

    recommendBtn.disabled = false;
  }, 600);
};

recommendBtn.addEventListener('click', recommendMenu);

// Social Sharing Logic
const getShareText = () => {
  if (htmlLang === 'en') {
    return `What should I eat for dinner? Problem solved! I got recommended "${lastRecommendedMenu}"! Check it out!`;
  } else {
    return `오늘 저녁 뭐 먹지? 고민 해결! 저는 "${lastRecommendedMenu}" 추천받았어요! 여러분도 확인해보세요!`;
  }
};

const shareToFacebook = () => {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
};

const shareToX = () => {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(getShareText());
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
};

const shareToWhatsApp = () => {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(getShareText());
  window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, '_blank');
};

const shareToTelegram = () => {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(getShareText());
  window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
};

const copyLink = () => {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    const originalText = document.querySelector('.share-title').textContent;
    document.querySelector('.share-title').textContent = htmlLang === 'en' ? 'Link Copied!' : '링크가 복사되었습니다!';
    document.querySelector('.share-title').style.color = 'var(--secondary-color)';
    
    setTimeout(() => {
      document.querySelector('.share-title').textContent = originalText;
      document.querySelector('.share-title').style.color = '';
    }, 2000);
  });
};

// Web Share API support
const handleNativeShare = () => {
  if (navigator.share) {
    navigator.share({
      title: htmlLang === 'en' ? "What's for Dinner?" : "오늘 뭐 먹지?",
      text: getShareText(),
      url: window.location.href,
    }).catch(console.error);
    return true;
  }
  return false;
};

document.getElementById('share-facebook').addEventListener('click', () => {
  if (!handleNativeShare()) shareToFacebook();
});

document.getElementById('share-x').addEventListener('click', () => {
  if (!handleNativeShare()) shareToX();
});

document.getElementById('share-whatsapp').addEventListener('click', () => {
  if (!handleNativeShare()) shareToWhatsApp();
});

document.getElementById('share-telegram').addEventListener('click', () => {
  if (!handleNativeShare()) shareToTelegram();
});

document.getElementById('share-copy').addEventListener('click', copyLink);
