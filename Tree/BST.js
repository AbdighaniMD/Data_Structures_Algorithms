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
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this
        }

        let temp = this.root;

        while (true) {
            if (newNode.value === temp.value) return undefined;

            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this
                }
                temp = temp.right;
            }
        }
    }

    contains(value) {
        if (!this.root) return undefined;
        let currentRoot = this.root;
        while (currentRoot) {
            if (value < currentRoot.value) {
                currentRoot = currentRoot.left;
            } else if (value > currentRoot.value) {
                currentRoot = currentRoot.right;
            }
            else {
                if (value === currentRoot.value) {
                    return true
                }
            }
        }
        return false
    }

    max(currentNode) {
        while (currentNode.right) {
            currentNode = currentNode.right;
        }

        return currentNode.value;
    }

    min(currentNode) {
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }

        return currentNode.value;
    }
}

///-----------Tree Traversal -------------///
///WRITE BFS METHOD HERE ////
BFS(){
    let queue = [];
    let result = [];
    let currentNode = this.root
    queue.push(currentNode);

    while (queue.length) {
        currentNode = queue.shift()
        result.push(currentNode.value);

        if (currentNode.left) queue.push(currentNode.left)
        if (currentNode.right) queue.push(currentNode.right)
    }

    return result
}

// DFS_PREORDER METHOD HERE //
DFSPreOrder(){
    let results = [];
    function traverse(currentNode) {
        results.push(currentNode.value);
        if (currentNode.left) traverse(currentNode.left);
        if (currentNode.right) traverse(currentNode.right);
    }

    traverse(this.root);
    return results
}

// DFS_INORDER METHOD HERE //
DFSInOrder(){
    let results = [];
    function traverse(currentNode) {
        if (currentNode.left) traverse(currentNode.left);
        results.push(currentNode.value);
        if (currentNode.right) traverse(currentNode.right);

    }
    traverse(this.root);
    return results;
}

// DFS_POSTORDER METHOD HERE //
DFSPostOrder() {
    let results = [];
    function traverse(currentNode) {
        if (currentNode.left) traverse(currentNode.left);
        if (currentNode.right) traverse(currentNode.right);
        results.push(currentNode.value);
    }
    traverse(this.root);
    return results;
}



let myBTS = new BinarySearchTree();

myBTS.insert(47)
myBTS.insert(21)
myBTS.insert(76)
myBTS.insert(18)
myBTS.insert(27)
myBTS.insert(52)
myBTS.insert(82)

console.log(myBTS.max(myBTS.root));