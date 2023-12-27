/*

function calCartPrice(...num1){
    return num1
}
console.log(calCartPrice(33,22,44,5,6,223,42))

*/



function calCartPrice(val1, val2, ...num1){
    return [val1, val2, num1]
}
// console.log(calCartPrice(33,22,44,5,6,223,42))




/*
const userDetails ={
    name:"Laptop",
    price:70000
}
function handleUserDetailsObj(anyObject){
    console.log(`Product Name ${anyObject.name} and Price ${anyObject.price}`)
}
// handleUserDetailsObj(userDetails)     // this is easy way 
handleUserDetailsObj({
    name:"Alex",
    price:25
})

*/


const myObj1 ={
    name:"Rupesh",
    city:"Mumbai",
    pin: 400067,
}
const myObj2 ={
    name:"Alex",
    city:"Pune",
    pin:123444,  
}
function handelObj1AndObj2(takeAnyObject){
    return ` My name is ${takeAnyObject.name},  City is ${takeAnyObject.city} and  Pin code is ${takeAnyObject.pin}`
}
console.log(handelObj1AndObj2(myObj1))
console.log(handelObj1AndObj2(myObj2))



//***********************  Access Value from Array ********** //


/*
const myArray =[2,3,4,5,2,3,47,8]
function handleArray(getAnyArray){
 return getAnyArray[1]
}
console.log(handleArray(myArray))
*/


const myArray1 =[2,3,4,5,2,3,47,8]
function handleArray(getAnyArray){
 return getAnyArray[1]
}
// console.log(handleArray(myArray1))
console.log(handleArray([2,30,4,45]))

