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

    unshift(val) {
        let newNode = new Node(val)
        let current = this.head
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head;
            this.head = newNode;            
        }

        this.length++
        return this
        
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null
        } 
        let counter = 0
        let current = this.head
        while (counter !== index) {
            current = current.next
            counter++
        }
        return current
    }
    set(value, index) {
        let findIt = this.get(index)
        if (findIt === null) {
            return false
        } else {
            findIt.value = value
            return true
        }
    }

    insert(value, index) {
        if (index < 0 || index > this.length) {
            return false
        }
        if (index === this.length) {
            this.push(value);
            return true
        }
        if (index === 0) {
            this.unshift(value)
            return true
        }
        let newNode = new Node(value)
        let previous = this.get(index - 1)
        let temp = previous.next
        previous.next = newNode
        newNode.next = temp
        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined
        }
        if (index = this.length - 1) {
            return this.pop()
        }
        if (index === 0) {
            return this.shift()
        }
        let current =  this.get(index)
        let previous = this.get(index -1 )
        previous.next = current.next
        this.length--
        return current
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
console.log(list)
console.log(list.unshift("eat"))
console.log("getter", list.get(0))
console.log("setter", list.set("lasagna", 0))
console.log(list)
console.log("insert", list.insert("cheesecake",  3))
console.log(list)