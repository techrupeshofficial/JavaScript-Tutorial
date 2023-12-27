/*
const myArr= [5,2,13,46,1,2]
console.log(myArr[0])

const myArr2 = new Array(15,34,6,7,8)
console.log(myArr2[1]);


console.log(" Array Methods ")
myArr.push(7777)
myArr.pop()
myArr.unshift(99)  // unshift will add number from start in array
myArr.shift()      // shift will remove number from start in array 
console.log(myArr)


console.log(myArr.includes(55))
console.log(myArr.indexOf(46))

const newArr = myArr.join()   // this will convert array to object string 
console.log(newArr)
console.log(typeof newArr)
console.log(typeof myArr)

*/



// ****************    slice and splice ************************

let myArray = [1,2,3,4,5,6,7,8,9]
console.log("Original Array " , myArray)
console.log(" \n \n ")

const useSlice = myArray.slice(1,3)   // this will not take pure last last index in array 
console.log(useSlice)
console.log(" after use slice method  our original array ",myArray)  // here will not change original array 
console.log(" \n \n ")


const useSplice = myArray.splice(1,3)   // this is take pure last index in array 
console.log(useSplice);
console.log("after use splice method our original array " , myArray)  // here will change original array, you can check your original array, remove from original array to the target value like example [2,3,4]

