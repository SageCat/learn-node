const MyEvent =  require('./MyEvent')
let event = new MyEvent();

event.on('MyEventMessage', () =>{
    console.log("MyEvent is triggered")
})

event.log("hello")


