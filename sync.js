console.log("synchronus code");

var a=1078698;
var b=20986;

function multiplyFn(x,y){
    const result=a*b;
    return result;
}

var c = multiplyFn(a,b);

console.log("multiplication of a and b is: ",c);