import { of, from, observable, Observable, interval, fromEvent, pipe, timer } from 'rxjs'
import { scan, take, map } from 'rxjs/operators'

// const stream$ = of(1, 2, 3, 4, 5)

// stream$.subscribe(val => {
//   console.log('value:', val);
// })

// const arr$ = from([1, 2, 3, 4, 5]).pipe(
//   scan((acc, val) => acc.concat(val), [])
// )

// arr$.subscribe(val => {
//   console.log('value:', val)
// })

// **********************************************************

// const stream$ = new Observable(observer => {
//   observer.next('first value')
//   setTimeout(() => observer.next('after 1000 ms'), 1000)
//   setTimeout(() => observer.complete('after 1000 ms'), 1500)
//   setTimeout(() => observer.error('Something wrong'), 2000)
//   setTimeout(() => observer.next('after 3000 ms'), 3000)
// })

// stream$.subscribe(
//   val => console.log('Val:', val),
//   err => console.warn(err),
//   () => console.log('Complete'),
// )

// stream$.subscribe({
//   next(val) { console.log(val); },
//   error(err) { console.warn(err); },
//   complete() { console.log('Complete'); },
// })

// **********************************************************

// fromEvent(document.querySelector('canvas'), 'mousemove')
//   .pipe(
//     map(e => ({
//       x: e.offsetX,
//       y: e.offsetY,
//       ctx: e.target.getContext('2d'),
//     })),
//   )
//   .subscribe(pos => {
//     pos.ctx.fillRect(pos.x, pos.y, 2, 2)
//   })

// fromEvent(document.getElementById('clear'), 'click')
//   .subscribe(() => {
//     const canvas = document.querySelector('canvas')
//     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
//   })

// **********************************************************

// const sub = interval(500).subscribe(v => {
//   console.log(v);
// })

// setTimeout(() => { sub.unsubscribe() }, 4000)

// **********************************************************
