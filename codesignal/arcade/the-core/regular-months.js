function solution(currMonth) {
  currMonth = currMonth.split('-').join('-01-');
  const date = new Date();
  date.setTime(Date.parse(currMonth));
  do date.setMonth(date.getMonth() + 1);
  while (date.getDay() !== 1);
  return `${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;
}

solution('02-2016');
