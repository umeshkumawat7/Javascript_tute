// for-in loop
// with object
const myObj = {
    py:'python',
    js:'JavaScript',
    java:"java",
    go:"go",
    rb:'Ruby',
    c:'C',
    cpp:'C++'
}
for (const key in myObj) {
    //console.log(`key:value => ${key} : ${myObj[key]}`);
}

const myArry = ['python','java','swift','kotlin']
for(const language in myArry){ //for in loop give us index of value in array
    //console.log(language,myArry[language]); 
}

//with map
const map = new Map()
map.set('IN','India')
map.set('USA','United State of America')
map.set('FR','France')
// console.log(map);
for (const code in map){
    console.log(code) //map is not itreable so it is not executed
}