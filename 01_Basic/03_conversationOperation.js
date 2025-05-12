//Conversation In Number
let score = undefined//null//true//"abc"//"33abc"//"33" //33

// console.log(score)
// console.log(typeof score)

let valueInNumber = Number(score)
// console.log(valueInNumber)
// console.log(typeof valueInNumber)
// "33" => 33
// ""   => 0
//"33abc" => NaN
//"abc" => NaN
// true => 1; false => 0
// null => 0
//undefined => NaN

let isLoggedIn = "abc"//1//true
let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)
// console.log(typeof booleanIsLoggedIn);
//1 => true; 0 =>false
//""=> false; "umesh"=> true

let someValue = true//33
let valueInString = String(someValue);

// console.log(valueInString);
// console.log(typeof valueInString);

// operation in conversations

console.log("1"+1)
console.log(1+"1")
console.log("1"+1+1)        // output=111 
console.log(1+1+"1")       // output=21     this we can say guidline or rule for it if first we got string value it convert in string then doing operation same as number

console.log(+true)
console.log(+"");  // same this 
