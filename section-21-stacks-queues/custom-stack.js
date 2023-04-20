class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }

  push (val){
    const newNode = new Node(val)
    if (this.size == 0) {
      this.first = newNode
      this.last = newNode
    } else {
      const temp = this.first
      this.first = newNode
      this.first.next = temp
    }

    return ++this.size
  }

  pop() {
    if (this.size == 0) return null
    else if (this.size == 1){
      const temp = this.first
      this.first = null
      this.last = null
      this.size --
      return temp.val
    }
    else {
      const temp = this.first
      this.first = temp.next
      this.size --
      return temp.val
    }
  }
}

const s1 = new Stack()

s1.push(2)
s1.push(3)
s1.push(1)
s1.pop()

console.log(s1)
