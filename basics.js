console.log("hello world")
//JS runtime Environment is a program that executes JS code. It provides the necessary environment for JS code to run. Node.js is a JS runtime environment that allows you to run JS code outside of a web browser. It is built on the V8 JavaScript engine and provides an event-driven, non-blocking.

//Synchronus
for(let i=1; i<=10; i++){
    console.log(`${i}`)
}   
//Asynchronus
setTimeout(() => {
    console.log("Hello World");
}, 1000);

//Execute Order
console.log("synchronus code")

Promise.resolve().then(()=>{
    console.log("Microtask Queue")
})

setTimeout(()=>{
    console.log(("Macrotask Queue"));
},2000);


const {calculate_area} = require("./file.js");

import {pi} from './esm.js';





