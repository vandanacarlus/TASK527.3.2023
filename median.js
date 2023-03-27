let arr1 =[1,2,4,6]
let arr2 = [5,7,8,3]
    (function(arr1, arr2){
        var mergedArray = arr1.concat(arr2).sort(function(a,b){
            return a-b;
        });
        var median;
        if(mergedArray.length % 2 === 0){
            median = (mergedArray[mergedArray.length/2 - 1] + mergedArray[mergedArray.length/2]) / 2;
        } else {
            median = mergedArray[Math.floor(mergedArray.length/2)];
        }
        console.log(median);
    })(arr1, arr2);