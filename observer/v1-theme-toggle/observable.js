// ====== КЛАСС OBSERVABLE ======

class Observable {
  constructor() {
    // Шаг 1: [Фича #1] [ЧИТАТЬ: Observer Pattern - Patterns.dev]
    // Инициализировать пустой массив observers для хранения подписчиков
  }

  subscribe(fn) {
    // Шаг 2: [Фича #1] [ЧИТАТЬ: Observer Pattern - Patterns.dev]
    // Добавить функцию fn в массив observers
    // Вернуть функцию для отписки (удаляет fn из observers)
  }

  notify(data) {
    // Шаг 3: [Фича #1] [ЧИТАТЬ: Observer Pattern - Patterns.dev]
    // Перебрать всех подписчиков в массиве observers
    // Вызвать каждого подписчика с переданными данными data
  }
}
