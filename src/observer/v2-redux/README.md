# Redux Pattern (Observer + Actions + Reducer)

## От Observer к Redux

**v1.0 (Observer Pattern)**:

```javascript
themeObservable.notify('dark') // передаём данные напрямую
```

**v2.0 (Redux Pattern)**:

```javascript
store.dispatch({ type: 'TOGGLE_THEME' }) // передаём action, reducer решает, как изменить state
```

## Зачем Redux вместо Observer?

✅ **Централизация**: один store для всех глобальных данных (тема, язык, пользователь)  
✅ **Предсказуемость**: state меняется только через reducer (чистая функция)  
✅ **Отладка**: можно логировать все actions и воспроизводить баги  
✅ **Time-travel**: можно откатывать изменения (undo/redo)

## Что реализуем

- **v2.0**: Mini Redux для Theme Toggle
- **v2.1**: Middleware (логирование actions)
- **v2.2**: Несколько reducers (тема + язык)

## Структура

```
redux/
├── README.md
└── v2.0-theme-redux/
    ├── index.html
    ├── miniRedux.js           (createStore)
    ├── themeReducer.js        (reducer для темы)
    ├── app.js                 (UI + dispatch)
    ├── styles.css
    └── README.md
```

## Ключевые концепции Redux

### 1. Store (Хранилище)

Единственный источник истины для всего приложения.

```javascript
const store = createStore(reducer)
```

### 2. Actions (Действия)

Простые объекты, описывающие **что произошло**.

```javascript
{ type: 'TOGGLE_THEME' }
{ type: 'SET_THEME', payload: 'dark' }
```

### 3. Reducer (Редюсер)

Чистая функция, которая определяет **как изменится state**.

```javascript
function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { theme: state.theme === 'light' ? 'dark' : 'light' }
    default:
      return state
  }
}
```

### 4. Dispatch (Отправка)

Единственный способ изменить state — отправить action.

```javascript
store.dispatch({ type: 'TOGGLE_THEME' })
```

### 5. Subscribe (Подписка)

Observer Pattern для реакции на изменения state.

```javascript
store.subscribe(() => {
  console.log('State changed:', store.getState())
})
```

## Поток данных (Data Flow)

```
User Action → dispatch(action) → reducer(state, action) → new state → subscribers notify → UI updates
```

## Сравнение с Observer Pattern

| Аспект           | Observer       | Redux                       |
| ---------------- | -------------- | --------------------------- |
| Изменение данных | `notify(data)` | `dispatch(action)`          |
| Логика изменения | В подписчиках  | В reducer (централизованно) |
| Хранение state   | Разбросано     | В одном store               |
| Отладка          | Сложно         | Легко (логи actions)        |
| Предсказуемость  | Средняя        | Высокая                     |

## Ресурсы

- [Redux Fundamentals, Part 2: Concepts and Data Flow](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow)
- [Redux Fundamentals, Part 3: State, Actions, Reducers](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers)
- [Can Redux be seen as Observer Pattern?](https://stackoverflow.com/questions/40619286/can-redux-be-seen-as-observer-pattern)
