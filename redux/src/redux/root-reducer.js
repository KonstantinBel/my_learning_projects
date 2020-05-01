import * as types from './types'
import { combineReducers } from 'redux'

function counterReducer(state = Number(localStorage.counter || 0), action) {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1
  
    case types.DECREMENT:
      return state - 1

    default:
      return state
  }
}

function themeReducer(
  state = {
    value: localStorage.theme || 'light',
    disableButtons: false,
  },
  action
) {
  switch (action.type) {
    case types.TOGGLE_THEME:
      return { ...state, value: action.payload }

    case types.DISABLE_BUTTONS:
      return { ...state, disableButtons: true }
  
    case types.ENABLE_BUTTONS:
      return { ...state, disableButtons: false }
  
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
})
