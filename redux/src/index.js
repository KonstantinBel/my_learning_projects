import './styles.css'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { rootReducer } from './redux/root-reducer'
import * as actions from './redux/actions'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
)

addBtn.addEventListener('click', () => {
  store.dispatch(actions.inc())
})

subBtn.addEventListener('click', () => {
  store.dispatch(actions.dec())
})

asyncBtn.addEventListener('click', () => {
  store.dispatch(actions.asyncInc())
})

themeBtn.addEventListener('click', () => {
  const newTheme = document.body.className === 'light'
    ? 'dark'
    : 'light'

  store.dispatch(actions.toggleTheme(newTheme))
})


store.subscribe(() => {
  const state = store.getState();

  [addBtn, subBtn, asyncBtn, themeBtn].forEach(btn => {
    btn.disabled = state.theme.disableButtons
  })

  counter.textContent = state.counter
  localStorage.counter = state.counter

  document.body.className = state.theme.value
  localStorage.theme = state.theme.value
})

store.dispatch({ type: '__INIT_APP__' })
