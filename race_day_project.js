let raceNumber = Math.floor(Math.random() * 1000);
const earlyRegister = false;
const runnerAge = 25;
if (runnerAge > 18 && earlyRegister === true) {
  raceNumber += 1000;
}
if (runnerAge > 18 && earlyRegister === true) {
  console.log(`Your race will begin at 9:30 am and your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && earlyRegister === false) {
  console.log(`Your race will begin at 11:00 am and your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`Your race will begin at 12:30 pm and your race number is ${raceNumber}.`)
} else {
  console.log('Please see the registration desk.')
}