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
        return
    }

    unshift() {
        return
    }

    get() {
        return
    }
    set() {
        return
    }
    insert() {
        return
    }
    remove() {
        return
    }
}

first = new Node (12)
first.next = new Node(13);
first.next.prev = first

console.log(first)