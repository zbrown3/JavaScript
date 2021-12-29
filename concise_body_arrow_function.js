/*
A function body composed of a single-line block does not need curly braces. 
Without the curly braces, whatever that line evaluates will be automatically returned. 
The contents of the block should immediately follow the arrow => and the return keyword can be removed. 
This is referred to as implicit return.
*/
const plantNeedsWater = day => day === 'Wednesday' ? true : false;