# АТМОС — Студия дизайна интерьеров

Лендинг для студии дизайна интерьеров "АТМОС" в Барнауле.

## Технологии

- React + TypeScript
- Vite
- Tailwind CSS
- Адаптивный дизайн (mobile-first)

## Локальная разработка

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка для production
npm run build

# Предпросмотр production-сборки
npm run preview
```

## Публикация в интернете

### Вариант 1: Netlify (рекомендуется)

1. **Зарегистрируйтесь на [Netlify](https://netlify.com)** (если ещё нет аккаунта)

2. **Загрузите проект на GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/ВАШ_ЛОГИН/atmos-site.git
   git push -u origin main
   ```

3. **Подключите репозиторий к Netlify:**
   - Войдите в Netlify
   - Нажмите "Add new site" → "Import an existing project"
   - Выберите GitHub и авторизуйтесь
   - Выберите репозиторий `atmos-site`

4. **Настройте параметры сборки:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18 или выше (укажите в переменных окружения `NODE_VERSION=18`)

5. **Нажмите "Deploy site"**

Сайт будет доступен по адресу вида `https://ваш-сайт.netlify.app`

### Вариант 2: Vercel

1. **Зарегистрируйтесь на [Vercel](https://vercel.com)**

2. **Загрузите проект на GitHub** (см. шаг 2 выше)

3. **Импортируйте проект в Vercel:**
   - Войдите в Vercel
   - Нажмите "Add New..." → "Project"
   - Выберите GitHub репозиторий `atmos-site`

4. **Vercel автоматически определит настройки:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

5. **Нажмите "Deploy"**

Сайт будет доступен по адресу вида `https://ваш-сайт.vercel.app`

### Вариант 3: GitHub Pages

1. **Установите пакет для деплоя:**
   ```bash
   npm install -D gh-pages
   ```

2. **Добавьте в `package.json`:**
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Соберите и задеплойте:**
   ```bash
   npm run build
   npm run deploy
   ```

4. **Включите GitHub Pages:**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`

Сайт будет доступен по адресу `https://ВАШ_ЛОГИН.github.io/atmos-site/`

## Настройка домена

### Netlify:
1. Settings → Domain management
2. Add custom domain
3. Следуйте инструкциям по настройке DNS

### Vercel:
1. Settings → Domains
2. Add domain
3. Следуйте инструкциям по настройке DNS

## Структура проекта

```
atmos-site/
├── public/
│   └── favicon.svg          # Иконка сайта
├── src/
│   ├── App.tsx              # Основной компонент
│   ├── main.tsx             # Точка входа
│   └── index.css            # Глобальные стили
├── index.html               # HTML шаблон
├── package.json             # Зависимости
├── vite.config.ts           # Конфигурация Vite
└── README.md                # Этот файл
```

## Особенности

- **Адаптивный дизайн** — корректно отображается на мобильных, планшетах и десктопах
- **Анимации** — плавное появление элементов при скролле, эффектная анимация LiDAR-визуала
- **Модальное окно** — подробное описание услуги дистанционного дизайна по LiDAR-скану
- **SEO-оптимизация** — мета-теги, Open Graph для красивого отображения в соцсетях
- **Быстрая загрузка** — оптимизированная сборка, ленивая загрузка шрифтов

## Контакты

- **Телефоны:**
  - Андрей: +7 (923) 643-38-50
  - Роман: +7 (921) 666-90-66
- **Email:** atmoc@internet.ru
- **ВКонтакте:** https://vk.ru/atmos.barnaul
- **Instagram:** https://www.instagram.com/atmosdizain.brn

## Лицензия

© 2026 АТМОС. Все права защищены.
