const code = ["JS", "Python", "Java" ,"C++"]
const value = code.forEach((item)=>{
    // console.log(item)
    return item
})
// console.log(value)   // for each will not reaturn the value,  



// important 
// ------> when you are using () you can not come new line and you no need to write return and 
        // when you will come new line you have to use {} and you have to write return key word 
        // when you are opning scope you have to write return 

const nums= [2,5,66,33,24,55,20,8,7]
const res = nums.filter((item)=>{
    return item >10
})
// console.log(res)


const myNums = [3,2,4,55,6,445,1,42,443,5]
myNums.forEach((item)=>{
    if(item >10){
        // console.log(item)
    }
})





const books = [
    {
        bookName:"JavaScript",
        Author:"Rupesh",
        publish:1990,
        edition:2022,
    },
    {
        bookName:"Python",
        Author:"Alex",
        publish:1990,
        edition:2023,
    },
    {
        bookName:"Java",
        Author:"Rupesh",
        publish:1980,
        edition:2020,
    }, {
        bookName:"C++",
        Author:"Alina",
        publish:1997,
        edition:2017,
    }, {
        bookName:"HTML",
        Author:"Rupesh",
        publish:1998,
        edition:2023,
    }, {
        bookName:"CSS",
        Author:"Rupesh",
        publish:1999,
        edition:2023,
    }, {
        bookName:"C",
        Author:"Rupesh",
        publish:1960,
        edition:2020,
    },
]

let ressult = books.filter((bkValue)=>{
    return bkValue.Author ==="Rupesh" && bkValue.publish > 1995
})

console.log(ressult)








