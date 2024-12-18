const fs=require("fs");


setImmediate(()=> {
    console.log("setImmediate");
});

setTimeout(()=>{
    console.log("Timer Expired");
},0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt","utf8",()=>{

    console.log("file is readed");
});


process.nextTick(()=>{
    process.nextTick(()=>{
        console.log("inner process.nextTick");
    });
    console.log("process.nextTick");
});


console.log("Last line of code");