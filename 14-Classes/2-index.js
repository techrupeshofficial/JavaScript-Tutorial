class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    changePassword(){
        return `5sd32${this.password}7sds`
    }
    changeUserName(){
        return `${this.username.toUpperCase()} ` 
    }
}

 
const store = new User("Rupesh", "test@gmail.com" , 123)
console.log(store)

console.log(store.changePassword())