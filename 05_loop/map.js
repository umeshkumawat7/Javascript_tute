// map=> return a new array check each element of array and perform operation and return it
const newArr = [1,2,3,4,5,6,7,8,9,10]
const arr = newArr.map(function (num) {
    return num+10
})
//console.log(arr)
const Arr = newArr.map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num%3==0)
console.log(Arr)// we can use multiple map filter function combine