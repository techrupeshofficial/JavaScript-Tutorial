// < ,  > , <= , >= ,  == , != , ===  , !==

const isUserLoogedIn = true      //when isUserLoogedIn true if statment will execute , when false then if statemnt will not execute 
if(isUserLoogedIn){
    // console.log(" hello ")
}



// let temp = 32
// if(temp === 29){
//     console.log(" temp is less then 30 ")
// }
// else{
//     console.log(" temp is greater then 30 ")
// }




let score = 200
if(score > 100 ){
    let value = "this is Rupesh"
    // console.log(value)
}
// console.log(value)   // not run beacuse we are using let and const  beacuse value is scope level



// const amount = 100
// if(amount > 99) console.log(" yes ")









// let amount =909
// if (amount < 300) {
//     console.log(" amount is less the 300")   
// }
// else if(amount < 500){
//     console.log("amount is less then 500");
// }

// else if(amount < 800){
//     console.log("amount is less then 800");
// }
// else if(amount < 950){
//     console.log("amount is less then 950");
// }

// else if(amount < 1200){
//     console.log("amount is less then 1200");
// }

// else if(amount <2000){
//     console.log(" amount is leess then 2000")
// }

// else{
//     console.log(" Please take max amount under 2000 ")
// }











// conditional with &&(and) Operator 
/*
const adharCard = true;
const panCard = true;
const passPort =true
if(adharCard && panCard && passPort){ // in && operator any value will come false, then value will not go if Statement , and value will execute
    console.log(" yes,  You can go in USA   ")
}
else {
    console.log(" No you can not go in USA ")
}

*/







// conditional with ||(or) Operator 
const adharCard = true;
const panCard = true;
const passPort =false
if(adharCard || panCard || passPort){ // in || operator any value will come false, and true then value will  go if Statement and value will execute.
    console.log(" yes,  You can go in Nepal  ")
}
else {
    console.log(" No you can not go in Nepal ")
}








// terniary Operator 

const laptopPrice = 76000
laptopPrice > 77000 ? console.log(" Price is more then 77000 dont buy") : console.log("Price is less then 77000 i can buy this laptop ")










// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 5000
// val1 = undefined ?? 5000
val1 = null ?? 10 ?? 20   // always assign first value 
// console.log(val1)









