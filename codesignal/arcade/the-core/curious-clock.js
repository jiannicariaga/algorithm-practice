function solution(someTime, leavingTime) {
  const date = new Date();
  date.setTime(2 * Date.parse(someTime) - Date.parse(leavingTime));
  const year = date.getFullYear();
  const month = '0' + (date.getMonth() + 1);
  const day = '0' + date.getDate();
  const hours = '0' + date.getHours();
  const minutes = '0' + date.getMinutes();
  return `${year}-${month.slice(-2)}-${day.slice(-2)} ${hours.slice(-2)}:${minutes.slice(-2)}`;
}

solution('2016-08-26 22:40', '2016-08-29 10:00');
