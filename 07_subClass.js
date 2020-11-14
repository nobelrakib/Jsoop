class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    //Child is calling the parent constructor
    super(firstName, lastName); 
    this.phone = phone; 
    this.membership = membership; 
  }

  //overriding also works. 
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName} welcome to class`;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(Customer.getMembershipCost());
