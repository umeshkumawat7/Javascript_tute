// inheritance

class User{
    constructor(username){
        this.username = username
    }
    loginInfo(){
        console.log(`${this.username} loggin successfuly !`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
}

const demoUser = new Teacher('Umesh Kumawat','umesh@fb.com','1234')
demoUser.loginInfo() // also user class methode access 
console.log(demoUser.username); // Teacher class access User 

console.log(demoUser instanceof User); //true because demoUser -> Teacher -> User


// super() is used to call the constructor of the parent class.
// It allows a child (subclass) to inherit and initialize properties and behavior from the parent (base) class.

//        super(username)
//        this.email = email
//        this.password = password
//always use this syntx because If you're using extends (inheritance) and define your own constructor in the child class, you must call super() before using this, or it will throw an error.

// super() is syntactic sugar over .call(this)

// Behind working of super =>
// super(args) -> ParentClass.call(this, args)
//without super()
function Person(name) {
  this.name = name;
}

function Student(name, roll) {
  Person.call(this, name); //  like super()
  this.roll = roll;
}

const s1 = new Student("Umesh", 101);
console.log(s1);  // { name: 'Umesh', roll: 101 }

// with super
class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, roll) {
    super(name);     //  like Person.call(this, name)
    this.roll = roll;
  }
}
