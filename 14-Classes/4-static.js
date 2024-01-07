class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`UserName:  ${this.username} `)
    }

    static createId(){     // when will add static here , then id will not accessble to any child and any another class and all it will  throw error 
        return "123"
    }
}

const rupesh = new User("Rupesh")
// console.log(rupesh.createId())


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const teacher1 = new Teacher("Alex" , "alex@gmail.com")
console.log(teacher1.createId())