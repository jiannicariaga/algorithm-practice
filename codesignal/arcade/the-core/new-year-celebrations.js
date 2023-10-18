function solution(takeOffTime, minutes) {
  takeOffTime = takeOffTime === '00:00' ? '2019-01-01 ' + takeOffTime : '2018-12-31 ' + takeOffTime;
  const date = new Date();
  date.setTime(Date.parse(takeOffTime));
  let accuTime = 0;
  let celebrations = 0;
  let lastYear = date.getFullYear();
  for (let i = 0; i < minutes.length; i++) {
    minutes[i] -= accuTime;
    if (date.getHours() === 0 && date.getMinutes() === 0) celebrations++;
    date.setMinutes(date.getMinutes() + minutes[i]);
    if (lastYear < date.getFullYear()) celebrations++;
    date.setHours(date.getHours() - 1);
    lastYear = date.getFullYear();
    accuTime += minutes[i];
  }
  if (date.getFullYear() === 2018 || (date.getHours() === 0 && date.getMinutes() === 0)) celebrations++;
  return celebrations;
}

solution('23:35', [60, 90, 140]);

// (╯°□°)╯︵ ┻━┻
