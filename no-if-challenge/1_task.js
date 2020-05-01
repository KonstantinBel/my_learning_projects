// Допустим, дан массив целых чисел наподобие следующего.
// Как посчитать нечётные элементы?

const arrayOfIntegers = [1, 4, 5, 9, 0, -2, 5];

// c if
const count1 = arrayOfIntegers.reduce((acc, cur) => cur % 2 !== 0 ? acc + 1 : acc, 0)
console.log(count1)

// c && тоже можно считать if'ом
let count2 = 0
arrayOfIntegers.forEach(val => val % 2 !== 0 && count2++)
console.log(count2)

// решение полностью без if
let count3 = 0
arrayOfIntegers.forEach(val => count3 += Math.abs(val % 2))
console.log(count3)


// Сделаем то же самое для четных чисел
let count4 = 0
arrayOfIntegers.forEach(val => -(count4 -= Math.abs(val % 2) - 1))
console.log(count4)
