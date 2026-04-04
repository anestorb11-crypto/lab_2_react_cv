// 1. СИСТЕМНА ІНФОРМАЦІЯ → localStorage → footer
(function() {
  const info = {
    userAgent:  navigator.userAgent,
    platform:   navigator.platform,
    language:   navigator.language,
    cookiesOn:  navigator.cookieEnabled ? 'Так' : 'Ні',
    screenRes:  screen.width + ' × ' + screen.height,
    colorDepth: screen.colorDepth + ' bit',
    online:     navigator.onLine ? 'Так' : 'Ні',
    timezone:   Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  localStorage.setItem('sysInfo', JSON.stringify(info));

  const labels = {
    userAgent:  'User Agent',
    platform:   'Платформа',
    language:   'Мова',
    cookiesOn:  'Cookies',
    screenRes:  'Роздільна здатність',
    colorDepth: 'Глибина кольору',
    online:     'Онлайн',
    timezone:   'Часовий пояс',
  };

  const container = document.getElementById('sys-info');
  for (const [key, val] of Object.entries(info)) {
    const row = document.createElement('div');
    row.className = 'sys-row';
    row.innerHTML =
      '<span class="sys-key">' + (labels[key] || key) + '</span>' +
      '<span class="sys-val">' + val + '</span>';
    container.appendChild(row);
  }
})();


// 2. ВІДГУКИ З API (варіант 10)
(async function() {
  const loadingEl = document.getElementById('reviews-loading');
  const listEl    = document.getElementById('reviews-list');
  try {
    const res  = await fetch('https://jsonplaceholder.typicode.com/posts/10/comments');
    const data = await res.json();
    loadingEl.style.display = 'none';
    data.forEach(function(c) {
      const card = document.createElement('div');
      card.className = 'review-card';
      card.innerHTML =
        '<div class="review-name">'  + c.name  + '</div>' +
        '<div class="review-email">' + c.email + '</div>' +
        '<div class="review-body">'  + c.body  + '</div>';
      listEl.appendChild(card);
    });
  } catch(e) {
    loadingEl.textContent = 'Помилка завантаження відгуків.';
  }
})();


// 3. МОДАЛЬНЕ ВІКНО (через 1 хвилину)
var overlay  = document.getElementById('modal-overlay');
var closeBtn = document.getElementById('modal-close');

if (!sessionStorage.getItem('modalShown')) {
  setTimeout(function() { overlay.classList.add('active'); }, 60000);
}
closeBtn.addEventListener('click', function() {
  overlay.classList.remove('active');
  sessionStorage.setItem('modalShown', 'true');
});
overlay.addEventListener('click', function(e) {
  if (e.target === overlay) {
    overlay.classList.remove('active');
    sessionStorage.setItem('modalShown', 'true');
  }
});
document.getElementById('contact-form').addEventListener('submit', function() {
  sessionStorage.setItem('modalShown', 'true');
});


// 4. ПЕРЕМИКАЧ ДЕНЬ / НІЧ
var root     = document.getElementById('html-root');
var themeBtn = document.getElementById('theme-btn');

function applyTheme(theme) {
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    themeBtn.textContent = '☀ Денна';
  } else {
    root.removeAttribute('data-theme');
    themeBtn.textContent = '☾ Нічна';
  }
  localStorage.setItem('theme', theme);
}

var saved = localStorage.getItem('theme');
if (saved) {
  applyTheme(saved);
} else {
  var h = new Date().getHours();
  applyTheme(h >= 7 && h < 21 ? 'light' : 'dark');
}

themeBtn.addEventListener('click', function() {
  var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
});