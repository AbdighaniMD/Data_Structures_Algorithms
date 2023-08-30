/**
 * HashTable
 * 
 */

class HashTable {
    constructor(size){
        this.dataMap = new Array(size)
    }

    _hash(key){
        let hash = 0;
        let index = 0;
        while(index < key.length){
            hash= (hash + key.charCodeAt(index) * 23) % this.dataMap.length;
            index++
        }
        return hash;
    }

    set(key, value){
        let index = this._hash(key);
        if(!this.dataMap[index]){
            this.dataMap[index]=[];
        }
        this.dataMap[index].push([key,value]);
        return this
    }

    get(key){
        let index = this._hash(key);
        if(this.dataMap[index]){
            for(let i = 0; i < this.dataMap[index].length; i++){
                if(this.dataMap[index][i][0] === key){
                    return this.dataMap[index][i][1];
                }
            }
        }
        return undefined;
    }
    
    keys() {
        let allKeys = []
        for(let i = 0; i < this.dataMap.length; i++) {
            if(this.dataMap[i]) {
                for(let j = 0; j < this.dataMap[i].length; j++) {
                    allKeys.push(this.dataMap[i][j][0]);
                }
            }
        }
        return allKeys
    }
}

let myHashTable = new HashTable(7);
console.log(myHashTable)