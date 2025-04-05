function addnumber(num1, num2) { 
    return num1 + num2; 
}
console.log(addnumber(5, 6)); 

function hellouser(name) {  
    return `Hello ${name}`
} 
console.log(hellouser("Anji"));  //argument passed
console.log(hellouser(""));  //empty argument
console.log(hellouser()); //no argument

console.log("hellouser1() fucntion");
function hellouser1(name='Anji') {   //default argument
    if(!name){ //when name is undefined(no argument passed)
        console.log("Please enter a name");
    }
    return `Hello ${name}`
} 
console.log(hellouser1("Anji"));  //argument passed
console.log(hellouser1(""));  //empty argument
console.log(hellouser1()); //no argument

//rest operator..it will convert the array into comma separated parameters..shipping is the first parameter..items is the rest of the parameters..spread operator rice
function calcCartPrice(shipping, ...items) { 
    return items;}

console.log(calcCartPrice(10, 'Shirt', 'Pants', 'Shoes'));

//object in function
function newFunc(anyobject) {
    console.log(`Name is ${anyobject.name} and age is ${anyobject.age}`);
   
}
newFunc({name: "Anji", age: 22});

//arrays in function
function newFunc1(anyarray) {
    console.log(` 2nd element is ${anyarray[1]}`);
   
}
const newarray=[100,200,300];
newFunc1(newarray);