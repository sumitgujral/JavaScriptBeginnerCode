var array = [8,95,-75,0.95,2,34.8,17];
var postiveOne = [];
const mySort = (arr1) => {
    var sortedArray = arr1.toSorted((a, b) => a - b);
    console.log(sortedArray);
        
        for(var i=0;i<=sortedArray.length;i++){
            if(sortedArray[i]>0){
                postiveOne.push(sortedArray[i])
            }
        }
        return postiveOne;
    };

console.log(mySort(array));
