// Write your code here:
const reverseArray = (array1) => {
    let newArray = [];
    for (let i = array1.length - 1; i >= 0; i--) {
      newArray.push(array1[i]);
    }
    return newArray;
  }
  
  
  
  
  
  
  
  // When you're ready to test your code, uncomment the below and run:
   
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 
  // Should print ['This', 'will', 'all', 'make', 'sense.'];