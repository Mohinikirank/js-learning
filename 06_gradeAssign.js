console.log("==============Assignment 2==============");

function gradeCalculation(marks){
if (marks>=90 && marks<=100) {
    console.log(`Fantastic marks: ${marks} Your grade is A+`);
} else {
    if (marks>=75 && marks<90) {
       console.log(`Excellent marks: ${marks} Your grade is A`); 
    } else {
        if (marks>=50 && marks<75) {
       console.log(`Good marks: ${marks} Your grade is B`);     
        } else {
          if (marks>=35 && marks<50) {
       console.log(`Marks is: ${marks} Your grade is C,Need improvement`);
            } else {
                if (marks<53 && marks>0) {
                console.log(`You are Failed`);    
                } else {
            if ( marks==null || marks<=0 || marks>100 || isNaN(+marks)) {
                console.log(`Please provide the valid marks: ${marks}`);
            } else {
            } 
            }
          }  
        }
     }
     }
}

gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(null);
gradeCalculation(undefined);