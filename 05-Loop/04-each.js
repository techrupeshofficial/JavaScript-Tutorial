// const language =["js", "Python", "Java", "C++"]
// language.forEach(function(item){
//     console.log(item)
// })





// const language =["js", "Python", "Java", "C++"]
// function print(item){
//     console.log(item)
// }
// language.forEach(print)       // this is not good way to write a forEach loop 





// const language =["js", "Python", "Java", "C++"]
// language.forEach((item)=>{
//     console.log(item)
// })


const code =["JS", "Python", "Java", "C++"]
code.forEach((item, index, arr)=>{
// console.log(item, index, arr)
})




const userDetails =[
    {
        name:"Rupesh",
        email:"rupesh@gmail.com",
        city:"Mumbai",
        pin:400067
    },
    {
        name:"Alex",
        email:"alex@gmail.com",
        city:"Pune",
        pin:123457
    },
    {
        name:"Alina",
        email:"alina@gmail.com",
        city:"Goa",
        pin:764873,
    },
]

userDetails.forEach((item)=>{
console.log(item.name, item.email,item.city)
})