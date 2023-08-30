// WRITE MERGESORT FUNCTION HERE // O(n log n)
function mergeSort(value){
    if(value.length == 1) return value;
     
    let mid = Math.floor(value.length/2);
    //create to Arrays
    let left = value.slice(0,mid);
    let right = value.slice(mid)
    
    return merge(mergeSort(left), mergeSort(right));
}

let originalArray = [3,1,4,2];
let sortedArray = mergeSort( originalArray );

console.log( "Original Array:", originalArray );
console.log( "\nSorted Array:", sortedArray );


// WRITE THE MERGE FUNCTION HERE HELPER//
function merge(array1, array2){
    let combined = [];
    let i = 0;
    let j = 0;

    while(i < array1.length && j < array2.length){
        if(array1[i] < array2[j]){
            combined.push(array1[i]);
            i++
        } else{
            combined.push(array2[j]);
            j++
        }
    }

    while(i < array1.length){
        combined.push(array1[i]);
        i++
    }

    while(j < array2.length){
        combined.push(array2[j]);
        j++
    }

    return combined
}

let myArray1 = [1,3,7,8];
let myArray2 = [2,4,5,6];
console.log( "Merge: "+ merge( myArray2, myArray1 ) );

/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6, 7, 8 ]

*/