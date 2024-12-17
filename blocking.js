const crypto=require("crypto");

console.log("blocking file");

var a=1078698;
var b=20986;

crypto.pbkdf2Sync("password","salt",5000000,50,"sha512");
console.log("First key is generated");

crypto.pbkdf2("password","salt",50000,50,"sha512",(err,key)=>{
    console.log("second key is generated");
});


function calculateMultiply(a,b){
    const result=a*b;

    return result;

}
var c=calculateMultiply(a,b);
console.log(c);