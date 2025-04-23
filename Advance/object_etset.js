//now object based getter setter
const User = {
    _email: 'a@anj.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()},
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Sets the email address.
 * @param {string} value - The new email address to be set.
 */

/*******  b24d4896-b6a2-4bb3-9caf-9be12256717d  *******/
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);