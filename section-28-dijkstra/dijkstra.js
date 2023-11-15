class Dijkstra {
    constructor(){
        this.adjacancyList = {}
    }

    addVertex(vertex){
        if(!this.adjacancyList[vertex]) this.adjacancyList[vertex] = []
    }

    addEdge(vertex1,vertex2, weight){
        this.adjacancyList[vertex1].push({node: vertex2, weight})
        this.adjacancyList[vertex2].push({ node: vertex1, weight})
    }
}