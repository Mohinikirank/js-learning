

console.log("=================step 1================="); 

function show(){
    console.log("Codemind Technology");
    console.log("React Web Developer")
}
show();


console.log("=================step 2================="); 

function personalDetails(firstName, lastName, collegeName){
    console.log("My first name: ",firstName )
    console.log("My last name: ",lastName); 
    console.log("My college name: ",collegeName); 

}
personalDetails("  Mohini", "   Kadam", "Sinhgad College Pandharpur");


console.log("=================step 3================="); 

function swapValues(arg1,arg2){
console.log("======== Before Swap==========");
console.log("Virat:",arg1,  " Anushka:",arg2);
console.log("======== After Swap==========");
 var temp = arg1;
 arg1 = arg2;
 arg2 = temp;
 console.log("Virat:",arg1," Anushka:",arg2);

}
swapValues("Virat","Anushka");

console.log("*******************************");


function swapNumbers(arg3,arg4){
console.log("======== Before Swap==========");
console.log("1000:", arg3,  " 2000:", arg4);
console.log("======== After Swap==========");
 var temp1 = arg3;
 arg3 = arg4;
 arg4 = temp1;
 console.log("1000:", arg3, " 2000:", arg4);
}
swapNumbers(1000,2000);




console.log("=================step 4================="); 

function add(n1, n2, n3){
    console.log("Arguments: ", n1, n2, n3);
    var result = n1+n2+n3;
    console.log("Addition: ", result);

}
add(10.23,600,40);
console.log("*******************************");
add("Hello ", "Good ", "Morning ")
