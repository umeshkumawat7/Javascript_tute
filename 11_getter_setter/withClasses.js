class User {
    //#password;  for truly private
    constructor(email,password){
        this._email = email
        // this.#password = password //#password;  for truly private
        this._password = password

    }
    get email(){
        return this._email.toUpperCase() //also we add some method and show to user
    }
    set email(value){
        this._email = value   // how to set value,  we are overriding constructor because both method we make it seprate 
    }
    // set email(value) {  //Controlled Access
    // if (!value.includes('@')) {
    //     throw new Error("Invalid email!");
    // }
    // this._email = value;
    //   }

    set password(value){
        // this.#password = value
        this._password = value
    }
    get password(){
        // return  this.#password;
        return this._password 
    }
}

const umesh = new User('umesh@mail.com','abcd')
console.log(umesh.email);
umesh.email = 'umesh@mail.ai'
console.log(umesh.email);
console.log(umesh.password) 
umesh.password = 1234
console.log(umesh.password) 


// They are special methods in a class or object that allow you to:

// Get a property (read it) — via a getter

// Set a property (write/update it) — via a setter