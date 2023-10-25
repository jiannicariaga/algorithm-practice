function solution(year, daysOfTheWeek, holidays) {
  const date = new Date();
  daysOfTheWeek = daysOfTheWeek.map(day => day % 7);
  let makeUpDays = 0;
  for (let i = 0; i < holidays.length; i++) {
    if (Number(holidays[i].split('-')[0]) >= 9) date.setTime(Date.parse(holidays[i] + '-' + year));
    else date.setTime(Date.parse(holidays[i] + '-' + (year + 1)));
    if (daysOfTheWeek.includes(date.getDay())) makeUpDays++;
  }
  return makeUpDays;
}

solution(2015, [2, 3], ['11-04', '02-22', '02-23', '03-07', '03-08', '05-09']);
