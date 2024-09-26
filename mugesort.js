//con recursividad
function MergeSort(arr){
    if (arr.length <= 1){
    return arr;
  } 
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let rinht = arr.slice(mid);

  return MergeSort(MergeSort(left), MergeSort({rinht}));
}

function merge(left , right){
    let result ={


        while (left.length > 0 && right.length > 0){
            if (left[0]<= rinht[0]){
                result.push(left.shift());
            }else {
                result.push(right.shift());
            }

        }        
    }

    return result.concat(left).cocat.(right);

}

// sin recursividad 
function MergeSort(arr){
    let stack=[{arr, low: 0, high: arr,length -1}];

    while(stack.length > 0){
        let {arr, low, high}= stack.pop();

        if (low < high){
            let mid = math.floor((low + high)/2);
            let left = arr.slice(low, mid + 1 );
            let ringht= arr.slice(mid +1, high +1 );

             stack.push({arr, low , high: mid });
             stack.push({arr, low: mid + 1, high });


             let merget = merge(left, righ);

            arr.splice(low, high - low +1, ...merged);
        }
    }

    return arr;
}

function marge(left, right){
    let result = [];

    while(left.length > 0 && right,length >0 ){
        if (left[0]< right [0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }

    return result.concat(left).concat(right);
}