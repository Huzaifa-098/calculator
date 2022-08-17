//constructor functions
function person( firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}
 
// instantiate object 
const person1 = new person('john', 'doe', ' 04-04-2000');
const person2 = new person('huzaifa','tariq','01-03-1999');
console.log(person1.dob);
 console.log(person2);
 console.log(person2.dob.getFullYear());


 /*function person( firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function() {
    return this.dob.getFullYear();
  
  }
  this.getName = function() {
    return `$(this.firstName} $(this.lastName}`;
  }
}
const person1 = new person('john', 'doe', ' 04-04-2000');
const person2 = new person('huzaifa','tariq','01-03-1999');
//console.log(person1.getBirthYear());
console.log(person1.getName());*/

/*function person( firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  }
  person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
  }
  person.prototype.getName = function()  {
    return `${this.firstName} ${this.lastName}`;
  }
const person1 = new person('john', 'doe', ' 04-04-2000');
const person2 = new person('huzaifa','tariq','01-03-1999');
//console.log(person1.getBirthYear());
//console.log(person1.getName());
console.log(person2.getName());
console.log(person1);*/


///////////

 /*function person( firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function() {
    return this.dob.getFullYear();
  
  }
  this.getFullName = function() {
    return `$(this.firstName} $(this.lastName}`;
  }
}
const person1 = new person('john', 'doe', ' 04-04-2000');
const person2 = new person('huzaifa','tariq','01-03-1999');
console.log(person1.getBirthYear());
console.log(person1.getFullName());*/
/////////////