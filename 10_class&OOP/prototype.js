const myHero = ['thor','IronMan']

const heroPower = {
    thor:'hammer',
    spiderman:'sling',
    getspiderPower:function(){
        console.log(`spidy superpower is ${this.spiderman}`); 
    }
}

//here we created a new methode in object so any one like string ,array can access it .We assign it in top level hirerachy

Object.prototype.hello = function(){
    console.log('Welcome our user!');
}

myHero.hello()
heroPower.hello() //array and object can call it

Array.prototype.greet = function(){
    console.log('welcom with greet');
}

myHero.greet() //we set this methode in Array prototype so it can access it but our object can access it
//heroPower.greet()

//Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // here we are inheriting TeachingSupport in TASupport so it can access TeachingSupport methode
}

Teacher.__proto__ = User //same there Teacher inherating User methodes

//modern syntx
Object.setPrototypeOf(TeachingSupport, Teacher)
console.log(TeachingSupport.name) // chai : Because TeachingSupport inherating Teacher and above Teacher inherating User and in user name value so we can access it.

// create own string method that return a true length

let newUsername = 'Umesh     '

String.prototype.trueLength = function(){
    console.log(this);
    console.log(this.trim().length)
}
newUsername.trueLength()
'Python '.trueLength()
'Macha'.trueLength()