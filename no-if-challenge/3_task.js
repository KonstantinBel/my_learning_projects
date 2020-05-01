// Нужно написать функцию, удваивающую аргумент в зависимости от его типа:

// если он числового типа, то оно умножается на 2 (10 -> 20, -5.5 -> -11);
// если string, то каждая буква повторяется (‘proglib’ -> ‘pprroogglliibb’);
// если функция, то она вызывается дважды;
// если массив или объект, то функция вызывает себя для каждого элемента.

const operations = {
  number: num => num * 2,
  string: str => [].map.call(str, v => v + v).join(''),
  function: fun => { fun(); fun() },
  object: obj => Object.values(obj).forEach(v => { doubler(v) })
}

function doubler(arg) {
  console.log(operations[typeof arg](arg))
}

doubler(-10);
doubler('hey');
doubler([5, 'hello']);
doubler({ a: 5, b: 'hello' });
doubler(function() { console.log('hey yo proglib.io') });
