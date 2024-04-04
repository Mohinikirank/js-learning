const personJSON = `
{
"name": "Aleix Melon",
"id":"E00245",
"role":["Dev","DBA"],
"age":23,
"doj":"11-12-2019",
"married":false,
"address":{
 "street":"32,Laham St.",
 "city":"Innsbruck",
 "country": "Austria"
},
"referred-by":"E0012"
}`;

console.log(`======== Convert JSON to Object ===========`);
const personObject = JSON.parse(personJSON);
console.log(typeof personObject);
console.table(personObject);

console.log(`========log Dev element===========`);
console.log(`First element of role: ${personObject.role[0]}`);

console.log(`=========last element of name========`);
var resultValue = personObject.name.split(" ")
console.log(resultValue);
var len=resultValue.length;
console.log(`Last element of name: ${resultValue[len-1]}`);

console.log(`========= Year of joining========`);
var resul = personObject.doj.split("-")
console.log(resul);
var len=resul.length;
console.log(`Year of joining: ${resul[len-1]}`);