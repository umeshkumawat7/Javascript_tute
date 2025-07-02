//if 
if(true){
    //console.log("My name is umesh!");
} 
const isLoggin = true
if (isLoggin){
    //console.log("user login now");
}
if (2=='2'){
    //console.log("executed");
    // it executed but when we use 2==='2 ;not executed because it check value with datatype
}

const temprature = 45
if (temprature<45){
    console.log('It just a normal day!')
}else if(temprature>45){
    console.log("its to hot day")
}else{
    //console.log("its a 45 C")
}

//single line if block
const score=88
//if (score>33){console.log("Pass")}else{"Fail"};

const userLoggedIn = true
const userHaveDebitCard = true
//and(&&) operator required both value true for execute
if (userLoggedIn && userHaveDebitCard){
    console.log("User can enrol in course!");
}

const logginWithMail = true
const logginWithGoggle = false
// Or operator(||) required one value true for execution
if(logginWithGoggle || logginWithMail){
    console.log("User can access app");  
}