//truthly or falsy value means where we are assumeing the coming value is true or false =>
const userMail = 'user@mail.com'
if (userMail) {
    console.log(`user's mail: ${userMail}`);
}

falsy = [false, 0, -0, NaN, BigInt, 0n, "", null, undefined]
truthly = [true, 1, 'false','0'," "//in string any thing writen it like true value also empty string
 ,[] ,{} ,function(){} ]

//check empty array
const arr = []
if(arr.length===0){console.log("array is empty");}

//check object is empty
obj = {}
if(Object.keys(obj).length===0){console.log("object is empty");
}

// console.log(true==" ") //=>false
// console.log(true=="") // =>false
// console.log(true==1) // =>true
// console.log(true==[]) // =>false
// console.log(true==[1]) // =>true
// console.log(false==0); // =>true

// Nullish coalescing operator(??) :null, undefined
//value ko safely handel krne ke liye likte hai ya to value return krta hai ya null
let val1;
val1 = 5??10  //in ?? first value given 
console.log(val1)
val1 = 50??10
console.log(val1)

val1 = null??10 // in null or value it always return value
console.log(val1)
val1 = 10??null
console.log(val1)

let val2 = undefined??20
console.log(val2);
val2 = 20??undefined
console.log(val2); //same us in undefined or value it return value

// turnery operator
//condition>true:false
const iceTeaPrice = 99
iceTeaPrice>100?console.log("Its to expensive"):console.log("Its good price")