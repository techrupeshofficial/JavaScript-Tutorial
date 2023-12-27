( function show(){
    console.log(" hello this is IIFE function ")
}) ();



( ()=>{
    console.log(" this is IIFE function with arrow function ")
} ) ();



((name)=>{
    console.log(`my name is ${name}`)
}
)("Rupesh")