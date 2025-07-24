// quetion is can we change value of PI from 3.141 to 4 or 5 like integer . The answer is not because there object values property not permission to change it like writable = false

console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);

const piProperty = Object.getOwnPropertyDescriptor(Math,'PI')
//console.log(piProperty) 

//to check any objects key property we use this method => Object.getOwnPropertyDescriptor(ObjectName,'KeyName')

//{
//   value: 3.141592653589793,
//   writable: false,  //the reason is this
//   enumerable: false,
//   configurable: false
// }
//Object.defineProperty(Math,'PI' ,{writable:true}) //TypeError: Cannot redefine property: PI

Math.PI = 5
console.log(Math.PI);

const myObj = {
    userFname:'Umesh',
    userLname:'Kumawat',
    isLoggedIN:true,
    userId:12345 // now task is try to stop for itration
}
console.log(Object.getOwnPropertyDescriptor(myObj,'userId'));

Object.defineProperty(myObj,'userId',{
    value:12345,
    writable:false,  //no one can change value
    enumerable:false ,//no one can itration on it
    // configurable:false
})

console.log(Object.getOwnPropertyDescriptor(myObj,'userId'));
myObj.userId=125
console.log(myObj.userId) //12345 so it can't change

for (let [key ,value] of Object.entries(myObj)) {
    console.log(`${key} : ${value}`);
}

//we can not iterate userId
// userFname : Umesh
// userLname : Kumawat
// isLoggedIN : true