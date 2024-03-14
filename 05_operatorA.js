


console.log("============================step 1============================");

function squareOfWorldlength(arg1){
    var length=arg1.length;
    var n1 = length;
    var n2 = 2; 
    result = n1 ** n2; 
   return result;
}
squareOfWorldlength("JavaScript");
console.log(`length square of Javascript is: ${result}`);
squareOfWorldlength("Google Chrome");
console.log(`length square of Google Chrome is: ${result}`);
squareOfWorldlength("Developer Smart");
console.log(`length square of Developer Smart is: ${result}`);

console.log("============================step 2============================");

function stringHandsOn(){
    var greet = "I am Angular Developer";
    var length=greet.length;
    console.log(`Length of string is: ${greet.length}`);
    var resultValue = greet.split(" ");
    var resultValueLength = resultValue.length;
    var div = length / resultValueLength; 
    var mul = length * resultValueLength
console.log(`String length after divided by total number of words: ${div}`);
console.log(`String length after multiply by total number of words : ${mul}`);
}
stringHandsOn();