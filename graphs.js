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

    dfsRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if(!vertex) {
                return null;
            } 
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        })(start)
        console.log(result)
    }

    dfsIterative(starting_vertex) {
        const result = [];
        const visited = {};
        const s = [starting_vertex];
        const adjacencyList = this.adjacencyList

        visited[starting_vertex] = true
        let currentVertex;

        while (s.length) {
            console.log("stack", s)
            currentVertex = s.pop();
            result.push(currentVertex);
            adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true
                    s.push(neighbor)
                }
            })


        }
        console.log(result)
    }
} 

g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

g.dfsRecursive("D")
g.dfsIterative("F")