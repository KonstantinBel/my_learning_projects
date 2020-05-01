export default (rootReducer, initialState = {}) => {
  let state = rootReducer(initialState, { type: '__INIT__' })
  const observables = []

  return {
    dispatch(action) {
      state = rootReducer(state, action)
      observables.forEach(callback => { callback() })
    },
    subscribe(callback) {
      observables.push(callback)
    },
    getState() {
      return state
    },
  }
}
