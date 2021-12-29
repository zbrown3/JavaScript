const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  }
  
// Write your code below
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes; // assigns code from function to new variable
is2p2();
console.log(is2p2.name); // prints name of original function where code was copied from.