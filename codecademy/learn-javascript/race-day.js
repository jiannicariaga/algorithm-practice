/* eslint-disable no-console */

const age = 25;
const registeredEarly = true;
let raceNumber = Math.floor(Math.random() * 1000);

if (age > 18 && registeredEarly) {
  raceNumber += 1000;
  console.log(`Runner ${raceNumber} will race at 9:30AM.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`Runner ${raceNumber} will race at 11:00AM.`);
} else if (age < 18) {
  console.log(`Runner ${raceNumber} will race at 12:30PM.`);
} else {
  console.log(`Runner ${raceNumber}, please see the registration desk.`);
}
