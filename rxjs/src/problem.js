import { interval } from 'rxjs'
import { filter, map, take, scan } from 'rxjs/operators'

const btn = document.getElementById('interval')
const rxjsBtn = document.getElementById('rxjs')
const display = document.querySelector('#problem .result')

const people = [
  {name: 'Vladilen', age: 25},
  {name: 'Elena', age: 17},
  {name: 'Ivan', age: 18},
  {name: 'Igor', age: 14},
  {name: 'Lisa', age: 32},
  {name: 'Irina', age: 23},
  {name: 'Oleg', age: 20}
] 

const makeItemGetter = (arr) => {
  let count = arr.length;
  const length = arr.length;
  return () => {
    if (count === 0) { return null; }
    const item = arr[length - count];
    count--;
    return item;
  }
}

btn.addEventListener('click', () => {
  const filteredPeoples = people.filter(item => item.age >= 18);
  const itemGetter = makeItemGetter(filteredPeoples);
  const interval = setInterval(() => {
    const item = itemGetter();
    if (!item) {
      clearInterval(interval);
      return;
    }
    display.innerHTML+= `<div>${item.name}</div>`
  }, 1000)
});

rxjsBtn.addEventListener('click', () => {
  rxjsBtn.disabled = true;

  interval(1000)
    .pipe(
      take(people.length),
      filter(v => people[v].age >= 18),
      map(v => people[v].name),
      scan((acc, v) => acc.concat(v), []),
    )
    .subscribe(res => {
      display.textContent = res.join(' ');
    }, null, () => rxjsBtn.disabled = false)
});
