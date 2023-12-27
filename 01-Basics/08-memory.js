// Stack (Primitive)   
// Heap (Non-Primitive)   

// this is primitive data type , here will use stack memory and here will not chnage both data  ------->    and here will give copy the data value 
let myname = "Rupesh"
let myname2 = myname
myname2 = "abc"
console.log(myname)
console.log(myname2)




//  this is non-primitive data here will heap memory, here is will chnage both   ------- >  and here will give referance (Original)  the  data value 
let user1 = {
    name:"Alex",
    email:"alex@gmail.com"
}
let user2 = user1
user2.email = "alex@facebook.com"

console.log(user1)
console.log(user2)