import { fromEvent, pipe, interval } from 'rxjs'
import { tap, map, bufferCount, delay, bufferWhen } from 'rxjs/operators'

const dataHandler = () => pipe(
  // tap(v => console.log('Tap:', v)),
  tap(v => v.preventDefault()),
  map(v => v.key),
  bufferCount(5),
  map(v => v.join(''))
);

const keysStream = fromEvent(document, 'keydown').pipe(dataHandler())
keysStream.subscribe(console.log)

// of(1, 2, 3, 4, 5)
//   .pipe(dataHandler())
//   .subscribe(v => console.log('Test next:', v))
