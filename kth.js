//let rotate = function(data){
    var a = [1,2,3,4];
    var k = 4;
  let kth =  function(a,k){
 for (var i=0;i<k;i++){
     a.unshift(a.pop())
 }
    
 console.log(a)
 }(a,k)
    