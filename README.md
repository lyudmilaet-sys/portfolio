# Portfolio — Liudmyla Khlystun

Сайт-портфоліо UX/UI Designer та AI UX/UI Engineer. План сайту — [docs/plan.md](docs/plan.md).
Дизайн — Figma, файл «HW-1».

Сайт: https://portfolio-chi-three-a9qegpzmjo.vercel.app/

## Стек

- [Vite](https://vite.dev) — звичайні HTML, CSS, JavaScript
- Шрифт Inter через `@fontsource/inter`
- Публікація — Vercel (Framework Preset: Vite, Build Command `npm run build`, Output `dist`)

## Запуск локально

```bash
npm install
npm run dev
```

## Що де лежить

- `index.html` — розмітка сторінки
- `src/style.css` — стилі й токени дизайну
- `src/main.js` — підключення шрифтів і перемикач мов
- `public/` — файли, які віддаються як є (сюди покласти `cv.pdf` і фото)
- `docs/plan.md` — план сайту
