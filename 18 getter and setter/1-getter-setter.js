// class User {
//     constructor(email,password){
//         this.email= email
//         this.password = password

//     }
    
// }

// const rupesh = new User("rupesh@gmail.com", "ABC")
// console.log(rupesh)
// console.log(rupesh.email)













// class User {
//     constructor(email,password){
//         this.email= email
//         this.password = password
//     }   

//     get password(){
//         // return this._password.toUpperCase()
//         return `${this._password}okok`
//     }
//     set password(value){
//         // this._password = value      //.toUpperCase()
//         this._password = `${value}123`
//     }

// }
// const rupesh = new User("rupesh@gmail.com", "ABC")
// console.log(rupesh)
// console.log(rupesh.password)













class User {
    constructor(email,password){
        this.email= email
        this.password = password
    }   


    get email(){
        return this._email .toUpperCase()
    }

    set email(value){
        this._email = value      //.toUpperCase()
    }

    get password(){
         
        // return this._password.toUpperCase()
        return `${this._password}okok`
    }
    set password(value){
        // this._password = value      //.toUpperCase()
        this._password = `${value}123`
    }

}
const rupesh = new User("rupesh@gmail.com", "ABC")
console.log(rupesh)
console.log(rupesh.password)
console.log(rupesh.email)
















