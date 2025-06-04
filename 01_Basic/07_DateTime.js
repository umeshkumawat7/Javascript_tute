let date = new Date()
console.log(date)
console.log(date.toString())
console.log(date.toISOString())
console.log(date.getTime())
console.log(date.toJSON())
console.log(date.toDateString())
console.log(date.toLocaleDateString())
console.log(date.toTimeString())

//create date
let createDate = new Date(2024,6,6,6,40)  //year month date hour minuts *in this methodes month start with 0 index
// console.log(createDate.toString())

let createNewDate = new Date("1-12-2024") // we can specify according to us pattern ("2024-07-12")
// console.log(createNewDate.toString())

let timestamp =  Date.now()
console.log(timestamp)
console.log(createDate.getTime())
//it return in mili sec 
console.log(Math.floor(timestamp/1000)) //in sec