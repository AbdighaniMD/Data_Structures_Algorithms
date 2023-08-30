/**
 * last-in-first-out principle.
 * insertion O(1);
 * Removal O(1);
 * Searching O(N);
 * 
 */

class Node {
    constructor(value){
        this.value=value;
        this.next= null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.size = 0;
    }

    push(value){ // closer to unshift 
        const newNode = new Node(value)
        if(this.size === 0){//checking if the size is zero
            this.top = newNode;
        } else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++
        
        return this
    }

    pop(){ // closer to shift 
        if(this.size === 0) return undefined;

        let temp = this.top;
        this.top = this.top.next
        temp.next = null;

        this.size--;
        return temp;
    }
}


let myStack = new Stack();
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4);
console.log(myStack.pop());