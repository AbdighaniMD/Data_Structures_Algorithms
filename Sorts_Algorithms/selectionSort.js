function selectionSort(value){
    for(let i = 0 ; i < value.length-1; i++){
        let min = i;
        for(let j = i+1 ; j < value.length; j++){
            if(value[j] < value[min]) min = j;
        }
        if(i !== min){
            let temp = value[i];
            value[i] = value[min];
            value[min] = temp
        }
    }

    return value;
}


let myArray = [4,2,6,5,1,3];
selectionSort(myArray);
console.log(myArray);


/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/  