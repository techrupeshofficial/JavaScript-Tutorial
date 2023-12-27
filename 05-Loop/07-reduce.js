const myNumber = [1,2,3]
let total = myNumber.reduce((acc, currentVal)=>{
    // console.log(`acc ${acc} and Current Value : ${currentVal}`)
    return acc + currentVal
},0)

// console.log(total)











const booksPrice =[
    {
        booksName: "JavaScript",
        price:5999,

    },
    {
        booksName: "Python",
        price:999,

    },
    {
        booksName: "Java",
        price:4000,

    },
    {
        booksName: "C++",
        price:399,

    },
]


let totalPrice = booksPrice.reduce((acc , item)=>{
    return acc + item.price
},0)

console.log(totalPrice)

