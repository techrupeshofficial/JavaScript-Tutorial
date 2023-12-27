/*

let state = ["Maharashtra", "Bihar", "Kerla", "UP", "Goa"]
console.log(state.length)
let city= ["Mumbai","Bangalore", "MuzaffarPur", "Patna"]
state.push(city)         // array.push will not return new array 
console.log(state.length)
console.log(state[5])
console.log(state[5][[0]])

*/




/*
let state = ["Maharashtra", "Bihar", "Kerla", "UP", "Goa"]
let city= ["Mumbai","Bangalore", "MuzaffarPur", "Patna"]
let res = state.concat(city)   // concat will return new array 
console.log(res)*/





let state = ["Maharashtra", "Bihar", "Kerla", "UP", "Goa"]
let city= ["Mumbai","Bangalore", "MuzaffarPur", "Patna"]
let village =["Village1", "Village2", "Village3"]
let res = [...state, ...city, ...village]  // spread operator
console.log(res)




const multyArray =[1,2,3,[67,43], [665,34,6,24,[400,500,600]]]
let finalArray = multyArray.flat(Infinity)      // use of flat this is add all nested array to one array 
console.log(finalArray)





// check is array or not or convert string to array 

let res1 = Array.isArray("Rupesh")   // Array.isArray will check value is array or not 
console.log(res1)

let res2 = Array.from("Rupesh")   // Array.from will convert in Array 
console.log(res2)     // Array.from  its better use to convert string to array 



let a= 10
let b= 20
let c= 30
console.log(Array.of(a,b,c))     // Array.of  its better use to convert number to array 
let convertToArray = Array.of(a,b,c)
console.log(convertToArray)



