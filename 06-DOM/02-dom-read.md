document.getElementById('title')  --  select particular id 
document.getElementsByName('h1')  -- give Node list , if have multypal h1 tag 
document.getElementsByTagName --     give HTMLCollection , if have multypal h1 tag 
document.getElementsByClassName -    this is use for select the class element,  -- give HTMLCollection




document.querySelector('#title')
document.querySelector('.abc')
document.querySelector('p')



---------------------------------------------------------------------------------------------------------------------
const myLi = document.querySelectorAll('li')  -- give Node List 
-----------------> we can run only forEach loop on Node List 

myLi.forEach((item)=>{
    item.style.color="red"
})

----------------------------------------------------------------------------------------------------------------------





*************************************** Convert HTMLCollection to Array  *****************************************
document.getElementsByClassName('list-item')
const tempListVal  = document.getElementsByClassName('list-item')
tempListVal
const newArrayVal = Array.from(tempListVal)
newArrayVal

newArrayVal.map((item)=>{
    item.style.color="green"
})
***********


*************************************** Convert NodeList to Array  ***********************************************
document.querySelectorAll('h2')
const valH2 = document.querySelectorAll('h2')
valH2
const newArrayH2 = Array.from(valH2)
newArrayH2
newArrayH2.map((item)=>{
    item.style.color="green"
})

**********













but we can convert HTMLCollection to Array or Node List to Array , then we can apply all array method 




you can not run loop  in  HTMLCollection
you can run loop in NodeList you can  run only forEach Loop beacuse this is not array this is node list 
but we can convert in array 










allP.forEach((item)=>{
    item.style.backgroundColor="green";
    item.style.padding ='3px';
    item.style.fontSize ="20px"
    item.innerHTML ="Rupesh"
})