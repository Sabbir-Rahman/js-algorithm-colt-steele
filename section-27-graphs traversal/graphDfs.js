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

    depthFirstRecursive(start) {
        if (!start) return null
        const result = []
        const visited = {}
        const adjacancyList = this.adjacancyList

        function dfs(vertex){
            
            visited[vertex] = true
            result.push(vertex)
            adjacancyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
            
        }

        dfs(start)

        return result
    }

    depthFirstRecursive2(start) {
        const visited = {}
        const res = []
        
        function dfs(vertex){
            visited[vertex] = true
            res.push(vertex)

            adjacancyList[vertex].forEach(neighbor=> {
                if(!vertex[neighbor]){
                    return dfs(vertex)
                }
            })
        }
        
    }

    depthFirstInterative(start) {
        const stack = [start]
        const visited = {}

        let currentVertex 
        visited[start] = true

        while(stack.length){

            currentVertex = stack.pop()
            result.push(currentVertex)

            this.adjacancyList[currentVertex].forEach(neighbor =>{
                if (!visited[neighbor]){
                    visited[neighbor] = true
                    stack.push(currentVertex)
                }
            })
        }
        return result
    }

    depthFirstInterative2(start) {
        const stack = [start]
        const res = []
        const visited = {}

        let currentvertex 

        while(stack.length){
            currentvertex = stack.pop()
            visited[currentvertex] = true
            res.push(currentvertex)

            this.adjacancyList[neighbor].forEach(neighbor => {
                if (!visited[neighbor]){
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
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