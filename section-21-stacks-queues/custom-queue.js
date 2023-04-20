class Node {
  constructor(val){
    this.val = val
    this.next = null
  }
}
class Queue {
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(val){
    const newNode = new Node(val)
    if (this.size ==0){
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    return ++this.size
  }

  dequeue(){
    if (this.size < 1) return undefined
    else if (this.size == 1) {
      const temp = this.first
      this.first = null
      this.last = null
      this.size--
      return temp.val
    } else {
      const temp = this.first
      this.first = temp.next
      this.size--
      return temp.val
    }
  }
}

const d1 = new Queue()

d1.enqueue(2)
d1.enqueue(1)
d1.enqueue(3)
d1.dequeue()

console.log(d1)