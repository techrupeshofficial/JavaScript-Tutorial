// const user ={
//     name:"Rupesh",
//     email:"test@gmail.com",
//     age:25,
//     getUserDetails: function(){
//         // return user.name
//         // console.log(this)    // here will come value of this all user object 
//         console.log(this.name)

//     }
// }
// console.log(user.name)
// user.getUserDetails()
// console.log(this)    // here will come value of this   empty {}


















// function User(userName, rollNo, isLoggedIn){
//     this.userName = userName;
//     this.rollNo = rollNo;
//     this.isLoggedIn = isLoggedIn;

//     // return this
// }


// const userOne = new User("Rupesh", 33, true)   // use to new keyword this will created first empty object 
// const userTwo = new User("Alex", 3, false)
// console.log(userOne)
// console.log(userTwo)











function User(userName, rollNo, isLoggedIn){
    this.userName = userName;
    this.rollNo = rollNo;
    this.isLoggedIn = isLoggedIn;
    this.show = function(){
        console.log(`hello this is function ${this.userName}`)
    }

    // return this
}

const userOne = new User("Rupesh", 33, true)   // use to new keyword this will created first empty object 
const userTwo = new User("Alex", 3, false)
// console.log(userOne) 

// console.log(userTwo)
console.log(userOne.constructor)