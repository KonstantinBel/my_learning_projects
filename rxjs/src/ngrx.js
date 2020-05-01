import { Subject, of, merge, throwError, timer } from "rxjs"
import { startWith, publishReplay, refCount, scan, filter, delay, switchMap, map, switchMapTo, catchError } from 'rxjs/operators'

function stateReducer(state, action) {
  switch(action.type) {
    case 'load':
      return {
        ...state,
        error: null,
        loading: true,
      }

    case 'load success':
      return {
        ...state,
        items: action.payload,
        loading: false,
      }
      
    case 'load failed':
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
      
    default:
      return state
  }
}

function ofType(type) {
  return filter(action => type === action.type)
}

function load() {
  return of([1, 2, 3]).pipe(
    delay(1000)
  )
}

function loadWithError() {
  return timer(1000).pipe(
    switchMapTo(throwError('Something wrong!'))
  )
}

const defaultState = {
  items: [],
  loading: false,
  error: null,
}

const actions$ = new Subject()

const load$ = actions$.pipe(
  ofType('load'),
  switchMap(() => loadWithError().pipe(
    map(data => ({
      type: 'load success',
      payload: data,
    })),
    catchError(error => of({
      type: 'load failed',
      payload: error,
    })),
  )),
)

const dispatcher$ = merge(actions$, load$)

const state$ = dispatcher$.pipe(
  startWith(defaultState),
  scan(stateReducer),
  publishReplay(1),
  refCount(),
)

state$.subscribe({
  next: v => console.log('Next state:', v),
  complete: () => console.log('Completed state'),
})

// load$.subscribe({
//   next: v => console.log('Next load:', v),
//   complete: () => console.log('Completed load'),
// })






window.a = actions$
window.s = state$
window.l = load$
window.d = dispatcher$
