console.log("setTimeoutZero");


var a=1078698;
var b=20986;

setTimeout(()=>{
    console.log("call ASAP");
},0);

setTimeout(()=>{
    console.log("call me after 3 sec");
},3000);

function calculateMultiply(a,b){
    const result=a*b;

    return result;

}
var c=calculateMultiply(a,b);
console.log("Multiplication result is: ",c);