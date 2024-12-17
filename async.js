const fs=require("fs");

const https=require("https");

console.log("async code");

var a=1078698;
var b=28986;

https.get("https://dummyjson.com/products/1", (res)=>{
    console.log("fetched data successfully");
});

setTimeout(()=>{
    console.log("setTimeout called after 5 seconds");
},5000);

fs.readFile("./file.txt","utf8",(err,data)=>{
    console.log("file data: ",data);
});

function multiplyFn(x,y){
    const result=a*b;
    return result;
}

var c = multiplyFn(a,b);

console.log("multiplication of a and b is: ",c);