const user = {
    name: "Rupesh",
    email:"rupesh@gmail.com"
}

const father ={
    car: "BMW",
    laptop:"Apple",
    home: true
}

const son = {
    car:"Farari",
    bike:"Royel E",
    laptop:"acer",
    gold:"5kg",
    mobile:"Samsung",
}

son.__proto__=  father
console.log(son.car)
console.log(son.home)