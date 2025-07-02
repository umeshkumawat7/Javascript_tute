//for loop
for (let index = 0; index <10; index++) {
    //console.log(index); 
}

// loop on array
const myArr = ['python','java','js','ruby','c++']
for(let i=0;i<myArr.length;i++){
    //console.log(myArr[i])
    //if(myArr[i]==='js'){console.log('javaScript is best language in planet');}
}

for(let i=0;i<=10;i++){
    //console.log(`this is ${i} multiplication table`);
    for(j=0;j<=10;j++){
        //console.log(`${i} * ${j} = ${i*j}`)
    }
}

//loop on object 
const newObj = {
    name:'Umesh',
    mail:'umesh@mail.com'
}
let key = Object.keys(newObj)
let value = Object.values(newObj)

for(let i=0;Object.keys(newObj).length>i;i++){
    //console.log(` key: ${key[i]} value: ${value[i]} `);
    
}

// break and continune
for(let i=0;i<=10;i++){
    if(i==5){
        console.log('5 detected')
        break //breakk terminate the loop
    }
    console.log(`i value is ${i}`);
}

for(let i=0;i<=10;i++){
    if(i==5){
        console.log('5 is detected')
        continue //skip the current itreation
    }
    console.log(`now i value is ${i}`)
}