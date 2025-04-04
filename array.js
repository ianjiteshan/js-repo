//0 based indexing/shallow copy/multi data type
const arr=[1,2,3,4,5];
const heroes=["spiderman","batman","ironman"];
const arr2=new Array(6,7,8,9,10);
console.log(arr,heroes,arr2);
console.log(arr[1],heroes[1],arr2[1]);

//array methods
arr2.push(11)
arr2.push(12)
console.log(arr2);
arr2.pop();
console.log(arr2);
//unshift adds to the beginning
arr2.unshift(0);
console.log(arr2);
arr2.shift();
console.log(arr2);

console.log(arr2.includes(11));
console.log(arr2.indexOf(11));

//Adds all the elements of an array into a string, separated by the specified separator string.
const newarr=arr2.join();
console.log(newarr);
//splits the string into an array..splits by checking the specified separator
const newarr2=newarr.split(",");
console.log(newarr2);

//slice and splice
//slice returns a section of an array while orignal array remains same
console.log("Array before slice",newarr2)
console.log("Array after slice",newarr2.slice(1,3));
//splice removes elements from an array and modifies the original array
console.log("Array before splice",newarr2)
console.log("Spliced array",newarr2.splice(1,3));
console.log("Array after splice",newarr2)