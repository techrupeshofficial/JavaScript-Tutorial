// let myName =  "Rupesh         "
// let yourName =  "Alex                  "
// console.log(myName.length)
// console.log(myName.trim().length)






/*

// when we will create own function method by object , then that can access all properties Object , array , string 
let name = ["Rupesh" , "Alex"]
let cityName ={
    rupesh:"Mumbai",
    alex:"USA",
    Alina:"Mumbai",
    Alexaaa:"Mumbai",
    getValue:function(){
        return `Rupesh is from ${this.rupesh}`
    }
}

// console.log(cityName.getValue())
Object.prototype.rupesh = function(){
    console.log(" creating own function method ");
}
cityName.rupesh()           // somthing error with cityName 


*/












/*
let myArray = ["Rupesh", "Alex", "Alina"]

let myObj = {
    name:"Rupesh", 
    city:"Mumbai",
    getValue:function(){
        return  `Helloooooooooooo  ${this.name}`
    }
}

Array.prototype.rupesh = function(){   // when we will give Object here this will use everywhere
    console.log(" i am own function method i can apply only on Array beacuse there is given Array.prototype ")
}

console.log(myObj.getValue())
myArray.rupesh()
*/






// let myStr = "Rupesh       "
// console.log(myStr.trim().length)







// let myStr1 = "Rupesh          "
let myStr = "Rupesh          "
let str = "Rupesh  T H A         KU   R        "
let myStr2 ="Rupesh  T      h     a   k    u   r "
String.prototype.ourTrim = function(){
    console.log(this)
    console.log(this.trim().length)
}

str.ourTrim()
myStr.ourTrim()
myStr2.ourTrim()
 

