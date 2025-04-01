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
    let day = 8;
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
            break;
        case "7":
            console.log("Sunday");
            break;
            
        default:
            console.log("invalid day");
    }
        
