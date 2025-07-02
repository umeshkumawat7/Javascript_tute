//filter always return a new array check condition than return if applicable


const myArry = ['js','py','cpp','c','java','ruby','go']

const abc = myArry.forEach((item)=>item)
//console.log(abc); // =>undefined nothing return it 

const numArr = [1,2,3,4,5,6,7,8,9,10]
const newNumArr = numArr.filter((num)=>num>5)
// OR => numArr.filter(function(num){return num>5})
//console.log(newNumArr);
//we make it filter using forEach
let shortArr = []
numArr.forEach(function (num) {
    if (num>5){shortArr.push(num)}
})
//console.log(shortArr);
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBook = books.filter((item)=>item.genre=='Science')
//console.log(userBook);
userBook = books.filter((item)=>item.genre=='History' && item.publish>1986) //using && operator apply multiple filter
//console.log(userBook)