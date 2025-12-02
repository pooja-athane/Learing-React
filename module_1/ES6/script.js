// LET, VAR & CONST

// if (true) {
//     var x = 1
//     let y = 2
//     const z = 3
//     console.log(x);
//     console.log(y);
//     console.log(z);

// }
// console.log(x);
// console.log(y);
// console.log(z);


// Arrow function

// const greetPersonOld = function (name) {
//     return "hello" + name
// }

// const greetPerson = name => 'hello' + name;

// console.log(greetPersonOld("pooja"));
// console.log(greetPerson("pooja"));

// Classes

// function SampleOld() {
//     console.log("hey");

// }
// SampleOld.prototype.printHello = function () {
//     console.log("hello");

// }
// const oldObject = new SampleOld();
// oldObject.printHello();
// class Sample {
//     constructor() {
//         console.log("hey pooja");

//     }
//     printHello() {
//         console.log("hello");

//     }
// }
// const hello = new Sample();
// hello.printHello();

// destructuring

const names = ["pooja", "john", "jems"];
const [a, b, c] = names;
console.log(a, b, c);

const obj = { first: "john", second: "pooja", third: "jems" }
const { first, second, third } = obj;
console.log(first, second, third);
