import { interval, fromEvent } from "rxjs";
import { map, filter, tap, take, takeLast, takeWhile, scan, reduce, switchMap } from 'rxjs/operators'

const stream$ = interval(500)
  .pipe(
    tap(v => console.log(v)),
    take(5),
    reduce((acc, v) => acc + v, 0),
  )

fromEvent(document, 'click')
  .pipe(
    switchMap(() => stream$)
  )
  .subscribe(v => console.log('Next:', v))

// const stream$ = interval(500)
//   .pipe(
//     tap(v => console.log('Tap:', v)),
//     take(5),
//     takeLast(3),
//     map(v => v * 3),
//     filter(v => v % 2),
//     takeWhile(v => v < 7),
//     scan((acc, v) => acc + v, 0),
//     reduce((acc, v) => acc + v, 0),
//   )

// stream$.subscribe({
//   next(v) { console.log('Next:', v); },
//   complete() { console.log('Complete'); }
// })
