let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleString());
console.log(typeof mydate)



let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toString())
console.log(" \n  \n  \n   \n  ")





let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)     // here will start month from Jan --0 
console.log(myCreatedDate.toLocaleString())
console.log(" \n  \n  \n   \n  ")







let myCreatedDate2 = new Date("2023-01-8")          // here will start month from jan ---1   beacuse using " "
console.log(myCreatedDate.toLocaleString())





console.log(" \n  \n  \n   \n  ")
console.log(" My Time Stamp ")
let timeStamp = Date.now()
// console.log(timeStamp)
// console.log(myCreatedDate2.getTime())
console.log(Math.floor(Date.now()/1000))

console.log(" \n  \n  \n   \n  ")




let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);      // you can give +1 for understaing beacuse month will start 0 

console.log(" weekday in object just test ")
newDate.toLocaleString('default', {
    weekday:"long"
})
console.log(newDate)

