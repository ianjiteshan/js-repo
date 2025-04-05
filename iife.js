//immediately invoked function expression (IIFE)

//aisa function jo immediately execute hojaye..and global scope ke variables ya declaration ke pollution hatane ke liye iife ka use hua 

(function greeting(){ //named iife
    console.log("Namaste Ji");
})() ;  //semicolon is important to end context 

//now as arrow function
(()=>{
    console.log("Namaste Ji")
} )();

//parameters in IIFE
(function greetingn(name){
    console.log(`Namaste Ji ${name}`);
})("Anji")