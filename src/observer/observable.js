// ====== КЛАСС OBSERVABLE ======

export class Observable {
  #observers = []

  constructor() {
    // Приватное поле #observers инициализируется выше
  }

  subscribe(fn) {
    this.#observers.push(fn)
  }

  unsubscribe(observer) {
    const index = this.#observers.indexOf(observer)
    if (index > -1) {
      this.#observers.splice(index, 1)
    }
  }

  notify(data) {
    for (const fn of this.#observers) {
      fn(data)
    }
  }
}
