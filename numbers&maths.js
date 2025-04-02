const balance=100;
const interestRate=0.1;
const interest=balance*interestRate;
console.log(interest);

const newbalance=new Number(192.34);
console.log(newbalance);
console.log(newbalance.toFixed(2));
console.log(newbalance.toPrecision(2));

const anotherNumber=10000000;
//comma separators
console.log(anotherNumber.toLocaleString());
console.log(anotherNumber.toLocaleString("en-IN"));
const maxnum= Number.MAX_VALUE;
const mminnum= Number.MIN_VALUE; 
console.table(["max num is",maxnum,"min num is",mminnum]);
const maxnums= Number.MAX_SAFE_INTEGER;
const mminnums= Number.MIN_SAFE_INTEGER; 
console.table(["max safe num is",maxnums,"min safe num is",mminnums]);


// ++++++++++++++MATHS++++++++++++++++++
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.random());
console.log("Area of circle (5cm radius)",Math.PI*5*5);
console.log(Math.sqrt(25));
console.log(Math.pow(2,2));
console.log(2**2);
console.log(Math.min(2,3,4,5));
console.log(Math.max(2,3,4,5));
//random number between 0 and 1
console.log(Math.random());
//random number between min and max
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1)+min));