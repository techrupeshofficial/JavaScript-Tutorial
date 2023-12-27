/*
const user ={
    name:"Rupesh",
    email:"rupesh@gmail.com",
    city:"Mumbai",
    logiedin: function(){
        console.log(`${this.name} you are in function `)
        // console.log(this);
    }
}
user.logiedin()
user.name="i am changeing name Alex"
user.logiedin()
// console.log(this)
*/








/*
const user ={
    name:"Rupesh",
    email:"rupesh@gmail.com",
    city:"Mumbai",
    fullName:{
        fname:"Rupesh",
        lname:"Thakur"
    },
    func1: function(){
        console.log(`${this.fullName.lname} you are in  func 1 `)
    },
    func2: function(){
        console.log(`${this.name} you are in func 2 `)
    }
}
user.func1()
user.func2()
*/







// function show(){
//     let userName ="Rupesh"
//     console.log(this.userName);  // here this will not work , this keyword work with only Object not function 
// }
// show()




// const show = function(){
//     let userName ="Rupesh"
//     console.log(this.userName);  // here this will not work , this keyword work with only Object not function 
// }
// show()




// const show=() =>{
//     let userName ="Rupesh"
//     console.log(this); 
// }
// show()





const addTwoNumber = (a,b)=>{
    return a+b
}
console.log(addTwoNumber(3,4));



const addThreeNumber = (a,b,c) => a+b+c; console.log(addThreeNumber(3,3,3));







const takeObject = () =>({name:"Rupesh" , city:"Mumbai"})

console.log(takeObject())




const takeObject1 = () =>{
    return {name:"Alex" , city:"Mumbai"}
}
console.log(takeObject1())
// important -----> when you give {} you have to write return, when you are not using {} you don't write to return 

// ------> when you are using () you can not come new line and you no need to write return and 
        // when you will come new line you have to use {} and you have to write return key word 
        // when you are opning scope you have to write return 



