function factorialOfNum(num) {
    let fact = 1;
    for(let index=num; index >= 1; index--) { 
        fact = fact * index;
    }if( num==null || isNaN(+num)) {
        fact = "Invalid input"  
           } 
            console.log(`Factorial of ${num} is: ${fact}`);
           
}

factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);