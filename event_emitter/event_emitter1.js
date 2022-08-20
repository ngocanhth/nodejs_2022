const EventEmiter = require('events');

const customEvent = new EventEmiter();

const listenner = customEvent.addListener("something",()=>{
    console.log("Say hi from listener 1");
});


const listenner1 = customEvent.on("something",()=>{
    console.log("Say hi from listener 2");
});

customEvent.emit("something")

module.exports = { listenner, listenner1 };