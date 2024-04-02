class Student{
    constructor(rollNumber,name,division){
 this.rollNumber=rollNumber;
this.name =name;
this.division=division;
}
detail(){
    console.log(`Student Details => RollNumber: ${this.rollNumber},Name: ${this.name}, Division: ${this.division}`);
}
}

const jenny = new Student(22,"Jenny","A");
jenny.detail();

const bill = new Student(2,"Bill", "B");
bill.detail();

const elon = new Student(1,"Elon","c");
elon.detail();