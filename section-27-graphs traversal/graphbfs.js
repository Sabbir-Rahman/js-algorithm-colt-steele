class Graph {
    constructor(){
        this.adjacancyList = {}
    }

    addVertex(vertex){
        if(!this.adjacancyList[vertex]) this.adjacancyList[vertex] = []
    }

    addEdge(vertex1,vertex2){
        this.adjacancyList[vertex1].push(vertex2)
        this.adjacancyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1,vertex2){
        this.adjacancyList[vertex1] = this.adjacancyList[vertex1].filter(vertex => vertex2)
        this.adjacancyList[vertex2] = this.adjacancyList[vertex2].filter(vertex => vertex1)
    }

    removeVertex(vertex){
        while(this.adjacancyList[vertex].length){
            const adjacencyList = this.adjacancyList[vertex].pop()
            this.removeEdge(vertex, adjacencyList)
        }
        delete this.adjacancyList[vertex]
    }

    breadthFirstSearch(start) {
        const queue = [start]
        const visited = {}
        const res = []
        let currentVertex
        visited[start] = true

        while(queue.length){
            currentVertex = queue.shift()
            visited[currentVertex] = true
            res.push(currentVertex)
            this.adjacancyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    queue.push(currentVertex)
                }
            });
        }

        return res
    }
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g.depthFirstRecursive("A"))