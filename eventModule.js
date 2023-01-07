// Here we require in the 'events' module and save a reference to it in an events variable
let events = require('events');

let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}

// Create an instance of the EventEmitter class
let myEmitter =  new events.EventEmitter();

// Assign celebration as the event name and listenerCallback as the listener callback function
myEmitter.on('celebration', listenerCallback);

// Emit a celebration event and pass in a string as the second argument
myEmitter.emit('celebration', 'Life');