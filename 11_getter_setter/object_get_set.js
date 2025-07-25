const user = {
    _email : 'umesh@ai',
    _password : 'abcd',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const usr = Object.create(user)
console.log(usr.email)