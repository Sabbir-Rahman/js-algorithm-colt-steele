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
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");