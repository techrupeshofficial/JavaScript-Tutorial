// const myfunc = (num) =>{
//     return num *5
// }
// myfunc.abc =555555

// console.log(myfunc(5))
// console.log(myfunc.abc)
// console.log(myfunc.prototype)    // in arrow function  here will come undefined 




 function myfunc(num){
    return num *5
}
myfunc.abc =555555

console.log(myfunc(5))
console.log(myfunc.abc)
console.log(myfunc.prototype)     // in normal function will come empty object  {}







function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    score++
}

createUser.prototype.printMe = function(){
    console.log(`Rupesh Score is ${this.score}`)
}

const first = new createUser("Rupesh", 94)
const second = createUser("Alex", 93)
first.printMe()

 













