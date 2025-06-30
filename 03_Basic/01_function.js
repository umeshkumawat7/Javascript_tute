//function
function demoFunction(){
    console.log('Hello world')
}
//demoFunction()

function addTwoNumber(num1,num2){ //funcName(para1,para2) it called parameter
    return num1+num2
}
//console.log(addTwoNumber(10,20)); //this (arg1,arg2) it called argument

const result = addTwoNumber(20,30) // we can also store in another variable
//console.log('Result: ',result)

function loggInUserMassage(user){
    if(!user){
        return 'Please enter userName'
    }
    return `${user} is loggeIn !`
}
//loggInUserMassage('Umesh')
const logginResult = loggInUserMassage() //output undefined for user place 
//console.log(logginResult)

function calculatePrice(...num){ //in this situation ... operator work like rest
    console.log(num)  //[ 100, 200, 300, 400 ]
}
//calculatePrice(100,200,300,400)
function calculateAnotherPrice(val1,val2,...num){
    console.log(num)  //=>[ 300, 400, 500 ] because we passed first and second value in val1 ,val2
}
//calculateAnotherPrice(100,200,300,400,500)

const user ={
    name:'umesh',
    mail:'umesh@mail.com'
}
function details(anyObject){
    console.log(`User name is ${anyObject.name} and there mail is ${anyObject.mail} !`)
}
//details(user) //we can pass any object in function and retrive data
details({name:'Elon',mail:'elon@tesla.com'}) //also we pass direct object

const newArray = [100,200,300,400]
function secValueInArray(arr){
    console.log(arr[1])
}
secValueInArray(newArray)
secValueInArray([1000,2000,3000,4000]) //both methode for pass array as argument