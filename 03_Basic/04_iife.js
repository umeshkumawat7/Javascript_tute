// Immediately Invoked Function Expression

//globle scope ke palutation se problem hoti hai kai bar usko ko htane ke liye IIFE likha jata hai. AND/ file start ke sath immediately execute ho jaye function.
//isme function ko hi () me likh dete hai or execute ke liye fir se ()

//named iife
(function chai(){
    console.log("Db connected successfuly")
})(); //if after one iife another iife is written it not executed because for ending of first iife we have used semicolon

//parameterized iife

(function chai(name){
    console.log(`${name} Db connected successfuly`);
})('Postgresql');

//unnamed iife
((name)=>{
    console.log(`${name} Db connected successfuly`);
})('MongoDB');