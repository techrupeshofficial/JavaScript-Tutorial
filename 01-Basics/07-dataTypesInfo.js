// # Primitive Data Type 
    
    // 7 types of Primitive Data type  ,-- String , Number, Boolean, null, undefined, Symbol, BigInt


    const score = 100
    const scoreValue = 100.3

    const isLogdedIn = false
    const outSideTemp = null
    let useEmail;   // this is come undefined 

    const id = Symbol("123")
    const anotherId = Symbol("123")
    console.log(id===anotherId)
    const bigNumber = 243242342343243242n     // have to n in last number 



// Reference(Non-Primitive Data Types)

    // Array , Object , Function 

    const State = ["Maharashtra", "UP", "Bihar", "Goa", "Kerla"]   // this is array

    const myObj = {
        name:"Rupesh",
        age: 25,
        city:"Mumbai"
    }
    

    const myFunc = function (){
        console.log("Hiiii");
    }
    myFunc()

    console.log("   \n  \n   ")

    console.log(typeof(score));
    console.log(typeof(scoreValue));
    console.log(typeof(isLogdedIn));
    console.log(typeof(outSideTemp));
    console.log(typeof(useEmail));
    console.log(typeof(id));
    console.log(typeof(anotherId));
    console.log(typeof(bigNumber));
    console.log(typeof(State));
    console.log(typeof(myObj));
    console.log(typeof(myFunc));
    