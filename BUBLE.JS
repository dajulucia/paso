// con recursividad
function bubbleSort(arr){
    if (arr.length <= 1){
        return arr;
    }

    for (let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr [i + 1 ]){
            let temp = arr[i];
            arr[i]= arr[i + 1 ];
            arr[i+1] = temp;
        }
    }

    return bubbleSort(arr);
}

let arr = [5,2, 8, 3, 1, 6, 4];
console.log(bubbleSort(arr));



// sin recursividad

/* function bubbleSort(arr){
    let n = arr.length
    for(let i= 0; i < n - 1 ; i ++);{
        for (let j= 0; j < n - i - 1; j ++){
            if (arr[j] > arr[ j + 1 ]){
                let temp = arr[j];
                arr[j] = arr [j + 1];
                arr[j + 1] = temp ;
            }
        }
    }

    return arr;
}

let arr= [5,2,8,3,1,6,4];
console.log(bubbleSort(arr));
 */