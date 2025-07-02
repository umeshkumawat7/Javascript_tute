//for of loop
// for (const element of object) {
    
// }
// for of with array
const myArry = ['js','py','cpp','c','java','ruby','go']

for (const element of myArry) {
    //console.log(element);
}
//for of with string
let greeting = 'Hello World!'
for(const greet of greeting){
    //console.log(`char is now ${greet}`);
}

//Map =>Map objects are collection of key value pairs it stored in ordered of insertion and it don't allow duplicate value
let map = new Map()
//map.set({name:'umesh',mail:'umesh@mail.com'})
map.set('age',22)
map.set('isLoggin',true)
map.set('location','Indore')
map.set('age',22) // duplicate not allowed
//console.log(map)

for(const [key,value] of map){  //destructure map = [,]
    //console.log(`value => ${key} : ${value}`);
    
}

//for of with object
const newObj = {
    name:'umesh',
    class:'XII'
}
// for (const element of newObj) {
//     console.log(element);
// }
// for of => not working with object because object is not iterable
