var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
     console.log("INNER: ", a);
    
}



console.log(a);
console.log(b);
console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);

     two()

}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);  //will throw error cuz it was declared in nested if block
}

console.log(username); //will throw error cuz it was declared in if block


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}


//this will throw error cuz addTwo is initialized after the call of addTwo
//addTwo(5)
const addTwo = function(num){
    return num + 2
}