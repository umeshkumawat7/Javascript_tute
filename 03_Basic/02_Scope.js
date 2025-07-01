// Scope is nothing just a block in this block we can define variable and doing operations out of block we nothing do . In one line { .../this is block.../} 
var age = 33
let mail = 'user@mail.com'
const location = 'Behpur'
if (true){
    let username = "Umesh"
    let mail = 'newuser@mail.com'
    const location = 'Mandsaur'
    var age =22
}
//console.log(username); // can't access outside of block
//console.log(age); // =>22 age be changed var not follow scope it make problems
//console.log(location); // not changed
//console.log(mail); // not changed

if (true){
    const newUser = 'Ram'
    if(true){
        const lname = 'Kumar'
        //console.log(newUser+lname) // we only access the globle varible or parent scope value but inner scope don't give access permission for outside
    }
    //console(lname) //not accessable
}
//console.log(newUser); // not accessable

//addOne(10,20) // if we define function like this so we can access function before initialization
function addOne(num1,num2){
    console.log(num1+num2)
}
//add(20,20) // if we declare function like this so we can not access function befor initialization
const add =function addTwo(num1,num2){
    console.log(num1+num2);
}
//add(10,90)

function firstFunc() {
    const fname = "Allean"
    function secondFunc() {
        const lname = "Walker"
        console.log(fname+lname);
    }
    // console.log(lname) not accessable
    secondFunc()
}
//console.log(fname) //cant access
firstFunc()