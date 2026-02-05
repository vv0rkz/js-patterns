import { Observable } from '../observable.js'

/**
 * Создает Store на основе Observable pattern
 * @param {Function} reducer - Функция-редьюсер (state, action) => newState
 * @param {*} initialState - Начальное состояние
 * @returns {Object} Store с методами getState, dispatch, subscribe
 */
export function createStore(reducer, initialState) {
  const observable = new Observable()
  let state = initialState ?? reducer(undefined)

  function getState() {
    return state
  }

  function dispatch(action) {
    state = reducer(state, action)
    observable.notify()
  }

  function subscribe(listener) {
    observable.subscribe(listener)

    return () => {
      observable.unsubscribe(listener)
    }
  }

  return { getState, dispatch, subscribe }
}
