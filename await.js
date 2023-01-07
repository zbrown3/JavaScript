const brainstormDinner = () => {
    return new Promise((resolve, reject) => {
    console.log(`I have to decide what's for dinner...`)
    setTimeout(() => {
      console.log('Should I make salad...?');
      setTimeout(() => {
        console.log('Should I make ramen...?');
        setTimeout(() => {
          console.log('Should I make eggs...?');
          setTimeout(() => {
            console.log('Should I make chicken...?');
            resolve('beans');
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
});
};

async function announceDinner() {
    // Write your code below:
    let resolvedValue = await brainstormDinner();
    console.log(`I'm going to make ${resolvedValue} for dinner.`);
    
}
  
announceDinner();
  


/*
The await keyword can only be used inside an async function.
await is an operator: it returns the resolved value of a promise.
await halts, or pauses, the execution of our async function until a given promise is resolved.
*/