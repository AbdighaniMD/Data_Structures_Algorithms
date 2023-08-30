
function insertionSort(value){
    for(let i = 1; i < value.length; i++){
        //let temp = value[i];
        let j = i - 1;

        while(j>=0 && value[j] > value[i]){
            value[j+1] = value[j];
            j--;
        }
        value[j+1] = value[i]
    }
    return value
}


let myArray = [4,2,6,5,1,3];
insertionSort(myArray);
console.log(myArray);


/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/  