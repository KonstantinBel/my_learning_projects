// Необходимо написать функцию, которая принимает
// один аргумент — дату (как new Date()),
// а возвращает строку “weekend” или “weekday”.

// 0 и 6 выходные

function weekendOrWeekday(inputDate) {
  const day = inputDate.getDay(); // 0, 1, 2, 3, 4, 5, 6
  const days = ['weekend', 'weekday', 'weekday', 'weekday', 'weekday', 'weekday', 'weekend']
  return days[day]
}

console.log(weekendOrWeekday(new Date()))
