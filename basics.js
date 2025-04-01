let names = "Anji"; 
var gender = "Male"; 
console.log(names, gender);  
//use let and const..var is avoided due 

//equality operators
console.log(2==2); //loose equality
console.log(2==3);
console.log("2"==2);
console.log(2>3);
console.log(2<3);
console.log(2>=2);
console.log(2<=2);
console.log(2!=3);
console.log(2===2); //strict equality (type and value should be same)
console.log("2"===2);
console.log(2!==3); //strict not equal

let firstfavnumber = 2;
let secondfavnumber = 2;
console.log("The condition is",firstfavnumber==secondfavnumber);
console.log("The condition is",firstfavnumber===secondfavnumber);

//strings
firstname= `Anji`;
secondname= "             Shan";
console.log(firstname); 
console.log(firstname.length);
console.log(firstname.concat(" ",secondname)); //firstname + secondname
console.log(firstname.toUpperCase());
console.log(firstname.toLowerCase());
console.log(firstname.slice(0,2));
console.log(firstname.slice(0,2).toUpperCase());
console.log(firstname[0]);

//append
firstname+= `tesh`;
console.log(firstname);
//split and join method
console.log(firstname.split(""));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join();
console.log(text);

//includes
console.log(firstname.includes("ji"));
//trim
console.log(secondname);
console.log(secondname.trim());

//$
console.log(`My name is ${firstname} and this is Rishav's pc also "wow"`);

//type conversion
let a = 2;
let b = "2";
let c = "2.4";
console.log(a+b);
console.log(a+Number(b));
console.log(Number(a)+Number(b));
console.log(parseInt(a), typeof a);
console.log(parseFloat(c), typeof c);

var ao= "Anjit";
console.log(ao);
if(ao=="Anjit"){
    let ao= "Anji";
    console.log(ao);
}
console.log(ao);