//Person constructor 
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  // Greeting
  Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
  
//   const person1 = new Person('John', 'Doe');
//   console.log(person1.greeting());

//Customer constructor 
function Customer(firstName, lastName, phone, membership ) {
    Person.call(this, firstName, lastName) //calling the person constructor with local scope and inheriting two values 

    this.phone = phone; 
    this.membership = membership
}

//Inherit person prototype
Customer.prototype = Object.create(Person.prototype)

//Make customer.prototype point to its constructor 
Customer.prototype.constructor = Customer;

const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard'); 

//Customer can now call method inside person prototype because it is now a child of the person constructor. 

//We can also override 
Customer.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName} welcome to the class!!`;
}

console.log(customer1);

