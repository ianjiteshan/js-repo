const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);
//descriptor gives information about the property
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai aa rahi hai");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
//defining and changing property
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') //if value is a func..then we dont print it
     { 
        
        console.log(`${key} : ${value}`);
    }
}