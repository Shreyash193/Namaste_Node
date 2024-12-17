// const obj= require("./calculate/sum");
// const {calculateMultiply}=require("./calculate/multiply");
// require("./xyz");

const {calculateMultiply,calculateSum,x}=require("./calculate");

const data =require("./data.json");
console.log(data);
var name="Namaste Nodejs";

var a=10;
var b=20;

setTimeout(()=>
{
    console.log("setTimeout");
},3000);


calculateMultiply(a,b); 

calculateSum(a,b);

console.log(x);