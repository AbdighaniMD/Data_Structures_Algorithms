/**
 * Doubly Linkedlist
 * 
 */

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //Create
    push(value){ //append
        let newNode = new Node(value);
        if(this.length === 0){
            this.head = newNode;
            this.tail = this.head;
        } else{

            this.tail.next = newNode;

            newNode.prev = this.tail;  //new
          
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    unshift(value){ //prepend
        let newNode = new Node(value);
        if(this.length === 0){
            this.head = newNode;
            this.tail = this.head;
        } else{
            newNode.next = this.head;

            this.head.prev = newNode; //new

            this.head = newNode;
        }

        this.length++;
        return this;
    }

    //Remove
    pop(){ //deleteTail
        if(this.length === 0) return undefined;

        let temp = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
            this.tail = this.tail.prev;

            this.tail.next = null;
            
            temp.prev = null; // temp for the list disconnect             
        }

        this.length--;
        return temp;

    }

    shift(){ //deleteHead
        if(this.length === 0) return undefined;
        
        let temp = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
            this.head = this.head.next; // move the head forward

            this.head.prev = null;
            
            temp.next = null;
        }

        this.length--;
        
        return temp;
    }

    //Access || SetNewValue || insertByindex || removeByIndex
    get(index){
        if(index < 0 || index > this.length) return undefined;

        let temp = this.head;
        if(index < this.length/2){
            for(let i = 0; i < index; i++){
                temp = temp.next;
            }
        } else{
            temp = this.tail;
            for(let i = this.length-1; i > index; i--){
                temp = temp.prev;
            }
        } 

        return temp;
    }

    setValue(index, value){
        let findIndexNode = this.get(index);

        if(findIndexNode){
            findIndexNode.value = value; // change the value
            return true;
        }
        return false;
    }

    inset(index, value){
        if(index < 0 || index > this.length) return false
        if(index === this.length) return this.push(value);
        if(index === 0) return this.unshift(value);
        
        const newNode = new Node(value);
        const before = this.get(index - 1);
        let  after = before.next
        
        before.next = newNode
        newNode.prev = before

        newNode.next = after
        after.prev = newNode

        this.length++
        return true
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined; 
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()
  

        const temp = this.get(index)

        temp.prev.next = temp.next
        temp.next.prev = temp.prev
        temp.next = null
        temp.prev = null

        this.length--
        return temp
    }

}


let LinkedList = new DoublyLinkedList();
LinkedList.push(4).push(7).push(8);
//LinkedList.unshift(10)
//LinkedList.pop();
LinkedList.shift()

console.log(LinkedList.get(-1));