import { Subject, BehaviorSubject, ReplaySubject, of, Observable } from "rxjs"
import { delay, mergeMap, timeInterval, startWith } from "rxjs/operators"

document.addEventListener('click', () => {
  const stream$ = new ReplaySubject()

  stream$.next('Hello')
  stream$.next('111')
  stream$.next('222')

  stream$.subscribe(v => console.log('Value:', v))
})
