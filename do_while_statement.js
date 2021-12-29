// Write your code below
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
  cupsAdded += 1;
  cupsOfSugarNeeded -= 1;
} while (cupsAdded < cupsOfSugarNeeded) {
  cupsAdded += 1;
  cupsOfSugarNeeded -= 1;
  console.log(cupsAdded);
}