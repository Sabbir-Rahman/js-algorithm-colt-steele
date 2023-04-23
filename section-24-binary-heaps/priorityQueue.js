class Node {
  constructor(val,priority){
    this.val = val
    this.priority = priority
  }
}
class PriorityQueue {
  constructor() {
    this.values = []
  }
  enqueue(val,priority) {
    const newNode = new Node(val,priority)
    this.values.push(newNode)
    this.bubleUp()
  }

  bubleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (element.priority >= parent.priority) break
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }
  dequeue() {
    const min = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }

    return min
  }

  sinkDown() {
    let idx = 0
    const length = this.values.length
    const element = this.values[0]
    while (true) {
      const leftChildrenIdx = 2 * idx + 1
      const rightChildrenIdx = 2 * idx + 2
      let swap = null
      let leftChild, rightChild
      if (leftChildrenIdx < length) {
        leftChild = this.values[leftChildrenIdx]
        if (leftChild.priority < element.priority) {
          swap = leftChildrenIdx
        }
      }
      if (rightChildrenIdx < length) {
        rightChild = this.values[rightChildrenIdx]
        if (
          (swap == null && rightChild.priority < element.priority) ||
          (swap != null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildrenIdx
        }
      }

      if (swap == null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }
}

let priorityQueue = new PriorityQueue()
priorityQueue.enqueue("common cold",4)
priorityQueue.enqueue("gunshot wound",1)
priorityQueue.enqueue('high fever', 2)
console.log(priorityQueue)
console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())