const appuser= new Object();
appuser.name="anji";
appuser.age=22;
appuser.role="admin";
appuser.fullname={username:{firstname:"anji",
    lastname:"shan"}};
console.log(appuser); 
console.log(appuser.fullname.username.firstname);


const obj1={1:"Anji",   
    2:"Shan",   
}
const obj2={3:"Rishi",
    4:"Jha"}


const obj3=Object.assign({},obj1,obj2);
console.log(obj3);
 //spread operator-better way to combine
const obj4={...obj1,...obj2};
console.log(obj4);

//list of objects
const users=[{name:"anji",age:22},{name:"shan",age:23}];
console.log(users[1].name);  //list method..then use object method
users.map((user)=>{
    console.log(user.name);
}) //map method

console.log(appuser);
console.log(Object.keys(appuser));
console.log(Object.values(appuser));
console.log(Object.entries(appuser)); //key value pair
console.log(appuser.hasOwnProperty("name"));  //object m wo value hai ki nahi




//destructuring
console.log(appuser.name, appuser.role);
const {name: n,role: r}=appuser;
console.log(n,r);