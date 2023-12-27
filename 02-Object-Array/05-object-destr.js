const book = {
    bookName:"JS",
    publishDate:1990,
    founder:"Rupesh"
}

console.log(book)
console.log(book.bookName)


const {bookName} = book        // destructuring
console.log(bookName)

const{publishDate: date} = book      // destructuring
console.log(date)   