/**
 * Single Linkedlist
 * Push:tail O(1)
 * pop:tail O(n)
 * shift:head O(1)
 * unShift:head O(1)
 * insert O(n)
 * Delete O(n)
 * Lookup by index O(n)
 * lookup by value o(n)
 */

class Node {
    constructor(value){
        this.value=value;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor(value){
        this.head=null;
        this.tail=null;
        this.length = 0;
    }
    //Create
    push(value){ //append
        let newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{
            //We need to point current tail's next to the newNode
            this.tail.next = newNode;

            //Now make newNode a tail node
            this.tail = newNode;
        }

        this.length++;
        return this
    }

    unshift(value){ //prepend
        let newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{
            //We need to point newNode next to the head
            newNode.next = this.head;

            this.head = newNode;
        }

        this.length ++;
        return this
    }

    //Remove
    pop(){ //deleteTail
        if(!this.head) return undefined;

        let lastTail = this.head;
        let newTail = this.head;
        while(lastTail.next){
            newTail = lastTail;
            lastTail = lastTail.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return lastTail
    }

    shift(){ //deleteHead
        if(!this.head) return undefined;

        let currentHead = this.head;
        this.head = this.head.next;
        currentHead.next = null

        this.length--;
        if(this.length === 0){
            this.tail = null;
        }

        return currentHead;
    }

    //Access || SetNewValue || insertByindex || removeByIndex
    get(index){
        if(index < 0 || index > this.length) return undefined;
        let currentIndex = this.head;

        for(let i = 0; i < index; i++){
            currentIndex = currentIndex.next;
        }

        return currentIndex;
    }

    setValue(index, value){
        let findIndexNode = this.get(index);

        if(findIndexNode){
            findIndexNode.value = value;
            return true;
        }

        return false;
    }

    
    inset(index, value){
        if(index < 0 && index > this.length) return false;
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);
  

        let newNode = new Node(value);
        let before = this.get(index -1);

        let after = before.next
        before.next = newNode;
        newNode.next = after;

        //newNode.next = before.next;
        //before.next = newNode;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 && index > this.length) return undefined;
        if(index === 0 ) return this.shift();
        if(index === this.length) return this.pop();

        let previousNode = this.get(index-1);
        let removeIndex = previousNode.next;

        previousNode.next = removeIndex.next
        removeIndex.next = null;
        this.length--;
        return removeIndex;
    }

    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let next = temp.next;
        let prev = null;
        for(let i = 0; i < this.length; i++){
            next = temp.next
            temp.next = prev;
            prev = temp;
            temp = next;
        }   
        // 1 -- 2 -- 3 -- 4 -- 5 -- 6
        return this
    }
}


let LinkedList = new SingleLinkedList();
LinkedList.push(4).push(7).push(8).push(9)
LinkedList.unshift(10)
//LinkedList.pop();
//LinkedList.shift()
console.log(LinkedList);
console.log(LinkedList.reverse());