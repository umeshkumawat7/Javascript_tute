const num =1234
// console.log(num)

const number = new Number(35)
// console.log(number)

// console.log(number.toString())  //conversion into string


const newNum = 126.67098
// console.log(newNum.toFixed(2))  //show only number after desimal point
// console.log(newNum.toPrecision(4))  // not it uses carefuly when we must now about return degit length it work starting lenth of number

const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN')) // return number in digit formate according to country standard like -'en-US'

//all function return string value

x=Number.MAX_SAFE_INTEGER
// console.log(Number.MIN_SAFE_INTEGER)

//+++++++++++++++++++++++++=|MATH|=+++++++++++++++++++++++++++++
//console.log(Math)
// console.log(Math.abs(-7)) //absolute value it convert negative value into positive

// console.log(Math.round(4.4)) //it return value after round-off =4
// console.log(Math.round(4.8))    // =5

// console.log(Math.ceil(4.2)) //always return lowest order value
// console.log(Math.floor(4.8)) // always return highest value
// console.log(Math.min(4,5,1,12,9)) // return min value
// console.log(Math.max(4,5,1,12,9))   // return max value

// console.log((Math.random()*10)+1) // return random value between 0 and 1
// console.log(Math.floor((Math.random()*10)+1))

min = 10
max = 20
console.log(Math.floor(Math.random()* (max-min +1)+min))