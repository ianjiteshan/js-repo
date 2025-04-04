//singleton when declared using constructors
//var obj1 = new Object();

//object literal
const mysum=Symbol("mysum");
const obj2 = {name: "Anjitesh",
            age: 20,
            email: "ZVx8R@example.com",
            islogedin: true,
            lastlogin: ["yesterday", "today", "tomorrow"],
            //symbol as key
            [mysum]: "key1"};

console.log(obj2.email);
console.log(obj2["email"]);
console.log(obj2);
obj2.email="a@b.com";
console.log(obj2.email);
//freeze the object means you cannot change the object
//Object.freeze(obj2);
obj2.email="c@d.com";
console.log(obj2);

obj2.greeting=function(){
    console.log("Namaste Ji");
}
obj2.greeting2=function(){
    console.log(`Namaste Ji,${this.name}`);}
console.log(obj2.greeting());
console.log(obj2.greeting2());

console.log(obj2);