//Use this way of creating objects when you need a lot of functions in your prototype
const personPrototype = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName; 
    }
}

//Object.create = creates an object with parameter being the prototype from which the object is to be created. 
const mary = Object.create(personPrototype); 
mary.firstName = 'Mary'
mary.lastName = 'Williams'

mary.getsMarried('Thomson')


console.log(mary);