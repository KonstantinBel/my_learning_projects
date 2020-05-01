import * as types from './types'

export const inc = () => ({ type: types.INCREMENT })
export const dec = () => ({ type: types.DECREMENT })

export const disBtns = () => ({ type: types.DISABLE_BUTTONS })
export const enBtns = () => ({ type: types.ENABLE_BUTTONS })

export const asyncInc = () => dispatch => {
  dispatch(disBtns())
  setTimeout(() => {
    dispatch({ type: types.INCREMENT })
    dispatch(enBtns())
  }, 2000)
}

export const toggleTheme = payload => ({ type: types.TOGGLE_THEME, payload })
