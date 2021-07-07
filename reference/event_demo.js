// import event module
const EventEmitter = require("events");

// create class(init class)
class MyEmitter extends EventEmitter {}

// create object
const myEmitter = new MyEmitter();

// event listener
myEmitter.on("event", () => console.log("Event fired!!!"));

// call the object (event fired)
myEmitter.emit("event");
myEmitter.emit("event");
