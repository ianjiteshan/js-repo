//basic class
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
//now we can use basic class ke properties and methods in extended class(child class will inherit from the parent class)
class Teacher extends User{ //teacher is child class here
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}


const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.logMe()
const masalaChai = new User("masalaChai")
masalaChai.logMe()
//child is an instance of parent
console.log(chai instanceof User);