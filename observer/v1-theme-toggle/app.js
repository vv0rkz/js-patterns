// ====== СОЗДАНИЕ OBSERVABLE ======

// Шаг 1: [Фича #1] [ЧИТАТЬ: Observer Pattern - Patterns.dev]
// Создать экземпляр Observable для темы (назвать themeObservable)
// Создать переменную currentTheme со значением 'light'

// ====== ПОЛУЧЕНИЕ DOM-ЭЛЕМЕНТОВ ======

// Шаг 2: [Фича #2] [ЧИТАТЬ: DOM API - MDN]
// Получить элементы через getElementById:
// - button с id="themeToggle"
// - span с id="currentTheme"
// - body через document.body

// ====== ПОДПИСКА НА ИЗМЕНЕНИЯ ======

// Шаг 3: [Фича #2] [ЧИТАТЬ: Observer Pattern - Patterns.dev]
// Подписчик 1: установить атрибут data-theme у body с переданной темой

// Шаг 4: [Фича #2] [ЧИТАТЬ: Observer Pattern - Patterns.dev]
// Подписчик 2: обновить textContent элемента currentTheme с переданной темой

// Шаг 5: [Фича #2] [ЧИТАТЬ: Observer Pattern - Patterns.dev]
// Подписчик 3: логировать в console переданную тему

// ====== ОБРАБОТЧИК КНОПКИ ======

// Шаг 6: [Фича #3] [ЧИТАТЬ: Event Listeners - MDN]
// Добавить обработчик click на кнопку themeToggle
// Внутри обработчика:
// - переключить currentTheme между 'light' и 'dark'
// - вызвать themeObservable.notify с новой темой
