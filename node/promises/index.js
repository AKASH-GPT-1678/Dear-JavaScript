const { EventEmitter } = require("stream");


function delayFn(time){
    return new Promise((resolve) => setTimeout(resolve, time))
};

delayFn(2000).then(()=>console.log("after 2 seconds "));



const eventEmmiter = new EventEmitter();
eventEmmiter.on('greet' , (name)=> {
    console.log("Gear akash my name is " , name)
});




eventEmmiter.emit('greet' , "Akash")