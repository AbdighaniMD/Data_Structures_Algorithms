/**
 *                  Tree terminology
 * Root: the node directly connected to another node 
 * Child: A node directly connected to another node when moving away from the root
 * Parent: the converse  notion of child 
 * siblings: A group of nodes with the same parent
 * Leaf: A node with no children 
 * Edge: the connection between one node and another
 * 
 */

class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor (){
        this.root = null;
        this.size = 1;
    }

    creatNode (value){
        this.size++

        let newNode = new Node(value)
    
        const searchTree = node => {
          // if value < node.value, go left
          if (value < node.value) {
            // if no left child, append new node
            if (!node.left) {
              node.left = newNode
            } 
            // if left child, look left again
            else {
              searchTree(node.left)
            }
          }
          // if value > node.value, go right
          else if (value > node.value) {
            // if no right child, append new node
            if (!node.right) {
              node.right = newNode
            }
            // if right child, look right again
            else {
              searchTree(node.right)
            }
          }
        }
    
        searchTree(this.root)
    }

    size(){
        return this.size;
    }

    min(){
        let currentNode = this.root;
        // contains traversing left until no more childrent
        while(currentNode.left){
            currentNode = currentNode.left
        }

        return currentNode.value
    }

    max(){
        let currentNode = this.root;

        while(currentNode.right){
            currentNode= currentNode.right;
        }

        return currentNode;
    }

    contains(value){
        let currentNode = this.root;

        while(currentNode){
            if(value === currentNode.value){
                return true;
            }

            if(value < currentNode.value){
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }

        return false;
    }

    /**
     * Tree Traversal 
     * Depth first search
     * Branch by branch
     */

    //in-order: left | root | right
    dfsInOrder(){
        let result = [];

        const traverse = node => {
            //if left child exist, go left again 
            if(node.left) traverse(node.left);
            // capture root node value
            result.push(node.value)
             // if right child exists, go right again
            if (node.right) traverse(node.right)

        }

        traverse(this.root)

        return result;

    }

    //pre-order :  root, left, right
    dfsPreOrder(){
        let result = []

        const traverse = node => {
          // capture root node value
          result.push(node.value)
          // if left child exists, go left again
          if (node.left) traverse(node.left)      
          // if right child exists, go right again
          if (node.right) traverse(node.right)
        }
    
        traverse(this.root)
    
        return result 
    }

    //post-order : left | right | root
    dfsPostOrder(){
        let result = []

        const traverse = node => {
          // if left child exists, go left again
          if (node.left) traverse(node.left)      
          // if right child exists, go right again
          if (node.right) traverse(node.right)
          // capture root node value
          result.push(node.value)
        }
    
        traverse(this.root)
    
        return result   
    }

    /**
     * Tree Traversal 
     * breadth first search
     * level by level
     * useing Queue
     */

     bfs() {
        let result = []
        let queue = []
    
        queue.push(this.root)
    
        while(queue.length) {
          let currentNode = queue.shift()
    
          result.push(currentNode.value)
    
          if (currentNode.left) {
            queue.push(currentNode.left)
          }
          if (currentNode.right) {
            queue.push(currentNode.right)
          }
        }
    
        return result
      }
}


let tree = new BinarySearchTree();
tree.creatNode(3);
tree.creatNode(36);
tree.creatNode(2);
tree.creatNode(12);
tree.creatNode(28);
tree.creatNode(39);

tree.size();

tree.min()
tree.max()

tree.contains(2)
tree.contains(9)

//tree.root.left.right = new Node(9);
