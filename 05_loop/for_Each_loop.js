// for Each loop
const myArry = ['js','py','cpp','c','java','ruby','go']
//myArry.forEach((item)=>{console.log(item)})
//forEach (item,index,array)provides with three parameter first item,second index,third array
//or
myArry.forEach(function(item,index){item,index})

//one more way
function printMe(item){
    console.log(item)
}
//myArry.forEach(printMe) //we are only declaring not executing printMe()

const myCodding = [
    {
        programmingLanguage:'Python',
        fileName:'py'
    },
    {
        programmingLanguage:'JavaScript',
        fileName:'js'
    },
    {
        programmingLanguage:'C++',
        fileName:'cpp'
    }
]
myCodding.forEach((item)=>console.log(item.programmingLanguage))