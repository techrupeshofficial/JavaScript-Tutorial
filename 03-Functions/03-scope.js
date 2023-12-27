/*
var a = 500

if(true){
var a= 10
let b= 20
const c= 30

}

console.log(a)
// console.log(b)
// console.log(c)

*/






/*
let a=10
const b=20
if(true){
    let a=100000
    const b= 2000000
    console.log(" Inner value of  A: ", a)
    console.log(" Inner value of  B: ", b)
}

console.log(a)
console.log(b)
*/






/*

function one(){
    const userName ="Rupesh"

    function two(){
        const email = "rupesh@gmail.com"
        console.log(email)
        console.log(userName)
    }
    // console.log(email)     // we can not access of this value beacuse of scope value 
    two()
}
one()
*/




/*

if(true){
    const userName ="Rupesh"
    const product ="Laptop"
    if(true){
        let a=10
        let b=20
        console.log(a, userName)
    }
    // console.log(a) // not print a value here  bacuse a  is scope level 
    
}
// console.log(userName)    this will also not print here  beacuse  useerName is scope level 


*/








// *****************************************   hoisting    *****************************************


console.log(addOne(5))   // here will print beacuse of hoisting , hoisting will work normal function 
function addOne(num){
    return num +1
}



//  here will not print num value  beacuse of hoisting, hoisting will not work variable function and arrow function 

// console.log(addTwo(5))
const addTwo = function(num){
    return num +4
}


// console.log(addThree(5))
const addThree = (num) =>{
    return num +500
}


