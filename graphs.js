class Graph{
    constructor() {
        this.adjacencyList = {}
    }

    addVertex (vertex) {
        this.adjacencyList[vertex] = []
    }
}

g = new Graph()
g.addVertex("Mt. Rainier")
g.addVertex("Mt. Baker")
console.log(g)