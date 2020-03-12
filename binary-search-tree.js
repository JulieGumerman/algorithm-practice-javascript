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
        //if (value === current.value) return undefined
        if(this.root === null) {
            this.root = newNode
            return this
        } else {
            let current = this.root
            console.log("current", current)
            console.log("current.value", current.value)
            while(true) {
                if (current.value > value) {
                    if (current.left === null) {
                        current.left = newNode
                        return this
                    } else {
                        current = current.left
                    }
                } else if (current.value < value) {
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

    DFSPreOrder() {
        let data = [];

        function traverse (node) {
            data.push(node.value);
            if(node.left) traverse(node.left)
            if(node.right) traverse (node.right)
        }
        traverse(this.root)
        return data
    }
}

let tree = new BinarySearchTree();
console.log("tree", tree)
tree.insert(10)

tree.insert(15)
tree.insert(8)
tree.insert(2)
tree.insert(20)
tree.insert(6)
console.log("tree2", tree)



//tree.BFS()
console.log(tree.DFSPreOrder())