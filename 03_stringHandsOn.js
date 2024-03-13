function stringHandsOn(){
var greet = "   Hey you are doing good, keep it up   ";

console.log("===================Step 1===================");
console.log(`String: ${greet}`);

console.log("===================Step 2===================");

var length=greet.length;
console.log(`Length of string is: ${greet.length}`);

console.log("===================Step 3===================");

var lengthBeforeTrim = greet.length;
var greetAfterTrim = greet.trim();
var lengthAfterTrim = greetAfterTrim.length;
console.log(`${greetAfterTrim}`); 
console.log(`Length of string is: ${lengthAfterTrim} `);

console.log("===================Step 4===================");

console.log(`Total spaces removed is: ${lengthBeforeTrim-lengthAfterTrim}`);


console.log("===================Step 5===================");

var greet="Hey you are doing good, keep it up";
var totalChars=greet.length;
var lastChar = greet.charAt(totalChars-1);
var charAt0 = greet.charAt(0);
console.log(`First char after trim is: ${charAt0}   Last char after trim is: ${lastChar}`);


console.log("===================Step 6===================");

var greet = "Hey you are doing good, keep it up";
var resultValue = greet.split(" ");
console.log(`Total words available in the string after trim are: ${resultValue.length}`);

console.log("===================Step 7===================");

var indexOfgood = greet.indexOf('good');
console.log(`Index of good is: ${indexOfgood}`);

console.log("===================Step 8===================");

var result=greet.substring(22);
console.log(`substring starting from index 22 is: ${greet.substring(22)}`);


console.log("===================Step 9===================");

var result=greet.includes("up");
console.log(`Is string ends with word "up": ${result}`);


console.log("===================Step 10===================");

var result = greet.includes("Hey");
console.log(`Is string starts with word "Hey": ${result}`);

}
stringHandsOn();
