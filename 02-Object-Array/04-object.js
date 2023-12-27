// singleton

// const myObj = new Object()
// const myObj1 = {}
// console.log(myObj)
// console.log(myObj1)



/*
let myObj1 ={}
myObj1.id="123abch"
myObj1.name ="Rupesh"
myObj1.status = true

console.log(myObj1)
console.log(myObj1.id)
*/




// nested object ****************************************************

const myObj3 = {
    email:"rupesh@email.com",
    fullName:{
        userFullName:{
            firstName:"Rupesh",
            lastName:"Thakur"
        }
    }
}
// console.log(myObj3.fullName.userFullName.firstName)






const obj1 ={
    nameObj1:"Alex",
    emailObj1:"alex@gmail.com",
    cityObj1:"Mumbai",
}
const obj2 = {
    nameObj2:"Rupesh",     // you not give same key in obj1 and obj2 like name and name, email and email 
    emailObj2:"rupesh@gmail.com",
    cityObj2:"Kandivali",
}

// const obj3 = {obj1, obj2}  // this will and object to object 
// const obj3 = Object.assign(obj1, obj2)   this will add object value to oject value to 
// const obj3 = Object.assign({}, obj1, obj2)   
const obj3 = {...obj1, ...obj2}
// console.log(obj3)







const users =[
    {
    name:"Rupesh", 
    city:"Mumbai",
}, 
{
    name:"Alex", 
    city:"Pune",
}, 
{
    name:"jack", 
    city:"Ney york",
},  

]
console.log(users[0].name)
console.log(users[0].city)

console.log(Object.keys(obj2))       // Object.keys use to give object keys
console.log(Object.values(obj2))     // Object.values  use to give object value 
console.log(" \n  \n \n ")
console.log(Object.entries(obj2))    // Object.entries use to convert object to array 
console.log(obj2.hasOwnProperty("nameObj2"))   // this will check key value , value is or not 



