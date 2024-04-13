
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

    
    const arrayEmployees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny ,emp_mahi ];


    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~Descending order of employee ID's~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
    arrayEmployees.sort((p1, p2)=>{
        return p1.emp_id>=p2.emp_id ? -1 : 1
    });
    arrayEmployees.forEach(element => {
        console.log(`ID: ${element.emp_id}      Name: ${element.emp_name}        Department: ${element.emp_dept}`);
    });
    
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~Ascending order of employee department~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
    arrayEmployees.sort((p1, p2)=>{
        return p1.emp_dept>=p2.emp_dept ? 1 : -1
    });
    arrayEmployees.forEach(element => {
        console.log(`ID: ${element.emp_id}       Company: ${element.emp_company}       Department: ${element.emp_dept} `);
    });

    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~Descending order of employees salary~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
    arrayEmployees.sort((p1, p2)=>{
        return p1.emp_salary>=p2.emp_salary ? -1 : 1
    });
    arrayEmployees.forEach(element => {
        console.log( `Name: ${element.emp_name}      Salary: ${element.emp_salary}      Company: ${element.emp_company}`);
    });
    