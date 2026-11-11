import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import './style.css';

// Перемикач EN / DE: поки що лише запам'ятовує вибір і підсвічує активну мову.
// Переклади текстів додамо, коли будуть готові англійська та німецька версії.
const buttons = document.querySelectorAll('.lang-switch button');

function setLang(lang) {
  buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  try {
    localStorage.setItem('lang', lang);
  } catch {}
}

let saved = 'en';
try {
  saved = localStorage.getItem('lang') || 'en';
} catch {}
setLang(saved);

buttons.forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
