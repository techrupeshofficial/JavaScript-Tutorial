// document.querySelector("#fourthLast").addEventListener('click' , function(){
//     alert("hello")
// })


document.querySelector("#one").addEventListener('click' , function(e){
    // alert("hello")
    // console.log(e)

    //e - event object 
},)




//event object 

// type, timestamp , defaultPrevented 
// target , toElement, srcElement, currentTarget,
// clients , clinty , screenX, screenYaltKey, crtlKey, shifKey, keyCode





document.querySelector("#images").addEventListener('click' , function(e){
    console.log(" Clickd on in side of ul tag ")
},)



document.querySelector("#one").addEventListener('click' , function(e){
    // console.log(" clicked on first images ")
    // e.stopPropagation()   // use stopPropagation event will not come parent target event  
},)






document.querySelector(".google").addEventListener('click', function(e){
    // console.log(" Clicked on Google  ");
    // e.preventDefault()
    // e.stopPropagation()
})




// document.querySelector("#images").addEventListener("click", function(e){
//     console.log(e.target.parentNode)
//     let removeItem = e.target.parentNode
//     removeItem.remove()
// })


document.querySelector(".google").addEventListener("click", function(e){
    e.preventDefault()
})



document.querySelector("#images").addEventListener("click", function(e){
    console.log(e.target.tagName)
    if(e.target.tagName === "IMG"){
        let removeItem = e.target.parentNode
        removeItem.remove()
    }

    console.log(e.target.id)
})




