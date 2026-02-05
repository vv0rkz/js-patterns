import { Observable } from '/observable.js'

const THEME_KEY_LOCAL_STORAGE = 'theme'
export const Theme = Object.freeze({
  LIGHT: 'light',
  DARK: 'dark',
})

// ====== СОЗДАНИЕ OBSERVABLE ======
const themeObservable = new Observable()

// ====== ПОЛУЧЕНИЕ DOM-ЭЛЕМЕНТОВ ======
const $themeToggle = document.getElementById('themeToggle')
const $currentTheme = document.getElementById('currentTheme')
const $body = document.body

// ====== СОСТОЯНИЕ ======
let currentTheme = localStorage.getItem(THEME_KEY_LOCAL_STORAGE) || Theme.LIGHT

// ====== ПОДПИСКА НА ИЗМЕНЕНИЯ ======
themeObservable.subscribe((newTheme) => {
  $currentTheme.textContent = newTheme
})

themeObservable.subscribe((newTheme) => {
  $body.setAttribute('data-theme', newTheme)
})

themeObservable.subscribe((newTheme) => {
  localStorage.setItem(THEME_KEY_LOCAL_STORAGE, newTheme)
})

themeObservable.subscribe((newTheme) => {
  console.log('newTheme', newTheme)
})

// ====== ОБРАБОТЧИК КНОПКИ ======
$themeToggle.addEventListener('click', () => {
  currentTheme = currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
  themeObservable.notify(currentTheme)
})

// ====== ИНИЦИАЛИЗАЦИЯ ======
themeObservable.notify(currentTheme)
