function vote(voteEligible) {
    //var voteEligible;
   
        if(voteEligible>130 || voteEligible<=0 || voteEligible==null){
            console.log(`Age is ${voteEligible} invalid data`);
    } 
    else { 
        if (voteEligible<18) {
            console.log(`Not eligible for vote: ${voteEligible}`);
        } 
        else{
            if (voteEligible >= 18) {
                console.log(`Age is ${voteEligible} eligible for vote`); 
            }
    else {
        console.log(`Age is ${voteEligible} not eligible for vote`); 
    }
}
}
}
vote(45);
vote(17);
vote(8);
vote(20);
vote(-10);
vote(200);
vote(0);
vote(null);