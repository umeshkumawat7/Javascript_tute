// this is singalton , way to create object
const olaUser = new Object()
const newOlaUser = Object.create(null)
//console.log(olaUser);
//console.log(newOlaUser);

//and this object litrel way to !=> there is no difference it just secinerio and interview perspective importent term =>
const mySym = Symbol('mykey') //for passing Symbol in object we first need to decleare symbol out of obj than we refer in as key value formate
const jsUser ={
    name:'Suresh',
    age:20,
    email:'demo@gmail.com',
    isLoggedIn:true,
    id:986,
    "full Name":"Umesh Kumawat", //if we have key with spacing we use this syntx quotes
    lastLoginDays:['monday','saturday'],
    [mySym]:'mykey2' //this is syntx to asin symbol we first need to declare
}
//console.log(jsUser.name);// to access value using key
//console.log(jsUser["full Name"]); //this the only way to access spacing key 
//console.log(jsUser[mySym]); //to access symbol value

jsUser.email = "umesh@google.com" //this mail modified
//Object.freeze(jsUser) // this can freez object because after declare can't modify
jsUser.email="umesh@apple.com" //this value not aasign because object is freez
//console.log(jsUser);

jsUser.greeting = function(){
    console.log(`Hello User ${this.name}`) //this keyword refer same object so we don't write manual obj name
}

console.log(jsUser.greeting())