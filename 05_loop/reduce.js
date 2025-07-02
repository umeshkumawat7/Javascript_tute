// reduce function =>take each element of array and after performing operation it return final value

const newArr = [1,2,3]
const total = newArr.reduce((acc,crrVal)=>acc+crrVal,0)
// console.log(total)

const final = newArr.reduce(function (acc,currVal) {
    console.log(`acc : ${acc} and currValue : ${currVal}`)
    return acc+currVal
},0)

//console.log(final);

const myShoppingCart = [
    {
        courseName:'Javascript',
        price:2999
    },
    {
        courseName:'python',
        price:3999
    },
    {
        courseName:'C++',
        price:999
    },
    {
        courseName:'Mobile Development',
        price:12999
    },
    {
        courseName:'Machine Learning',
        price:29999
    },
]

const payAmount = myShoppingCart.reduce((startPrice, currentPrice)=>currentPrice.price + startPrice, 0)

console.log(payAmount);
