class Employees{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
    this.emp_id=emp_id;
    this.emp_name=emp_name;
    this.emp_dept=emp_dept;
    this.emp_salary=emp_salary;
    this.emp_company=emp_company;
    }
    detail(){
        console.log(`Employee Details => emp_id: ${this.emp_id}, emp_name: ${this.emp_name}, emp_dept: ${this.emp_dept}, emp_salary: ${this.emp_salary}, emp_company: ${this.emp_company}`);
    }
    }
    const emp_anil = new Employees(22,"Anil","IT",50000,"TCS");
    const emp_radha = new Employees(33,"Radha","HR",74000,"Wipro");
    const emp_rishi = new Employees(55,"Rishi","Fianance",47000,"TCS");
    const emp_sonali = new Employees(66,"Sonali","Fianance",45000,"Infy");
    const emp_monika = new Employees(77,"Monika","IT",40000,"Wipro");
    const emp_viny = new Employees(88,"Vinayak","IT",75000,"TCS");
    const emp_mahi = new Employees(99,"Mahesh","HR",85000,"Infy");
    
    const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

    console.log(`=================================Step 1=====================================`);
    console.log(`---------Find all the employees from 'Wipro' company---------- `);
const arrayNew =arrayEmps.filter( (currentValue)=>{
    return currentValue.emp_company=="Wipro";
} );

arrayNew.forEach( (element)=>{
    element.detail();
} );

console.log(`==================================Step 2====================================`);
console.log(`----------Find all the employees from 'IT' or 'HR' depart----------`);
const array =arrayEmps.filter( (currentValue)=>{
    return ( currentValue.emp_dept=="IT" || currentValue.emp_dept=="HR");
} );

array.forEach( (element)=>{
    element.detail();
} );

console.log(`================================Step 3======================================`);
console.log(`----------Find all the employees whose emp_id greater than 50----------`);
const arrayId =arrayEmps.filter( (currentValue)=>{
    return currentValue.emp_id>50;
} );

arrayId.forEach( (element)=>{
    element.detail();
} );

console.log(`================================Step 4======================================`);
console.log(`----------Find all the employees whose names start with letter 'A' or 'V' or 'M'----------`);
const arrayName =arrayEmps.filter( (currentValue)=>{
    return (currentValue.emp_name.startsWith('A') || currentValue.emp_name.startsWith('V')||currentValue.emp_name.startsWith('M'));
} );

arrayName.forEach( (element)=>{
    element.detail();
} );

console.log(`=================================Step 5=====================================`);
console.log(`---------- Get the average salary of employee's from all department---------- `);
const avgSalary = arrayEmps.filter((emp)=>{
    return emp.emp_dept=="IT","HR","Fianance";
});

const sumSalary = avgSalary.reduce( (runningTotal, currentValue)=>{
    return runningTotal+currentValue.emp_salary;
}, 0 );
console.log(sumSalary);
console.log(`Average salary for all departments employee's: ${sumSalary/avgSalary.length}`);

console.log(`=================================Step 6=====================================`);
console.log(`---------- Get the average salary of employee's for "IT" department---------- `);
const arraySalary = arrayEmps.filter((emp)=>{
    return emp.emp_dept=="IT";
});
const salary = arraySalary.reduce( (runningTotal, currentValue)=>{
    return runningTotal+currentValue.emp_salary;
}, 0 );
console.log(salary);
console.log(`Average salary from IT department is: ${salary/arraySalary.length}`);
