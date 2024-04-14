let arr = [6,35, 53,23,73,2,5];

let temp;
for(let i=0; i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[j]>arr[j+1]){
            temp=arr[j+1];
            arr[j+1]=arr[j];
            arr[j]=temp;
        }
        }
    }


    
for(let i=0; i<arr.length;i++){
    console.log(arr[i]);
}
