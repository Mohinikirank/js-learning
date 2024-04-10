
console.log(`===============================Step 1==================================`);

let show = () => {
    console.log(`Good Morning ,Today is Monday`);
}
show();

console.log(`===============================Step 2==================================`);

let multi = (n1,n2,n3=1) => {
    
    console.log(`multiplication is : ${n1*n2*n3}`);
}
console.log(`Values to be passed:5,5,2`);
multi(5,5,2);
console.log(`Values to be passed:10,4,default value for 3rd argument as 1`);
multi(10,4);

console.log(`===============================Step 3==================================`);

let addition = (n1,n2,n3,n4,n5) => {
    let result = n1+n2+n3+n4+n5;
    return result;
  }
  let returnValue2 = addition(100,100,200,349,756);
  console.log(`values to be passed:100,100,200,349,756`);
  console.log("Addition is: ", returnValue2);

  let returnValue = addition("i am",  "learning" ,  "ES6" , 'features' , "in depth");
  console.log(`values to be passed:"i am", "learning", "ES6", 'features', "in depth"`);;
  console.log("Addition is: ", returnValue);


