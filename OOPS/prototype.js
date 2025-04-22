// let myName = "anjitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength); //we can obv do it by trim+length but we are injecting a method trueLength into the object


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.anjitesh = function(){
    console.log(`anjitesh is present in all objects`);
}

Array.prototype.heyAnjitesh = function(){
    console.log(`Anjitesh says hello`);
}

//function, array, string all are objects...objects have parent of null

heroPower.anjitesh() //defined in the object hence true for arrays as well
myHeros.anjitesh()
myHeros.heyAnjitesh() //defined cuz array prototype has it
//heroPower.heyAnjitesh(). //wil throw error as array has it not the object

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User //proto basically links the two objects

console.log(TeachingSupport);
console.log(TASupport);
// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(TeachingSupport.makeVideo); //teachingsupport has values from teacher






let anotherUsername = "ChaiAurPadhai     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"anjitesh".trueLength()
"iceTea".trueLength()