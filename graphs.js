class Graph{
    constructor() {
        this.adjacencyList = {}
    }

    addVertex (vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(item => {
            return item !== v2
        })
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(item => {
            return item != v1
        })
    }
} 

g = new Graph()
g.addVertex("Denver")
g.addVertex("Seattle")
g.addEdge("Denver", "Seattle")
console.log(g)
g.removeEdge("Denver", "Seattle")
console.log(g)