const EventEmitter = require('events')

/*
定义自己的类，并继承 EventEmitter
 */
class MyEvent extends EventEmitter {
    log(message) {
        console.log(`the message is ${message}`)
        this.emit('MyEventMessage', {name: "sage", age: 13})
    }
}

module.exports = MyEvent