console.log("=============================== Object 01 ===============================");
const bankSbi = {
    name : "State Bank of India",
    state : "TN",
    branch: "Porur",
    manager: "Radhakrishnan"
 
}
console.log(bankSbi);
console.log("=============================== Object 02 ===============================");

const bankLocation ={
    street: "Oil Mill Road",
    city: "Chennai",
    pin: 600056
}
console.log(bankLocation);

console.log("=============================== Cloning 2 objects ===============================");
const clone01 = Object.assign({},bankSbi);
console.log("Cloned object 1:",clone01);
const clone02 = Object.assign({},bankLocation);
console.log("Cloned object 2:", clone02);

console.log('================================ Creating new Object =============================');
const rateOfInterest = {
    homeLoanInterest: "7% to 10% P.A",
    personalLoanInterest: "10% to 15% P.A",
    dueInterest: "5% to 10% P.A"
}
console.log(rateOfInterest);

console.log('================================= Merging 3 Objects ============================');
const sbiDetails = Object.assign({}, bankSbi,bankLocation,rateOfInterest );
console.table(sbiDetails);


console.log('=============================== Traversing Objects =============================');
for (const key in sbiDetails) {
    console.log(`${key}: ${sbiDetails[key]}`);
}