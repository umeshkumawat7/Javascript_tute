const user = {
    username: 'Umesh Kumawat',
    isLoggedIn: true,
    loginCount:9,
    greet:function(){
        console.log(`Welcome ${this.username} in JS series!`);
        
    }
}
//console.log(user);
console.log(user.greet());
console.log(this); //this is empty {} now but when we print in browser it print window globle object 

function User(username,isLoggedIn,email){
    this.username = username            //this.username we creating variable and asigning value
    this.isLoggedIn = isLoggedIn
    this.email = email
    this.welcome = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this  // without writing returning it also working but for good practice it  
}

const userOne = new User('Umesh',true,'umesh@mail.com') //without defining new keyword it overriding value but when we write new key word so new Instance is created 
const userTwo = new User('Ram',false,'ram@mail.com')

console.log(userOne);
console.log(userTwo.welcome());

// new is a constructor function when we define it so *first it new instance created then fill the value like say new object is created