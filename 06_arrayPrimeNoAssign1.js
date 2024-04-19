console.log(`================= Step 1=================`);
const array = [3,9,7,6,19,29,53]
function isPrime(num) {
  for (let index = 2; index < num; index++) {
    if (num%index==0) {
        return false;
    }
    
  }  
   return true; 
}

function countNumber(arr) {
    let count = 0;
    let primeArray=[];
    arr.forEach(element => {
       if (isPrime(element)) {
           count++
           primeArray.push(element);
       } 
    });
    console.log(`Prime numbers: ${primeArray}`);
    console.log(`Count of prime numbers: ${count} `);
}
countNumber(array);

console.log(`================= Step 2=================`);

function spaceCount(str) {
    let count = 0;
    for (const iterator of str) {
        if (iterator==" ") {
            count++
        }
    }
    return count;
}
console.log(`Space Count of "Revision is the mother of success" : ${spaceCount("Rivision is the mother of Success")}`);
console.log(`Space Count of "Java Script is the language of internet world" : ${spaceCount("Java Script is the language of internate world")}`);