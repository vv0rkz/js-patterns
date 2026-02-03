export function createStore(reducer) {
  let state = reducer(undefined, { type: '@@INIT' })

  const listeners = []

  function getState() {
    return state
  }

  function dispatch(action) {
    state = reducer(state, action)
    for (let listener of listeners) {
      listener()
    }
    return action
  }

  function subscribe(listener) {
    listeners.push(listener)
    return () => {
      const index = listeners.indexOf(listener)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }

  return { getState, dispatch, subscribe }
}
