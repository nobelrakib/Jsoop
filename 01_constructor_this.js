//Person constructor 
function Person(name, age) {
  this.name = name; 
  this.age = age;   
//   console.log(this); // represent scope of function with object that instantiates it 
}

// console.log(this); //scope for the window object 

const shahriar = new Person('shahriar', 24); 
const test = new Person('test', 12);

console.log(shahriar);