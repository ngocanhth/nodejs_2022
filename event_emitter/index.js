const util = require('util')
const EventEmiter = require('events');
const {listenner, listenner1 } = require ('./event_emitter1')


const User = function(name, score){
    this.name = name,
    this.score = score
}

util.inherits(User, EventEmiter)

const john = new User('John', 0);

john.on('SCORE', (score) => {
    console.log('score = ',score);
})

john.emit('SCORE',9);