console.log("==============Assignment 1==============");
function voteEligible(age){
    if (age>130 || age<=0 || age==null) {
        console.log(`Invalid data: ${age}`);
    } else {
       if (age<18) {
        console.log(`Not eligible for vote: ${age}`);
       } else {
        if (age>=18) {
           console.log(`Eligible for vote: ${age}`) ;
        } else {
            console.log(`invalid data: ${age}`);
        }
     }
  }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);
