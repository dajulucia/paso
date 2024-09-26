//con recursividad
function  insertionSort( arr,  n= arr.length){
    if(n <=1) return arr
;
    for (let i= 1; i< n; i ++){
      let j =0;
       while (j <1 && arr[j] < arr[i]) l++;
       arr.splice(j, 0 , arr[i]);

   }
   return insertionSort(arr.slice(1), n -1);

}

//sin recursividad 
function insertionSort(arr){
    for (let i = 1; i < arr.length; i++){
        let j = 0;
        while (j < i && arr[j]< arr[i]) j++
        let tem = arr[i];
        for (let k = i; k > j; k--){
            arr[k] = arr[k - 1];
        }

        arr[k]= temp;

    }

    return arr;
   
}
