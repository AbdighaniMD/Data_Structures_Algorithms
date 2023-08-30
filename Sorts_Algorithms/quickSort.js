// WRITE QUICKSORT FUNCTION HERE //
function quickSort(value, left=0, right=value.length-1){

    if(left < right){
        let pivotIndex = pivot(value, left, right);
        quickSort(value, left, pivotIndex-1);
        quickSort(value, pivotIndex+1, right);
    } 

    return value;
}

let myArray = [4,6,1,7,3,2,5];
quickSort("quickSorted " + myArray);
console.log(myArray);


/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/  


// WRITE THE PIVOT FUNCTION HERE HELPER//
function pivot(array, pivotIndex=0, endIndex=array.length-1) {
    let swapIndex = pivotIndex;
    for (let i = pivotIndex + 1; i <= endIndex; i++) {
        if (array[i] < array[pivotIndex]) {
        swapIndex++;
        swap(array, swapIndex, i);
        }  
    }
  swap(array, pivotIndex, swapIndex);
  
  return swapIndex;
}

// WRITE THE SWAP FUNCTION HERE HELPER //
function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}


let myArray1 = [4,6,1,7,3,2,5];
pivot(myArray1);
console.log("pivot " + myArray1);


/*
    EXPECTED OUTPUT:  pivot Helper
    ----------------
    [ 2, 1, 3, 4, 6, 7, 5 ]

*/  
