console.log("I’m learning about");
setTimeout(() => { console.log("Event Loop");}, 2000);
console.log("the");


/*
The event loop is made up of these parts:
Memory Heap - block of memory where objects are stored in an unordered manner.  Variables and objects that are currently in use are stored in the heap.

Call Stack - tracks what function is currently being run in your code.  When function is invoked, a frame is added to the stack.  Frames connect that function's
arguments and local variables from the heap.  Frames enter the stack in a last in, first out order. When a function finishes executing it's frame is removed from the 
stack. global() is always at the bottom of the stack.

Event Queue - is a list of messages corresponding to functions that are waiting to be processed.  These messages are entering the event queue from sources such as
various web APIs or async functiosn that were called and are returning additional events to be handled by the stack.  Messages enter the queue in a first in, first out
order.  No code is exectured in the event queue;  It instead holds functions that are waiting to be added back into the stack.

Event Loop - Messages that are waiting in the event queue to be added back into the stack are added back via the event loop.  When the call stack is empty,
if there is anything in the event queue to be added back into the stack are added back via the event loop.
1. First the event loop will poll the stack to see if it is empty.
2. It will add the first waiting message.
3. It will repeat steps 1 and 2 until the stack has cleared.

Node or Web APIs

*/