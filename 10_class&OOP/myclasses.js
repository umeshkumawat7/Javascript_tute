//// after ES6 2015 to class available in JS

class User{
    constructor(username,email,password){
        this.username =username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    loginInfo(){
        return`User ${this.username} is loggin at ${Date()}`
    }
}

const hello = new User('Umesh','umesh@fb.com','123')

console.log(hello.loginInfo())
console.log(hello.encryptPassword())

// Behind the scene

function NewUser(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

NewUser.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
NewUser.prototype.loginInfo = function(){
    return `User ${this.username} loggin at ${Date()}`
}

const userOne = new NewUser('Umesh Kumawat','umesh@ig.com','1234')
console.log(userOne.encryptPassword())
console.log(userOne.loginInfo())