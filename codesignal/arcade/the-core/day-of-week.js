function solution(birthdayDate) {
  const date = new Date();
  date.setTime(Date.parse(birthdayDate));
  const dayOfWeek = date.getDay();
  let years = 0;
  do {
    years++;
    birthdayDate = birthdayDate.replace(/(\d{4})$/, (_, y) => Number(y) + 1);
    date.setTime(Date.parse(birthdayDate));
  } while (Number(birthdayDate.split('-')[0]) !== date.getMonth() + 1 || date.getDay() !== dayOfWeek);
  return years;
}

solution('02-01-2016');

// (╯°□°)╯︵ ┻━┻
