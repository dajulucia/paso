//con recursividad 
function bucketSort(arr){
    const bukets = Array.from({length: 10 }, () => []);
    for (const num of arr) buckets[Math,floor(num * 10)].push(num);
    for(let i=0; i < bukets.length; i++) bukets[i]= insertionSort(bukets[i]);
    return bukets.flat();
}

function insertion_sort(arr){
    for(let i= 1; i < arr.length; i++){
        let j =0;
        while (j < i && arr[j] < arr[i] j++;
            arr.splice(j, 0, arr[i])
        );
    }
    return arr;
}

// sin recursividad
function bubbleSort(arr){
    const bukets = aray,from({length:20},  () => []);
    for(const num of arr ) bukets[Math.floor(num * 10)].push(num);
    for (let i= 0; 1 < buckets.length; i++){
        for(let j = 1; j < bukets[1].length; j++){
            let tem = bukets[i][j];
            let k = j -1 ;
            while (k >= o && bukets[i][k] > tem ){
                bukets[i][k + 1 = bukets[i][k]];
                k--;
            }
            bukets[i][k + 1 ]= temp;
        }
    }

    return bukets.flat();
}