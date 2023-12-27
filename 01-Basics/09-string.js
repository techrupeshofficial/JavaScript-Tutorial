const name ="Rupesh "
const roll =3232
console.log(name+roll+" done")   // we can also write this way but this is not good ideas now days

console.log(` my name is ${name} and my roll number is ${roll} `)



const state = new String("Maharashtra")
console.log(state)
console.log(state[0])   // this is not indexing , this is key value pairs
console.log(state[1])
console.log(state.__proto__)
console.log(state.length)
console.log(state.toUpperCase())
console.log(state.charAt(1))
console.log(state.indexOf("a"))  // this will take only first value of indexing 

let newState = state.substring(-9,4)   // here we can not give negative value 
console.log(newState)

let newState1 = state.slice(-9,4)   // here we can give negative value 
console.log(newState1)
   
let  mystr = "                       Rupesh       "
console.log(mystr)
console.log(mystr.trim())


console.log("  \n  \n  \n  \n  ")

let url ="https://rutechhub.com/okok434.urls"
console.log(url.replace("okok", "about/"))
console.log(url.includes("rutech"))




let laptop = "hp-acer-apple-dell"
console.log(laptop.split("-"))

