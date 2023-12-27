/*
function sayHello(){
    console.log(" Hello ")
}

sayHello()
*/






/*
function add(){
  num1 =5
  num2=10
  console.log(num1+num2)
}
add()
*/





/*

function addNumber(a,b){   // parameters
    console.log(a+b)
}
addNumber(4,3)   // arguments
let res = addNumber(4,3)      // when you want to store value in any variable you have to return the value 
console.log(res)     
*/



/*
function addTwoNumber(number1, number2){
    return number1+number2
}
let res= addTwoNumber(3,3)
console.log(res)

*/





// function userLogedIn(username){
//     return `${username} is Loged in `
// }
// console.log(userLogedIn("Rupesh"));






function userLogedIn(username="Default User Name"){
    if(username === undefined){
        console.log("Please Enter your User Name ");
        return
    }
    else{
        return `${username} is Loged in` 
    }
}
console.log(userLogedIn());



