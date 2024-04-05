
console.log(`=========================================Step 1======================================`);

class Vehicle{
type
company
model
price
color
fuel
constructor(type,company,model,price,color,fuel){
this.type=type
this.company=company
this.model=model
this.price=price
this.color=color
this.fuel=fuel

}
detail(){
    console.log(`vehicle Details =>Type:${this.type},  Company: ${this.company},  Model:${this.model},  Price: ${this.price},  Color:${this.color},  Fuel:${this.fuel}`);
}
}
const Helicopter = new Vehicle ("Helicopter","Robinson","Robinson R44","5Cr","blue","AVGAS");
Helicopter.detail();

const Train = new Vehicle("Train","Vande Bharat Express","1:100 Scale Model","150 Cr","White","Electric");
Train.detail();

const bus = new Vehicle("Bus","Tata Motors","Morcopolo ","40 lakhs","White","Diesel");
bus.detail();

const car = new Vehicle("Car","Mahindra","Scorpio","16 lakhs","Black","Diesel");
car.detail();

const bike = new Vehicle("Bike","Royal Enfield","Royal Enfield Hunter 350","1.5Lakh","Rebel Black","Petrol");
bike.detail();

console.log(`==================== Traversing array object ==================`);
const array = [Helicopter,Train,bus,car,bike];
for (const element of array) {
   element.detail(); 
}


console.log(`=========================================Step 2======================================`);
class College{
name
standards
city
students
constructor(name,standards,city,students){
this.name=name
this.standards=standards
this.city=city
this.students=students
}
display(){
    console.log(`College Details =>Name:${this.name},Standards:${this.standards},City:${this.city},Students:${this.students}`);
}
}
const KBP = new College("KBP College",15,"Pandharpur",2000);
KBP.display();

const KPC= new College("KPC College",10,"Solapur",3000);
KPC.display();

const KEC = new College("KEC College",20,"Pandharpur",5000);
KEC.display();

const SKN = new College("SKN College",30,"Pune",10000);
SKN.display();




