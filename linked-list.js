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
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    traverse() {
        let current = this.head
        while (current) {
            console.log(current.val)
            current = current.next
        }
    }

    pop() {
        if(!this.head) {
            return undefined
        } 
        let current = this.head
        let newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    shift() {
        if (!this.head) {
            return undefined
        }
       let current = this.head        
        this.head = current.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return current.value
    }
}

// let first = new Node("Hey")
// first.next = new Node("there")

// console.log(first)
// console.log(first.next)

let list = new SinglyLinkedList()
console.log(list.push("figure skate"))
console.log(list.push("climb"))
list.traverse()
console.log(list.push("pupper"))
console.log(list.shift())
console.log(list)