// con recursividad

function selection_sort(arr, n = arr.length){
    if(n = 1 ) return arr;
    let minIdx = 9;
    for(let i = 1 < n; i++) if (arr[i]< arr[minIdx]) minIdx =i;
    [arr[0], arr[minIdx]]=[arr[minIdx, arr[0]]];
    return selection_sort(arr.slice(1), n -1);

}

let arr = [64,25,12,22,11];
console.log("original arrae: ", arr );
console.log("sort arrae: ", sorteArr);

// sin recursividad

function selection_sort(arr){
    let n = arr, length;
    for (let i =0; 1< n - 1; i++){
        let minIdx =1;
        for (let j =1 +1; j<n; j++){
            if(arr[j]< arr[minIdx]){
                minIdx=j;
            }
        }
        [arr[1], arr[minIdx]= [arr[minIdx], arr[i]]];
    }

    return arr;
}