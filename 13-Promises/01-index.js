// const promiseOne = new Promise(function(res, rej){
//     setTimeout(()=>{
//         console.log(" Hello this is PromisesOne Async Task   ")
//         res()  // use of this when will go .then 
//     },1000)
// })

// promiseOne.then(()=>{
//     console.log(" this will print done after PromisesOne ")
// })








// new Promise ((res, rej)=>{
// setTimeout(()=>{
//     console.log(" Hello this is task2 ")
//     res()
// },1000)
// }).then(function(){
//     console.log(" this will print done after task 2  ")
// })







// const promiseThree = new Promise(function(res,rej){
// setTimeout(function(){
//     console.log("task3 ")
//     res({name:"Rupesh", email:"test@gmail.com"})
// },1000)
// })

// promiseThree.then((getData)=>{
//     console.log(getData)
// })






// const promiseFour = new Promise(function(res, rej){
//     setTimeout(()=>{
//         let error = false
//         if(error === false){
//             res({username:"Rupesh", email:"test@gmail.com"})
//         }
//         else{
//             rej(" Somthing ERROR")
//         }
//     },1000)
// })

// promiseFour.then((getData)=>{
//     // console.log(getData);
//     return getData.username
// }).then((abc)=>{
//     console.log(abc)
// }).catch((err)=>{
// console.log(err)
// }).finally(()=>{
//     console.log(" i am finally, I will print ")
// })

 








const promiseFive = new Promise((rej, res)=>{
setTimeout(()=>{
    let error = true
    if(!error){
        rej({name:"Rupesh", email:"test@gmail.com"})
    }
    else{
        rej(" Somthing Wrong in this API ")
    }
},1000)

})


// async function getPromiseFive(){
//     const response = await promiseFive
//     console.log(response)
// }


async function getPromiseFive(){
    try {
    const response = await promiseFive
    console.log(response)
    } catch (error) {
        console.log(error)
        
    }
}
getPromiseFive()








// async function getAPIData (){
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data =  await response.json()
//     console.log(data)
// }
// getAPIData()



fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response)=>{
    // console.log(response)
    return response.json()
}).then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})


