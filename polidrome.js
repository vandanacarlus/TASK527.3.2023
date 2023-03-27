// check polydrome of anonymus function


// let poly = function(inp){
//     let inpu = inp.split("")
//     let input = inpu.reverse()
//     let inputs = input.join("")
//     if (inp === inputs){
//         console.log("polidrome")

//     }
//     else{
//         console.log("false")
//     }

// }
// poly("aba")

// check polydrome of IIFE

// let poly = (function(inp){
//     let inpu = inp.split("")
//     let input = inpu.reverse()
//     let inputs = input.join("")
//     if (inp === inputs){
//         console.log("polidrome")

//     }
//     else{
//         console.log("false")
//     }

// })
// poly("CbC")

//Check Polindromes Using arrow function


let poly =(inp)=>{
    let inpu = inp.split("")
    let input = inpu.reverse()
    let inputs = input.join("")
    if (inp === inputs){
        console.log("polidrome")

    }
    else{
        console.log("false")
    }

}
poly("CabaC")

