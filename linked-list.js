class Node{
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        var newNode = new Node (val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            current = this.head
            this.head = newNode
            this.head.next = current            
        }
        this.length += 1


    }
}

// let first = new Node("Hey")
// first.next = new Node("there")

// console.log(first)
// console.log(first.next)

let list = new SinglyLinkedList()