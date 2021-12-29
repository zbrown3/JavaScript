const robot = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};
// What is missing in the following method call?
const robotKeys = Object.keys(robot); // returns property names in an array.

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot); // returns an array of arrays of all keys and their values of all properties.

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true},robot) // copies properties from one object to another adds any extra key/values provided.

console.log(newRobot);

const robotValues = Object.values(robot); // returns property values in an array.