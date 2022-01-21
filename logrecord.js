var readline=require('readline-sync');
fs = require('fs')
function divide(x,y)
{
    if(y==0)
        throw new Error('can not divide by Zero');
    else   
        console.log("Division is "+x/y);
}
//handle the code which throws exception
function add(x,y){
    console.log("Addition is ",x+y);
}
function sub(x,y){
    console.log("Subtraction is",x-y);
}
function mul(x,y){
    console.log("Multiplication is",x*y);
}



var a=parseInt(readline.question("Enter first number:"));
var b=parseInt(readline.question("Enter second number:"));
add(a,b);
sub(a,b);
mul(a,b);
try {
    divide(a,b); 
} catch (err) {
    fs.writeFileSync('error.txt',err.toString());
     console.log("Error occured:"+err);

}
