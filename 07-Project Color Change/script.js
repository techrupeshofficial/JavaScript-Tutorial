let buttons = document.querySelectorAll(".button")
const body = document.querySelector('body')

buttons.forEach((item)=>{
    item.addEventListener("click",function (event){
        console.log(event)
        console.log(event.target.id)
        if(event.target.id==="grey"){
            body.style.background=event.target.id
        }
        if(event.target.id==="white"){
            body.style.background=event.target.id
        }
        if(event.target.id==="blue"){
            body.style.background=event.target.id
        }
        if(event.target.id==="yellow"){
            body.style.background=event.target.id
        }
    })
}) 