//? Objects
/*
Factory functions
constructor functions
construtor property
functions are object
primitive vs references
iterating or enumerting object properties
cloning of an object
abstraction
Getters
Setters
*/

// TODO: Factory functions

// let car1 = {
//   color: "Blue",
//   drive: function() {
//     console.log("Drive Car");
//   }
// };

// let car2 = {
//   color: "Blue",
//   drive: function() {
//     console.log("Drive Car");
//   }
// };

// Use

// naming ComelCase;
//Factory Functions
function createCar(color) {
  return {
    color,
    drive() {
      console.log("Drive Car");
    }
  };
}

// let redCar = createCar("Red");

// console.log(redCar);

// Construtor Functions
// Naming Conventions: Pascal
// function CreateCar(color, weight) {
//   this.engine = 'turbo';

//   this.color = color;
//   this.weight = weight;
//   this.drive = function() {
//     console.log("Drive");
//   };

// }

// const greenCar = new CreateCar("green", "200kg"); // {}

// console.log(greenCar);

// Copy of object
const person1 = { name: "Neeraj", age: 25 };
const priyank = {};
for (const key in person1) {
  priyank[key] = person1[key];
}
priyank.name = "Priyank";

let shobhit = Object.assign({}, person1);

shobhit.name = "Shbhit";

console.log(shobhit, person1, priyank);

let data = [{ name: "sdfsdfsdfd" }, { name: "sdfsdeefsdfd" }, { name: "ee" }];

let ModifiedData = Object.assign({}, data[0]);
ModifiedData.name = "Neeraj";

// user --> ModifiedData

// origranl data = data[0] =  { name: 'Neeraj' }

// Abstactions: Show the esstenials and hide the implemtions or details

// Cases
// ? Don't showing implementaion details to user
// ? In case it required, user dont have persmission to change it

function CreateCar(color, weight) {
  //Private properties
  Object.defineProperty(this, {
    engine: {
      get: function() {
        return "turbo";
      }
    }
  });
  // Public propterties
  this.color = color;
  this.weight = weight;
  this.drive = function() {
    const technique = this.engine;
    console.log("Drive");
  };
}

// Getter and Setters

// ES5: Object.defineProperty()
// ES6: get(), and set()

// Exercises

// TODO: Create Blog post using construtor and factory fucntions
const blog = {
  author: "Shobhit",
  title: "My First Post",
  details: "Blog Details",
  views: 20,
  comments: [{ name: "Neeraj", details: "comment details" }]
};
// TODO: Object Equality functions
