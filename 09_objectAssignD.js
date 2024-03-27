let professor = {
    name: "Stalin",
    college: "IIT Madras",
    subject: "Cybersecurity",
    city: "Chennai",
    age:   55,
    degrees:{
      engineering:"CSC",
      PHD:"Adv Computing"
    },
   certifiCates :['Hacker Rank Participation','Certification in IFE Course','Certification in Adv Programming']
}
console.log(professor);
console.log(professor.degrees);

console.log(`====== Adding properties in an object =========`);
professor.totalExperience = "14 years";
console.log(`Total experience:${professor.totalExperience}`);
console.log(professor);
console.log(`========Adding oracle certified in Array=======`);
professor.certifiCates.splice(2,0,"Oracle Certified");
console.log(professor.certifiCates);

console.log(`=========last element of array========`);
var len=professor.certifiCates.length;
console.log(`Last element of Array :${professor.certifiCates[len-1]}`);

console.log(`===========Traversing Array=========`);
for (let index = 0; index < professor.certifiCates.length; index++) {
  const element = professor.certifiCates[index];
  console.log(element);
  
}