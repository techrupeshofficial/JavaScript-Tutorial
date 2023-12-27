// what is singleton 
// --->  when deceler object using by literal there will not make singleton 
// --->  when deceler object using by constructor  there will  make singleton     // Object.create 




// object literals 
/*
const mySym = Symbol("key1")     // not require to much  

const user ={
    name:"Rupesh",
    "full name":"Rupesh Thakur", 
    [mySym]:"this is my Symbole",
    age:25,
    city:"Mumbai",
    "state": "Maharashtra"
}
console.log(user.name)
console.log(user["name"])
console.log(user["full name"])   // if have any space in object key so you have to use like this--- user["full name"]
console.log(user.state)

console.log(user[mySym]);    // not require to much  


*/







/*
const user1 ={
    name:"Alex",
    email:"alex@alex.com",
    age:23,
    city:"Mumbai",
    
}
user1.name="Rupesh";
user1.email="rupesh@gmail.com";
console.log(user1)
// Object.freeze(user1)  // when will use Object.freeze value will not change  (Nothing will change )
user1.email="rupesh@yahoo.com";    // this will not change because object had freeze 
console.log(user1)


user1.myfunction = function(){
    return "hii"
}
console.log(user1.myfunction())


*/



let user2 = {
    name:"Rupesh", 
    age:25,
    city:"Mumbai",
    show: function(){
        console.log(user2.age)   // you can write user2.age also 
       return "Hello this is function"
    }
}
  
console.log(user2.name)
console.log(user2.show())



