//The Temporal API is a modern replacement for the JavaScript Date object, providing more precise and flexible date-time handling.
const { Temporal } = require('@js-temporal/polyfill');

console.log(Temporal.Now.instant().toString());
console.log(Temporal.Now.plainDateISO().toString());

let ajkadate= new Date();
console.log(ajkadate);
console.log(ajkadate.toString());
console.log(ajkadate.toLocaleString("En-IN"));
//ajkadate is an instance of object date
console.log(typeof ajkadate);  

let meradate= new Date(2025, 3, 3, 2, 2, 2, 2);
console.log(meradate.toString());
console.log(ajkadate.getMonth()+1);