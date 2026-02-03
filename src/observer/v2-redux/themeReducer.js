// ====== THEME REDUCER ======
export const THEME = Object.freeze({
  LIGHT: 'light',
  DARK: 'dark',
})

export function themeReducer(state, action) {
  if (state === undefined) {
    return { theme: THEME.LIGHT }
  }
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { theme: state.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT }
    case 'SET_THEME':
      return { theme: action.payload }
    default:
      return state
  }
}
