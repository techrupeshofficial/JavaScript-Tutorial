//for

for(let i=0; i<=10; i++){
    if(i===5){
        // console.log(" 5 is best number ")
    }
    // console.log(i)
}



for(let i=1; i<10; i ++){
    // console.log(`outer loop ${i} `)
    for(j=1; j<5; j++){
        // console.log(`inner loop ${j}  and outer loop ${i}`)
        // console.log(i + "*"  +j+  "=" + i*j )
    }
}












let myArray =["Rupesh", "Alex", "Thakur", "Alina"]
// console.log(myArray.length)
for(i=0; i<myArray.length; i++){
    // console.log(myArray[i])
}




// break and continue 

for(i=0; i<10; i++){
    // console.log(i)
}


for(i=0; i<10; i++){
    if(i===5){
        // console.log("5 is found ")
        break;
    }
    // console.log(i)
}





for(i=0; i<10; i++){
    if(i===5){
        console.log("5 is found  and skip 5 ")
        continue;
    }
    console.log(i)
}



