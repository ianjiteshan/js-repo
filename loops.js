//for loop
console.log("forloop");
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//while loop
console.log("whileloop");
let j = 0; 
while(j < 3) {
    console.log(j);
    j++;
}

//do while loop
console.log("dowhileloop");
let k=1;
do{
    console.log(k);
    k++;
}
while(k<10);

//loop in loop
console.log("loopinloop");
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(i, j);
    }
}

//break
console.log("break");
for (let i = 0; i < 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i); }

//continue
console.log("continue");
for (let i = 0; i < 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}

//for of-array and other iterables
console.log("forof");
let o = [1, 2, 3, 4, 5];
console.log(o);
for (const c of o) {
    console.log(c);
}

//for in-object 
console.log("forin");
let o1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
};
console.log(o1);
for (const c in o1) {
    console.log(c);
}

//map
console.log("map");
let o2 = new Map();
o2.set("a", 1);
o2.set("b", 2);
o2.set("c", 3);
o2.set("d", 4);
o2.set("e", 5);
console.log(o2);
for (const [key, value] of o2) {
    console.log(key,"has", value);
}

//for each
console.log("foreach");
let o3 = [
    {
        username: "Anji",
        age: 20,
    },
    {
        username: "Shan",
        age: 20,
    },
    {
        username: "Rishav",}
];
console.log(o3);
o3.forEach((c) => {
    console.log(c.username);
})