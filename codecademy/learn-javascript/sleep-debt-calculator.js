/* eslint-disable no-console */

const getActualSleepHours = () => 6 + 5 + 5 + 7 + 10 + 8 + 7;
const getIdealSleepHours = hours => hours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) console.log('you got the perfect amount of sleep.');
  else if (actualSleepHours > idealSleepHours) console.log('you got more sleep than needed.');
  else if (actualSleepHours < idealSleepHours) console.log('you should get some rest.');
};

calculateSleepDebt();
