const event = require('events');
var eventEmitter = new event.EventEmitter();

//Create an event handler
var myEventHandler = function(){
    console.log('I hear a scream!');
} 

//Assing the event handler to an event
eventEmitter.on('scream', myEventHandler);

//fire the 'scream' event
eventEmitter.emit('scream');