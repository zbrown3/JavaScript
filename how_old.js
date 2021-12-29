// Write your function here:
const howOld = (age,year) => {
    let yearBorn = 2021 - age;
    if (year > 2021) {
      let calculatedAge = age + (year - 2021);
      return `You will be ${calculatedAge} in the year ${year}`;
    } else if (yearBorn > year) {
      let calculatedYears = yearBorn - year;
      return `The year ${year} was ${calculatedYears} years before you were born`;
    } else {
      let calculatedAge = year - yearBorn;
      return `You were ${calculatedAge} in the year ${year}`;
    }
  };
  
  
  
  
  // Once your function is written, write function calls to test your code!
  console.log(howOld(40,1939));