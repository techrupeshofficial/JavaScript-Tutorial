class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is  ${this.username} `);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email =email
        this.password
    }

    addCourse(){
        console.log(`new Course added ${this.username} ` )
    }
}
const user1 = new Teacher("Rupesh", "test@gmail.com", "123")
const demo = new User("helloooo")
console.log(user1)
console.log(demo)
