//con recursividad


function quickSort(arr){
    if (arr.length <= 1){
        return arr;
    }

    let pivot = arr [0];
    let less = [];
    let grater= [];

    for (let i = 1; i< arr.length; i++){
        if (arr[i]<= pivot){
            less.push(arr[i]);
        } else {
            grater.push(arr[i]);
        }
    }

    return quickSort(less).concat(pivot. quickSort(grater));
}

let arr = [5,2,8,3,1,6,4];

console.log(quickSort(arr));

// sin recursividad

/* function quickSort(arr){
    let stack = [{arr, law: 0, hip: arr.length -1 }];

    while (stack.length >0){
        let{arr,low, high}= stack.pop();
         
        if (low < high){
            let pivot = arr[low];
            let i = low + 1;
            let j =high;
            while ( i <= j){
                while ( i <= k && arr[i]<= pivot)i++;
                while(i <= j && arr[j > pivot])j-;

                if (i<= j){
                    let temp = arr[i];
                    arr[i]= arr[i];
                    arr[j]= temp
                }
            }
            arr[low]= arr[j];
            arr[j]=pivot;

            stack.push({arr, low , j -1});
            stack.push({arr,j,+1,high});
            
        }
    }
    return arr; */
/* 
 */  