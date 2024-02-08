# aston-project

- Предметная область: приложение персонажей вселенной "Рик и Морти".
- Использованное API: [The Rick and Morty API](https://rickandmortyapi.com/documentation)

## Deploy

[deploy](https://aston-project.netlify.app/)

## Основной функционал

- Регистрация и авторизация пользователей
- Избранные персонажи: пользователь может добавлять или удалять из списка избранных
- Поиск по имени персонажа, выпадающее меню из персонажей
- История поиска: сохранение даты и имени персонажа, возможность перейти на страницу поиска после нажатия на имя персонажа или дату

## Реализация требований

### 1 уровень (обязательный - необходимый минимум)

- [x] Реализованы Требования к функциональности.
- [ ] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем **LocalStorage** (в качестве БД используется Firebase)

#### React

- [x] Пишем функциональные компоненты c хуками: [components](src/components), [pages](src/pages).
- [x] Есть разделение на [умные](src/pages/Character/Character.tsx) и [глупые](src/components/SuggestItem/SuggestItem.tsx) компоненты.
- [x] Есть рендеринг [списков](src/pages/Main/Main.tsx).
- [x] Реализована хотя бы одна [форма](src/components/AuthForm/AuthForm.tsx).
- [x] Есть применение Контекст API: [ThemeContext](src/contexts/themeContext.tsx), [useTheme](src/hooks/useTheme.ts), [Применение](src/components/Header/Header.tsx).
- [x] Есть применение предохранителя: [ErrorBoundary](src/components/ErrorBoundary/ErrorBoundary.tsx), [Применение](src/App.tsx).
- [x] Есть хотя бы один кастомный хук: [hooks](src/hooks).
- [x] Хотя бы несколько компонентов используют PropTypes: [AuthForm](src/components/AuthForm/AuthForm.tsx), [HistoryItem](src/components/HistoryItem/HistoryItem.tsx).
- [x] Поиск не должен триггерить много запросов к серверу: [SearchForm](src/components/SearchForm/SearchForm.tsx), [useDebounce](src/hooks/useDebounce.ts).
- [x] Есть применение lazy + Suspense: [AppRouter](src/routes/AppRouter.tsx), [Layout](src/components/Layout/Layout.tsx).

#### Redux

- [x] Используем Modern Redux with Redux Toolkit: [store](src/store/store.ts).
- [x] Используем слайсы: [userSlise](src/store/slices/userSlice.ts), [favoriteSlice](src/store/slices/favoriteSlice.ts), [historySlice](src/store/slices/historySlice.ts).
- [x] Есть хотя бы одна кастомная мидлвара: [favoriteMiddleware](src/store/middlewares/favoriteMiddleware.ts).
- [x] Используется RTK Query: [characterApi](src/store/api/characterApi.ts).
- [x] Используется Transforming Responses: [characterApi](src/store/api/characterApi.ts).

### 2 уровень (необязательный)

- [x] Используется TypeScript.
- [x] Подключен storybook и созданы два, три сториса с knobs, которые показывают разные состояния компонента: [Header](src/components/Header/Header.stories.tsx), [CharacterCard](src/components/CharacterCard/CharacterCard.stories.tsx), [FavoriteButton](src/components/FavoriteButton/FavoriteButton.stories.tsx)
- [x] Использвуется Firebase для учетных записей пользователей и их Избранного и Истории поиска: [services](src/services), [useAuthActions](src/hooks/useAuthActions.ts), [useAuthListener](src/hooks/useAuthListener.ts), [thunks](src/store/thunks).
- [x] Настроен CI/CD: [main.yml](.github/workflows/main.yml).
- [x] Используются мемоизированные селекторы (createSelector): [selectors](src/store/selectors).

### Дополнительные библиотеки, которые использовались

- react-hook-form для валидации данных [AuthForm](src/components/AuthForm/AuthForm.tsx)
- react-hot-toast для отображения уведомлений [favoriteMiddleware](src/store/middlewares/favoriteMiddleware.ts)
