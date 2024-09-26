// con recursividad

function radixSort(arr, exp = 1 ){
    if (exp > Math.max(...arr)) return arr;
    const bukets = aray.from({ length: 10 }, () => []);
    for (const num of arr){
        const buketInde= math.floor((num / exp) % 10 );
        buckets[bucketIndex].push(num);
    }
    for ( let i = 0; 1 < bukets.length; i++){
        bukets[i]= radixSort(bukets[i], exp * 10);
    }

    return bukets.flat();
    
}

//sin  recursividad
function radixSort(arr){
    let exp =1;
    while (exp < math.max(...arr)){
        const bukets = array.from({length: 10 } ,()=>[]);
        for (const num of arr){
        const  buketIndex  = math.floor((num / exp) % 10);
        bukets[buketIndex].push(num);
    
        }
        arr= [].concat(...bukets);
        exp *= 10;
    }
   return arr;
}