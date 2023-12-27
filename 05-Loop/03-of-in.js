
// for of print only key and array , this is not iterat on object 
// for in loop will print key + value also 




let data =[1,2,3,4,5,6,7,8,9]
for(let val of data){
    // console.log(val)
}


let name= "Rupesh Thakur"
for(let val  of name){
    // console.log(val)
}






const mapValue = new Map()
mapValue.set("IN", "India")
mapValue.set("USA", "United State of America")
mapValue.set("USA", "United State of America")   // map is always use for unique value 

// console.log(mapValue)
for (const [key, val] of mapValue) {
    // console.log(key,val)
}






// let myObj = {
//     name:"Rupesh", 
//     city:"Mumbai", 
//     state:"Maharashtra",  
// }
// for (const [objName, objValue] of myObj) {   // it will not iterable
//     console.log(objName, objValue) 
// }
















const myObj ={
    name:"Rupesh",
    city:"Mumbai", 
    state:"Maharashtra",  
}
for (const key in myObj) {
    // console.log(key, myObj[key])
}



const num = [43,2232,32,432,53]
for (const key in num) {
    // console.log(key, num[key])
}




