

//let sons = "john george"
// function caps(sons) {
//    return sons.split(" ").map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(" ");
//   }
//   console.log(caps(sons))
  
// let caps = (function(sons) {
//    return sons.split(" ").map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(" ");
//   })
//   console.log(caps(sons))
//   let caps= (sons)=> {
//     return sons.split(" ").map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(" ");
//    }
//    console.log(caps(sons))



//    let so  = ["john george"]
//    let son = so[0].split(" ")
//    console.log(son.length)
//    let tilt = function (son){
//     for(i=0;i<son.length;i++){
//        son[i] = son[i].charAt[0].toUppercase()+son[i].slice(1)
//     son[i]=son[i][0].toUpperCase()+son[i].slice(1)
//     console.log(son[i])}
//     return son[i].join(" ")}
//    console.log(son.join(" "))
//    tilt()



   
   function rotateArray(arr, k) {
    for (let i = 0; i < k; i++) {
      arr.unshift(arr.pop());
    }
    return arr;
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  const k = 3;
  const rotatedArr = rotateArray(arr, k);
  console.log(rotatedArr);