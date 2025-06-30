const tinderUser = new Object() //singalton
tinderUser.name = 'Umesh'
tinderUser.age = 22
tinderUser.email = 'some@gmail.com'
tinderUser.isLoggedIn = true
//console.log(tinderUser);

const newUser ={
    userDetails:{
        userFullName:{
            fname:'Umesh',
            lname:'Kumawat'
        }
    }
}
//console.log(newUser.userDetails.userFullName.fname);

const obj1 = {a:1,b:2}
const obj2 = {c:3,d:4}
//for merge two object
//const obj3 = Object.assign({},obj1, obj2) //this is {} for strict target we want this , also assign is old way now we use this
//const obj3 = {...obj1,...obj2} // we use spread operator
//console.log(obj3);

//console.log(tinderUser);
//console.log(Object.entries(tinderUser)); // return array of key value pair inside nested array form

//console.log(Object.keys(tinderUser)); // return array of keys in objject
//console.log(Object.values(tinderUser));// return array of values in object
//console.log(Object.hasOwn(tinderUser,'name'));//in (objectName,keyName) we pass and check it existing or not and return bool value
//console.log(tinderUser.hasOwnProperty('name'));//both method work same, it check if given key is existing or not and given bool output

const user = [{id:1,email:'some1@mail.com'},
    {id:2,email:'some2@mail.com'},
    {id:3,email:'some3@mail.com'}
]       //this is another methode we recived multiple object in array

//console.log(user[1].email);

const newMember = {
    name:'Allen',
    cohortInstructerName:'Paul',
    age:45,
    email:'rest@mail.com',
    isRegistered:true
}

const {cohortInstructerName}=newMember //this process called object de-structure 
//console.log(cohortInstructerName);
const {cohortInstructerName:instructerName} = newMember //now we can modify key name for us  
//console.log(instructerName);

