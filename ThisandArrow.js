//this talks about the current object
const person = {
    name: "Anji",
    age: 22,
    greet: function () {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old."); 
        console.log(this);}
    
    
};
person.greet();
//here global object is empty whereas in 
// browswer global object is window
console.log(this);


function greet() {
    let name = "Anji";
    console.log(this.name);  //undefined..unable to use this in function
    console.log("hi");
    
}
greet();
 
const greet1= function () {
    let name = "Anji";
    console.log(this.name);  //undefined..unable to use this in function
    console.log("hi");
    
}
greet1();

//arrow function
const greetarrow= ()=> {
    let name = "Anji";
    console.log(this);  //undefined..unable to use this in function
    console.log("hi");
    
}
greetarrow();

const add=(num1,num2)=>{
    return num1+num2
} //curly braces mai return use krna pdega(explicit return)
console.log(add(2,3));
 
//implicit return
const add1=(num1,num2)=>num1+num2
//or const add1=(num1,num2)=>(num1+num2)
console.log(add1(2,3));
 