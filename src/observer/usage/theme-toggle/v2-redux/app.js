import { createStore } from './../../../realizations/redux-store.js'
import { themeReducer } from './themeReducer.js'

// ====== СОЗДАНИЕ STORE ======

const store = createStore(themeReducer)

// ====== ПОЛУЧЕНИЕ DOM-ЭЛЕМЕНТОВ ======

const themeToggle = document.getElementById('themeToggle')
const currentThemeText = document.getElementById('currentThemeText')
const body = document.body

// ====== ФУНКЦИЯ ОБНОВЛЕНИЯ UI ======

function render() {
  const state = store.getState()
  body.setAttribute('data-theme', state.theme)
  currentThemeText.textContent = state.theme
  console.log('State updated:', state)
}

// ====== ПОДПИСКА НА ИЗМЕНЕНИЯ (Observer Pattern) ======

store.subscribe(render)

// ====== ОБРАБОТЧИК КНОПКИ ======

themeToggle.addEventListener('click', () => {
  store.dispatch({ type: 'TOGGLE_THEME' })
})
// ====== ИНИЦИАЛИЗАЦИЯ UI ======

render()
