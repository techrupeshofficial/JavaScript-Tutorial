// function setUserName (username){
//     this.username = username
//     // console.log(" called ")
// }


// function createUser(username, email, password){
//     setUserName.call(this,username)
//     this.email = email
//     this.password = password
// }

// const demo = new createUser("Rupesh" , "test@gmail.com", "123")
// console.log(demo)












function firstFunc(username){
    this.username = username
}

function secondFunc(username, email, password){
    // this.username = username
    firstFunc.call(this, username)
    this.email = email
    this.password = password
}

const store = new secondFunc("Rupesh" , "test@gmail.com", "123")
console.log(store)









// function firstFunc(username){
//     this.username = username
// }

// function secondFunc(username, email, password){
//     // this.username = username
//     firstFunc.call(this, username)
//     this.email = email
//     this.password = password
// }

// const store = new secondFunc("Rupesh" , "test@gmail.com", "123")
// const store1 = new firstFunc("alex" , "test@gmail.com", "123")
// console.log(store)
// console.log(store1)
