// array declaration
const arr = [0,1,2,3,4,5,6]
// console.log(arr)

const myArry = new Array(0,1,2,3,4,5,16,'umesh')
// console.log(myArry)

//+++++++++++++++===|methodes|===++++++++++++++++++++
arr.push(7)
//console.log(arr);

arr.pop()
//console.log(arr);

arr.unshift(10)
//console.log(arr)

arr.shift()
//console.log(arr)

//console.log(arr.includes(9))

//console.log(arr.indexOf(9))

const newArray = arr.join()
//console.log(newArray)
// temp#//===>  myArry = new Array(0,1,2,3,4,5,16,'umesh')
const arrB = myArry.slice(2,4)
// console.log("B",arrB)
// console.log('A',myArry)

const arrC = myArry.splice(2,2,9,12)
// console.log("C",arrC)
// console.log('A',myArry)

//.concat
const marvel_hero = ["captain","ironman","thor"]
const dc_hero = ["adam","aqua","bat"]

const all_hero = marvel_hero.concat(dc_hero)
// console.log(all_hero)

const new_heros = [...marvel_hero, ...dc_hero]  //spread methode
// console.log(new_heros)

const another_arry = [1,2,3,4,[7,8],5,6,9,[10,11,12,[100,200,300]]]
const another_new_arry = another_arry.flat(Infinity)
// console.log(another_new_arry)

console.log(Array.isArray("Umesh"))
console.log(Array.from("Umesh"))

const score1 = 100
const score2 = 100
const score3 = 100
console.log(Array.of(score1,score2,score3))