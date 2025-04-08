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
    console.log(i);
}

//continue
console.log("continue");
for (let i = 0; i < 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}