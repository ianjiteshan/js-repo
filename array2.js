const bollywood_heroes=["Shahrukh", "Salman", "Rajkumar"];
const hollywood_heroes=["Tom", "Vin","Leanardo"];

console.log(bollywood_heroes);
console.log(hollywood_heroes);
//pushing one array into the other
//bollywood_heroes.push(hollywood_heroes);
console.log(bollywood_heroes);

//concatenating two arrays
const all_heroes=bollywood_heroes.concat(hollywood_heroes);
console.log(all_heroes);
//spread operator
const all_heroes2=[...bollywood_heroes,...hollywood_heroes];
console.log(all_heroes2);

//flat method 
const another_array=[1,2,3,[4,5,6],[7,8,9,[10,11,12]]];
console.log(another_array);
console.log(another_array.flat(Infinity));

console.log(Array.isArray("anjitesh"));
console.log(Array.from("anjitesh"));
console.log(Array.from({name:"anjitesh"}));  //object passed...empty array cuz we didnt specify whether to use keys or values

let rollno1=1;
let rollno2=2;  
let rollno3=3;

const rollnos=Array.of(rollno1,rollno2,rollno3);
console.log(rollnos);