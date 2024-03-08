
console.log("=============== swap two variable values==================");
var name1 = "Sweety"; 
var name2 = "Cutie"; 
console.log("======== Before Swap ==========");
console.log("sweety:",name1,"cutie:",name2);

console.log("======== After Swap ==========");
var temporary = name1;
name1 = name2;
name2 = temporary ;
console.log("sweety:",name1,"cutie:",name2);


console.log("===============swap three variable values===============");
var n1 = 10; 
var n2 = 20; 
var n3 = 30;
console.log("======== Before Swap ==========");
console.log("n1:", n1, " n2:", n2,"n3:",n3);

console.log("======== After Swap ==========");
var temp = n1;
n1 = n2;
var temp1 = n2;
n2 = n3;
n3 = temp;

console.log("n1:", n1, " n2:", n2, "n3:",n3);