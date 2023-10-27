function solution(x, weekDay, month, yearNumber) {
  const date = new Date();
  date.setTime(Date.parse(`${month}-01-${yearNumber}`));
  const initMonth = date.getMonth();
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  let day = 0;
  while (x > 0) {
    if (daysOfWeek[date.getDay()] === weekDay) {
      x--;
      if (date.getMonth() !== initMonth) return -1;
    }
    date.setDate(date.getDate() + 1);
    day++;
  }
  return day;
}

solution(3, 'Wednesday', 'November', 2016);
