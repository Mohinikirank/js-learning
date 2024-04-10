

const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
const newarrayNumbers = arrayNumbers.map( (currentValue)=>{
    return currentValue+10;
} );
console.log(arrayNumbers);
console.log(`===================Step 1=========================`);
console.log(newarrayNumbers);


console.log(`===================Step 2=========================`);
const arrayNumbersCube= arrayNumbers.map( (currentValue)=>{
    return currentValue * currentValue * currentValue;
} );
console.log(arrayNumbersCube);

console.log(`===================Step 3=========================`);
const indexArrayNumbers = arrayNumbers.map( (currentValue,index)=>{
    return currentValue+index;
} );

console.log(indexArrayNumbers);