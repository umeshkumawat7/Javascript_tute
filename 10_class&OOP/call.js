function setUsername(username){
    //complex DB call
    this.username = username
    console.log('setUsername fc called')
    
}

function User(username,email,password){

    setUsername.call(this,username)
    this.email = email
    this.password = password
    
}

//const newUser = new User('Umesh','umesh@mail.com','123')
//console.log(newUser) //User { email: 'umesh@mail.com', password: '123' } || username not access it also function is called but when function execution is completed current context value or variable also finished it. So we require || call method

const user = new User('Umesh','umesh@mail.com','123')
console.log(user);
