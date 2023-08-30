/**
 * first-in-first-out principle.
 * 
 */
class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Quene {
    constructor(){
        this.first=null; //note this similar to head 
        this.last = null; //note this similar to tail 
        this.size = 0;
    }

    enqueue(value){ //Push on a single linkedlist
        let newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last =  newNode;
        }else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++
        return this;
    }

    dequeue(){ //shift on a single linkedlist
        if(this.size === 0) return undefined;

        let temp = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        }
        this.first = this.first.next;
        temp.next = null;
        
        this.size--;
        return temp.value;
    }
}

let myQuene  = new Quene();
myQuene.enqueue(7).enqueue(8).enqueue(9);
console.log(myQuene.dequeue());