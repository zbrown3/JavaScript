let cookBeans = () => {
    return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('beans');
     }, 1000);
   });
};
  
let steamBroccoli = () => {
   return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('broccoli');
     }, 1000);
   });
};
  
let cookRice = () => {
   return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('rice');
     }, 1000);
   });
};
  
let bakeChicken = () => {
   return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('chicken');
     }, 1000);
   });
};

const serveDinnerAgain = async () => {
    let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()])
    console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`)
}
  
serveDinnerAgain();

/*
We can pass an array of promises as the argument to Promise.all(), and it will return a single promise.
This promise will resolve when all of the promises in the argument array have resolved.  This promise's
resolve values will be an array containing the resolved values of each promise from the argument array.
Promise.all() has the benefit of failing fast, meaning it won't wait for the rest of the async actions to
complete once any one has rejected.
Promise.all() is a good choice if multiple async tasks are all required but none must wait for any other before executing.
*/
  