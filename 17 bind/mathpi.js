// Object.getOwnPropertyDescriptor(Math)
// console.log(Math.PI)
// Math.PI =5
// console.log(Math.PI)












// const value  = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(value);

// const laptop = {
//     name:"acer",
//     price: 50000,
//     isAvailable :true    // this is own created Object 
// }
// console.log(Object.getOwnPropertyDescriptor(laptop,"name"))

















// const laptop = {
//     name:"acer",
//     price: 50000,
//     isAvailable :true    // this is own created Object 
// }
// console.log(Object.getOwnPropertyDescriptor(laptop,"name"))

// Object.defineProperty(laptop, "name",{
//     writable :false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(laptop,"name"))   //now  value will come false 






















// const laptop = {
//     name:"acer",
//     price: 50000,
//     isAvailable :true    // this is own created Object 

// }
// console.log(Object.getOwnPropertyDescriptor(laptop,"name"))

// for (let [key , value] of Object.entries(laptop)) {  //Object will not iterable that's why we can use Object.entries
//     console.log(`${key} : ${value}`)
// }

















// const laptop = {
//     name:"acer",
//     price: 50000,
//     isAvailable :true,    // this is own created Object 
//     goToBuyLaptop : function(){
//         return "Laptop is not Available "
//     }

// }
// console.log(Object.getOwnPropertyDescriptor(laptop,"name"))

// for (let [key , value] of Object.entries(laptop)) {  //Object will not iterable that's why we can use Object.entries

//     // console.log(`${key} : ${value}`)   // this will give all function 
//     if(typeof value !== "function"){
//         console.log(`${key} : ${value}`)
//     }
    
// }






















// ****************************************************


//  when 
// writable :false,
// enumerable: false   any value will give false we can not use loop or we can not irritate that value  

const laptop = {
    name:"acer",
    price: 50000,
    isAvailable :true,    // this is own created Object 
    goToBuyLaptop : function(){
        return "Laptop is not Available "
    }

}
console.log(Object.getOwnPropertyDescriptor(laptop,"name"))

 Object.defineProperty(laptop, "name",{
        // writable :false,
        enumerable: false   // when we will give true then will come name value of laptop **********************
    })

for (let [key , value] of Object.entries(laptop)) {  //Object will not iterable that's why we can use Object.entries

    // console.log(`${key} : ${value}`)   // this will give all function 
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`)
    }
}





















