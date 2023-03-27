// check prime number of anonymous function

// let prime = function (data){
//     data = data.filter((item)=>{
//         for(i=2; i<=Math.sqrt(item);i++){
//             if(item%i===0)
//                return false

//             }
// return true
        
        
//     })

// console.log(data)}

// prime([1,2,3,4])

// check prime number of IIFE function

// let prime = (function (data){
//     data = data.filter((item)=>{
//         for(i=2; i<=Math.sqrt(item);i++){
//             if(item % i === 0)
//                return false
//         }

            
// return true
//         })

// console.log(data)})

// ([1,2,3,4,5,6,7])

//check prime number of arrow function

let  prime = (data)=>{
    data = data.filter((item)=>{
        for(i=2; i<=Math.sqrt(item);i++){
            if(item%i===0)
               return false

            }
return true
        
        
    })

console.log(data)}

prime([1,2,3,4,5,6,7])