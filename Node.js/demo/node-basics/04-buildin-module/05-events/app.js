const EventEmitter = require('events')

class MyEventEmitter extends EventEmitter {}

const event = new MyEventEmitter()

event.on('play', value => {
    console.log(value);
})

event.on('play', value => {
    console.log(value);
})

event.on('play2', value => {
    console.log(value);
})
event.once('play3', value => {
    console.log(value);
})

event.emit('play', 'movie')
event.emit('play2', 'tv')
event.emit('play2', 'tv')
event.emit('play2', 'tv')
event.emit('play3', 'once')
event.emit('play3', 'once')
event.emit('play3', 'once')