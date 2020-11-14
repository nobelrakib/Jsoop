//Object.prototype 
//Person.prototype 



//Person constructor 
//Whenever you have a method in constructor, add the method inside the prototype of that constructor function 
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    //calculate age 
    // this.calculateAge = function() {
    //     const diff = Date.now() - this.birthday.getTime(); 
    //     const ageDate = new Date(diff); 
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

//Add calculateAge function to the person prototype
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime(); 
    const ageDate = new Date(diff); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`; 
}


const john = new Person('john', 'Doe', '8-12-90'); 
const mary = new Person('Mary', 'Johnson', 'March 20 1978');


console.log(mary);

// console.log(john);