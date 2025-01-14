// // based video : https://youtu.be/poQXNp9ItL4?si=9VHgY-PfR9CMOlWj


// // functions as First Class Citizens is a function that can be passed as an argument to another function or can be returned from another function.

// // assign to a variable
// // pass as an argument
// // return from a function
// // use as a value




// function sayHello() {
//     return "hello";
// }

// let fn = sayHello;
// fn(); // "hello"
// sayHello(); // "hello"

// function greet(param1){
//     console.log(param1());
// } // passing function as an argument to execute it 

// greet(sayHello); // "hello"

// function sayHello1() {
//     return function () {
//         return "hello";
//     }
// }

// sayHello1(); // [Function (anonymous)]
// sayHello1()(); // "hello"

// let fn1 = sayHello1();
// fn1(); // "hello"

// let msg = fn1();
// msg(); // "hello"


// // Higher Order Functions is a function that takes a function as an argument or returns a function as a value to another function or both at the same time .
// function sayHello2() {
//     return function () {
//         return "hello";
//     }

// }

// let number = [1, 2, 3, 4, 5];
// number.map(itemNumber => {
//     return itemNumber * 2;
// })
// console.log(number); // [2, 4, 6, 8, 10]

// setTimeout(() => {
//     console.log("hello");
// }, 1000); // setTimeout is a built-in function that takes a function as an argument and a delay in milliseconds as a parameter. It then schedules the function to be executed after the specified delay. is Higher Order Function because it takes a function as an argument



// //functional composition is the process of combining multiple functions to create a new function that performs a specific task. 

// let input = "    hellow      ";
// let output = "<div>" + input.trim() + "</div>"; // this is non functional style of code

// // how to solve with functional programming

// const trim = str => str.trim();
// const warpInDiv = str => `<div>${str}</div>`;
// const toLowerCase = str => str.toLowerCase();


// trim(input); // "hellow"
// const result = warpInDiv(toLowerCase(trim(input))); // "<div>hellow</div>"

// console.log(result); // "<div>hellow</div>"



// import compose from 'lodash/fp/compose';
// import { pipe } from 'lodash/fp';


// // composing and pipe functions

// const result2 = warpInDiv(toLowerCase(trim(input))); // we can ripe the functions using lodash pipe function

// const transform = compose(
//     warpInDiv,
//     toLowerCase,
//     trim
// ); // read from right to left 

// transform(input); // "<div>hellow</div>"

// const transform2 = pipe(
//     trim,
//     toLowerCase,
//     warpInDiv
// ); // read from left to right 

// transform2(input); // "<div>hellow</div>"


// // curying

// // const wrap2 = (str, tag) => `<${tag}>${str}</${tag}>`;
// // wrap2("hellow", "div"); // "<div>hellow</div>"
// // const transform3 = pipe(
// //     trim,
// //     toLowerCase,
// //     warp2("div") // erorr 
// // );


// function add (a){
//     return function (b){
//         return a + b;
//     }
// }

// add(2)(3); // 5


// const add2 = a => b => a + b;


// // fiixed

// const wrap2 = str => tag => `<${tag}>${str}</${tag}>`;

// const transform3 = pipe(
//     trim,
//     toLowerCase,
//     warp2("div") // <div>hellow</div>


// );
// // pure functions are functions that do not have any side effects and always return the same output for the same input

// // same input = same output

// function random(number) {

//     return number * Math.random() 
// }
//  // is not pure function

// function multiple(number2) {   

//     return number2 * 2 ;
// }
// // is pure function


// // pure functions 
// // no random values
// // no side effects
// // no external dependencies
// // no global state
// // no mutation
// // no current date


// function isEligible(age) {
//     return age > minAge;
// } // is not pure function

// function isEligible2(age, minAge) {
//     return age > minAge;
// } // is pure function


// // pure functions benefits

// // self documentation
// // easy to test
// // easy to reuse
// // easy to reason about
// // easy to maintain
// // easy to understand
// // easy to debug

// // concurency is the ability of a computer to perform multiple tasks at the same time

// // cacheable functions are functions that can be executed multiple times and always return the same output for the same input

// // immutable objects are objects that cannot be changed once they are created

// // benefits

// // performance
// // maintainability
// // consistency  
// // security
// // faster changes detection

// // if you building app with redux you need to use pure functions

// const person = {
//     name: "John",
//     age: 30
// };

// // wrong is person.name = "Jane";

// // right is person = {
// //     ...person,
// //     name: "Jane"
// // };

// // Objects.assign(person, {
// //     name: "Jane"
// // }); is also correct

// const updatedPerson = Object.assign({}, person, {
//     name: "Jane"
// });

// // better way

// const updatedPerson2 = {
//     ...person,
//     name: "Jane"
// }; // thing to aware of using spread operator or object.assign is that method us to create a shallow copy of an object. so you have to be carefull when working with nested objects or arrays.

// const person2 = {
//     name: "John",
//     age: 30,
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         state: "NY"
//     }
// };

// const updatedPerson3 = {...person2, name: "Jane"};
// updatedPerson3.address.street = "456 Main St";

// console.log(person2); // {name: "John", age: 30, address: {...}}
// // the person3 name is not updated because the address object is a reference to the original person2 address object

// const updatedPerson4 = {
//     ...person2,
//     name: "Jane",
//     address: {
//         ...person2.address,
//         street: "456 Main St"
//     }
// };
// console.log(updatedPerson4); // {name: "Jane", age: 30, address: {...}} address is "new york" the address is not updated because the address object is a reference to the original person2 address object

// // updating array

// const numbers = [1, 2, 3];

// // adding
// const added = [...numbers, 4]; // [1, 2, 3, 4]
// const added2 = [5, ...numbers, 6]; // [5, 1, 2, 3, 6]

// const addedSpesific = numbers.indexOf(2);
// const added3 = [...numbers.slice(0, index),
//     4,
//     ...numbers.slice(index + 1)
// ];
// console.log(added3); // [1, 2, 4, 3]


// // removing array

// const removed = numbers.filter(item => item !== 2);

// // updating object

// const updated = numbers.map(item => item === 2 ? 20 : item);
// console.log(updated); // [1, 20, 3]



// // immutable.js

// let book = { title : "Book 1"};

// function publish(book) {
//     book.isPublished = true;
// }

// publish(book);

// console.log(book);

// import { Map } from 'immutable';

// let book2 = Map({title : "Book 1"});

// console.log(book2.get('title')); // "Book 1"
// console.log(book2.toJS()); // {title: "Book 1"}

// function publish2(book2) {
//     book2 = book2.set('isPublished', true);
// }

// book2 = publish2(book2);

// console.log(book2.toJS()); // {title: "Book 1", isPublished: true}



// // immer

// import { produce } from 'immer';

// let book3 = { title : "Book 1"};

// function publish3(book3) {
//     return produce(book3, draft => {
//         draft.isPublished = true;    
//     });
// }

// publish3(book3); // {title: "Book 1", isPublished: true}

