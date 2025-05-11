// let sym1 = Symbol('id');
// let sym2 = Symbol('id');
// console. log(sym1);
// console. log(sym2);
// console. log(sym1== sym2); //false
// console. log(sym1=== sym2); //false

// let sym3 = '1';
// let sym4 = 1;
// console. log(sym3=== sym4); //false
// console. log(sym3== sym4); //true




// //for loop
// let i=5
// for(let i=7;i<=10;i++){
//     console.log(i) //block scoped
// }
// console.log(i) //5



console.log(add(1,2));
function add(a, b) {
    return a + b;
  } //hoisting a fucntions


//function expression
const multiply = function(a, b) {
    return a * b;
  };
  console.log(multiply(2,3));

//arrow function

const divide = (a, b) => {
    return a / b;
  };

  console.log(divide(2,3)); 
  
const square = x => x * x;
console.log(square(2));


//immediately invoked function expression (IIFE)
(function() {
    console.log("I run immediately!");
  })();


  //closure 
  function outer() {
    let outerVar = "I'm outside!";
  
    function inner() {
      console.log(outerVar); // Can access outerVar!
    }
  
    return inner;
  }
  
  const myFunc = outer();
  myFunc(); // I'm outside!


console.log(a);
const a = 10;