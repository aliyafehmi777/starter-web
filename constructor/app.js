// person constructor
 function Person(firstName, lastName, age){
   this.firstName = firstName;
   this.lastName = lastName;
   this.age = age;
  //  this.sa = hi();

   
 }
 Person.prototype.hi = function() {
   return "hi";
   
 }
 const name = new Person('Aliya' , 'Jan',34);

console.log(name);

function TODO(greet) {

  this.greet = greet;
  
}
const obj = new TODO("welcome to todo app") ;



