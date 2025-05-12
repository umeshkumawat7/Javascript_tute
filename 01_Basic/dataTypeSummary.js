//type of datatype is two 
//primitive type : Number , String, Boolean, BigInt, Symbol, null, Undefined

let score = 100
let socreValue = 100.5
const outsideTemp = null
let userEmail;
let isUserLoggedIn = false;
const accountId = 6729328732672122900009090n

let userId = Symbol("123")
let anotherUserId = Symbol("123")
//not both looklike same but is totaly different 
console.log(userId === anotherUserId)


// Non primitive type: arrays, objects, functions
let superhero = ['shaktiman', 'bheem','krish']

let myData = {
    name:"umesh",
    age:22
}

const myFunc = function () {
    console.log("Hello Umesh")
}

console.log(myData);
myFunc()
