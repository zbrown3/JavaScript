// Write your code here:
const isTheDinnerVegan = arr => {
    let newArray = [];
    arr.forEach(i => newArray.push(i.source));
    if (newArray.every(i => i === 'plant') === true) {
      return true
    } else {return false};
  }
  
  
  
  
  
  
  
  // Feel free to comment out the code below to test your function
  
  const dinner =  [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];
  
  console.log(isTheDinnerVegan(dinner))
  // Should print false