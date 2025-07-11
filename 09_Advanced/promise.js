//promise => A Promise is a built-in JavaScript object that represents a value that may be available now, in the future, or never.
//we use for it .\\
//States of a Promise: A Promise can be in one of three states:
// 1.= pending: The initial state. The asynchronous operation is still in progress, and the result is not yet available.
// 2.= fulfilled (or resolved): The operation completed successfully, and the Promise now has a resulting value.
//3.= rejected: The operation failed, and the Promise has a reason (an error) for the failure.

//Basic Syntx
// let promise = new Promise(function(resolve, reject) {
//     // some async task
//     if (/* success */) {
//         resolve(result); // success!
//     } else {
//         reject(error); // failure!
//     }
// });

//do async task 
// Fetching data from an API:=> It takes time for the server to respond.
// Reading a file:=> Disk I/O can be slow.
// Database queries:=> Another network operation.
// Timers (like setTimeout):=> The function executes after a delay.

const promiseOne = new Promise(function (resolved,reject) {
    setTimeout(function() {
        console.log('Async task is completed');
        resolved() //use resolve to connect with our consuming our promise
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed');

})

//another way to define it
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2 is executed');
        resolve()
    },1000)
}).then(function(){
    console.log('second promise consumed');
    
})


//pass data through resolve

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        const user ={ 
            name:'Umesh',
            email:'umesh@mail.com'
        } 
        resolve(user)
    },1000)
})

promiseThree.then(function(userData){
    console.log(userData);
    
})

//promise with error case

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (error) {
            resolve({username:"Umesh Kumawat",mail:'umesh@mail.com'})
        }else{
            reject('Error:Something went wrong')
        }
    },1000)
})

promiseFour.then(function (userInfo) {
    console.log(userInfo); //it display user info
    return userInfo.username   
}).then(                    //we can do this type of chaining
    function(username){
        console.log(username);
})
.catch(function(e){
    console.log(e); //this block execute error
})
.finally(function () {
    console.log('Our promise is executed');
    //finally is running in both case after one executed resolve or rejected
})

// promise handle with async await
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            const courseData = {
                courseName:"Javascript Tutorial",
                price:999
            }
            resolve(courseData)
        }else{
            reject("Error: This card not apply!")
        }
    },1000)
})

async function fivePromiseConsume() {
    try {
        let response = await promiseFive  //we use await where the operation taking some time ,for handling it
        console.log(response);
    } catch (error) {
        console.log(error);   
    }
}

fivePromiseConsume()

//handling api data using async method
async function getGithubUserInfo() {
    try {
        let response = await fetch('https://api.github.com/users/umeshkumawat7')
        let userData = await response.json() //because converting into json taking time
        console.log(userData);
    } catch (error) {
        console.log(error);
    }
}
getGithubUserInfo()

//handling api data using then-catch

fetch('https://api.github.com/users/umeshkumawat7')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})