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

    BFS() {
        let data = []
        let queue = []
        let node = this.root
        queue.push(node)
        while (queue.length) {
            node = queue.shift()
            data.push(node)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            
        }
        console.log(data)
    }
}

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
tree.BFS()