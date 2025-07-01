const user = {
    userName:'Umesh',
    price:999,
    welcom:function(){
        console.log(`${this.userName},welcome in our website!`)
        //this => current context ko refer krta hai.
        //console.log(this) => current objects value
    }
}
//user.welcom()
// console.log(user)
// user.userName = 'Harish'
// user.welcom()
// console.log(user)
// console.log(this) //=>{} now in node environment it print empty {} but in browser it working as window function
// this only work with object not with function

function hello(){
    const user = "Paul"
    console.log(this.userName); //undefined
}

const helloFunc = function hello(){
    const user = "Paul"
    console.log(this.userName); //undefined
}

const arrowFunc = ()=>{
    const userName = 'JBL'
console.log(this); //undefined
}
// arrowFunc()

// how to declare arrow function
const arrofunc = (parameter)=>(parameter*2)
console.log(arrofunc(5));
// if using this syntx variable = (parameter)=>(Expression)  so we no need two write return statement
// but in this -> variable = (parameter)=>{return expression}  we need to write it