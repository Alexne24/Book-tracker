# Архитектура Book Tracker

## Проекты

### frontend (основное приложение)
React 19 + Vite 7 + TypeScript 5.9. Отображает коллекцию книг, статусы чтения, рейтинги и рекомендации.

Структура:
- `src/pages/` — страницы
- `src/App.tsx` — роутинг
- `src/main.tsx` — точка входа

### ui-library (библиотека общих компонентов)
Переиспользуемые компоненты. Подключается в frontend как `"@book-tracker/ui-library": "file:../ui-library"`.

Структура:
- `src/BookCard/BookCard.tsx` — карточка книги
- `src/index.ts` — публичный экспорт

## Библиотеки

| Библиотека | Версия | Назначение |
| react | ^19.3.0 | UI |
| react-dom | ^19.3.0 | DOM |
| react-router-dom | ^7.9.0 | Роутинг |
| vite | ^7.1.11 | Сборка |
| typescript | ~5.9.3 | Типизация |
| jest | ^30.2.0 | Тесты |
| @testing-library/react | ^16.3.0 | Тесты компонентов |

## Компоненты ui-library
- `BookCard` — отображает название, автора, рейтинг

## Роутинг frontend
- `/` — LibraryPage (коллекция)
- `/book/:id` — BookPage (страница книги с параметром)
- `/recommendations` — RecommendationsPage
- `/profile` — ProfilePage (защищённый)
- `/login` — LoginPage
