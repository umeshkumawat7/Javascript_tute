class User{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`User ${this.username} is successfuly loggedIn !`)
    }
    static userID(){
        console.log('1234ID')
    }
}
const userOne = new User('Umesh Kumawat')
userOne.logme()
//userOne.userID() // by static methode it secure we can not access it 

class Teacher extends User {
    constructor(username){
        super(username)
    }
}

const userTwo = new Teacher('Ram')
userTwo.logme()
//userTwo.userID()  // also base/child class not access it

User.userID()  // we can only access it by using Class name not by object 

// static => The static keyword defines a method or property that belongs to the class itself, not to instances of the class.
// You access it using the class name, not with this, and not from an object.
// property of static  - * Class-Level Ownership * No Instance Required * No this to an Instance in Static Methods *