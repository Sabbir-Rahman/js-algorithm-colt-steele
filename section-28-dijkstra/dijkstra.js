// we can convert it to binary heap for more efficiency
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacancyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacancyList[vertex]) this.adjacancyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacancyList[vertex1].push({ node: vertex2, weight });
    this.adjacancyList[vertex2].push({ node: vertex1, weight });
  }

  dijekstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};

    // build  up the initial state
    for (let vertex in this.adjacancyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // as long as there is omething to visit
    while (nodes.values.length) {
      // get the small value
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // we are done
        // build the path to return to end
        while (previous[smallest]) {
          path.push(smallest);
          // change smallest value to the previous parent value
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacancyList[smallest]) {
          // find neighboring node
          let nextNode = this.adjacancyList[smallest][neighbor];

          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;

          // check if presentNode plus path to next neighbor node is smaller than
          // the nextNeigbor present distance
          // if smalll then change the value and update the previous node
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;

            // enque in th epriority queue with the new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse()
  }
}

let g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'E', 3);
g.addEdge('C', 'D', 2);
g.addEdge('C', 'F', 4);
g.addEdge('D', 'E', 3);
g.addEdge('D', 'F', 1);
g.addEdge('E', 'F', 1);

g.dijekstra('A', 'E');
