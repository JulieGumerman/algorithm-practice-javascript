class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(value)
        if (value === current.value) return undefined
        if(this.root === null) {
            this.root = newNode
            return this
        } else {
            let current = this.root
            while(true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode
                        return this
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }

    find(value) {
        if (value === this.root) {
            return true
        } else {
            let current = this.root
            let found = false
            while (current && !found) {
                if (value < current.value) {
                    if (current.left === value) {
                        found = true
                        return true
                    } else {
                        current = current.left
                    }
                } else if (value > current.value) {
                    if (current.right === value) {
                        found = true
                        return true
                    } else current = current.right
                }
            }
        }
        return false
    }
}

let tree = new BinarySearchTree();
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)