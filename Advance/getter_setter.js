
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
//getter use kiya to setter use krna hi pdega
    get email(){
        return this._email.toUpperCase()
    } //hum _email kr rhe wrna constructor(email) aur (_email)getter setter mai race lag jati h ki konsa implement krega usko..and max call stack error ajati h

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}anjitesh`
    }

    set password(value){
        this._password = value
    }
}

const anjitesh = new User("anji@gmail", "abc")
console.log(anjitesh.email);
