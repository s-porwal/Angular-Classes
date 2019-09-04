// javascript
// Difference Echmascript and javascript

// Varaibles
{
  const person = {
    name: "Neeraj" //keyvalue pair
  };

  person.name = "writwik";

  let person2 = "Priyank";

  person2 = "shobhit";

  //   console.log(person2);
}

//* Primitivies and Reference Types

// TODO: Primitives
// String: '', "", `` and new String("sdafsdf");
// number: 1, and new Number();
// boolean: true and new Boolean()
// undefined
// null

// ENUM
// Symbol

const num = "1";
const num2 = "2";

// console.log(Number(num) + Number(num2));
// console.log(parseInt(num) + parseInt(num2));

// using + as prefix we  can change type of varibale into number.
let somevaraible;
// somevaraible;

// TODO Reference Types
// Objects
// Array
// functions

let str = "string value";
let str2 = str;

str = "Value changed";

console.log(str2);

// let obj = { name: "Shobhit" };
// {
//   name: writwik;
// } // memory - 1234
// obj = 1234;

// let obj2 = obj;
// obj2 = 1234;

// obj.name = "writwik";

// console.log(obj2);

// let shobhit = { name: "Shobhit" };
// let neeraj = shobhit;

// shobhit = { name: "writwik" };

let arr = [1, 2, 3, 4]; // memory = xyz
let arr2 = arr; //xyz

arr[1] = "a";

console.log(arr2);
