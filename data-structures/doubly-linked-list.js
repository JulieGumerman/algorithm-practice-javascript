/*
Node:
   --val
   --next
   --prev
*/

class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

/* 
DoublyLinkedList
--head
--tail
--length

*/

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        new_node = new Node(val)
        if (this.head === null) {
            this.head = new_node
            this.tail = new_node
        } else {
            this.tail.next = new_node;
            new_node.prev = this.tail
            this.tail = new_node
        } 
        this.length++
        return this
    }

    pop() {
        if (this.head = null) {
            return undefined
        }
        let poppedNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length--
        return poppedNode
    }

    shift() {
        if (this.head === null) {
            return undefined
        } 
        
        let oldHead = this.head;

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
            oldHead.next = null
        }

        this.length--
        return oldHead
    }

    unshift(val) {
        let newAtFront = new Node(val)
        if (this.length === 0) {
            this.head = newAtFront
            this.tail = newAtFront
        } else {
            this.head.prev = newAtFront
            newAtFront.next = this.head
            this.head = newNode
        }

        length++
        return this
    }

    get(index) {
        //gets an index
        if (index < 0 || index >= this.length) {
            return null
        }

        if (index <= this.length / 2 ) {
            let count = 0
            let current = this.head;

            while (count != index) {
                current = current.next;
                count ++;

            }        
        } else {
            let count = this.length - 1;
            let current = this.tail

            while (count !== index) {
                current = current.prev
                count--
            }
        }

        return current
    }


    set(index, val) {
        let current = this.get(index)

        if (current === null) {
            return false
        } else {
            //rework connections so this location is current
            current.val = val;
            return true
        }
    }

    insert(index, val) {
        if (index < 0 || index >= this.length) {
            return false
        } else if (index === 0) {
            return this.unshift(val)
            
        } else if (index === this.length) {
            return this.push(val)
            
        } else {
            let newNode = new Node(val)
            let current = this.get(index - 1)
            let currentNext = current.next

            current.next = newNode
            newNode.prev = current
            newNode.next === currentNext
            currentNext.prev = newNode

            this.length++
            return true
        }
        
    }
    remove(index) {
        if (index < 0 || index > this.length) {
            return false
        } else if (index === 0) {
            return this.shift()
        } else if (index === this.length - 1) {
            return this.pop()
        } else {
            this.length--
            let nodeToRemove = this.get(index)
            let beforeNode = nodeToRemove.prev
            let afterNode = nodeToRemove.next
            beforeNode.next = afterNode
            afterNode.prev = beforeNode
            nodeToRemove.next = null
            nodeToRemove.prev = null
            return nodeToRemove
        }
    }
}

first = new Node (12)
first.next = new Node(13);
first.next.prev = first

console.log(first)