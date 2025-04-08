// if else statement 
let a = 10; 
let b = 20;
if (a>b){
    console.log("A is greater");}
else if (b>a){
    console.log("B is greater");}
else{
    console.log("Both are equal");}

var password = "";
if (password.length== 8){
    console.log("Welcome");
}
else if(password.length>= 8){
    console.log("Password is too long Password should be 8 characters");
}
else{
    console.log("Password is too short Password should be 8 characters");
}




//switch case

    
    //var day = prompt("Enter a number between 1 to 7");
    let day = "6";
    switch (day){
        case "1":
            console.log("Monday");
            break;
        case "2":
            console.log("Tuesday");
            break;
        case "3":
            console.log("Wednesday");
            break;
        case "4":
            console.log("Thursday");
            break;
        case "5":
            console.log("Friday");
            break;
        case "6":
            console.log("Saturday");
            //break;  //this and next line will execute as it is not break
        case "7":
            console.log("Sunday");
            break;
            
        default:
            console.log("invalid day");
    }
        

//falsy values-These values evaluate to false when converted to a boolean
//false,0,null,-0,NaN,"",undefined, BigInt 0n;

//rest all are truthy values
//example='0','false'," ",[],{},function(){},true;

//nullish coalescing operator
let a1 = 0;
let b1 = null;
console.log(a1??b1);

//ternary operator 
//condtion ? true: false
let a2 = 10;
let b2 = 20;
let c2 = a2>b2 ? "a2 is greater" : "b2 is greater";
console.log(c2);