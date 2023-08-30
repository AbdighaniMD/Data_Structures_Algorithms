/**
 * 
 * @param {*} value 
 * @returns 
 */

function bubbleSort(value){
    for(let i =0; i<value.length; i++){
        for(let j =0; j < value.length-i-1; j++){
            if(value[j] > value[j+1]){
                let temp = value[j];
                value[j] = value[j+1];
                value[j+1] = temp;
            }
        }
    }
    return value
}


let myArray = [4,2,6,5,1,3];
bubbleSort(myArray);
console.log(myArray);


/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/   