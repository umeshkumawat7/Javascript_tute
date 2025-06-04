const Name = 'Umesh'
const Repocount = '50'

console.log(`Hello my name is ${Name} and my repo count is ${Repocount} .`)
// this methode is call => string interplations

// another methode for define string  =>
const userName = String('Umesh Kumawat')
console.log(userName[1])
console.log(userName.toLowerCase())
console.log(userName.charAt(10))    // find char base on index
console.log(userName.indexOf('m')) //find  index of char
console.log(userName.length)        // find length

const firstName = userName.substring(0,5) // first starting point second ending point
                                          // we gate new string out of this
console.log(firstName) 

const anotherString = userName.slice(-13,-2) //compare to substring we can pass negative index
console.log(anotherString)

const newString = "  umesh  "
console.log(newString.trim())   // starting and ending space ko remove kr deta hai 

const url = "https://www.youtube.com/watch?v%20fozwN"
console.log(url.replace('%20','-'))  // for replace value in string use it first place and second value

console.log(url.includes('watch'))  // check value inside string return bool

const strArry = 'umesh-kumawat-ramena-behpur'
console.log(strArry.split('-')) // split methode return array