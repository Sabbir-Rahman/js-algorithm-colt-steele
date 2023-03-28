class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}
class SinglyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.length =0
  }

  push(val){
    const newNode = new Node(val)
    if (!this.head){
      this.head = newNode
      this.tail = newNode
    }else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length ++
    return
  }

  pop(){
    if(!this.head) return undefined
    let current = this.head
    if (this.length ==1){
      this.head = null
      this.tail = null
      this.length --
      return current
    }
    while(current.next){
      var preNext = current
      current = current.next
    }
    this.tail = preNext
    this.tail.next = null
    this.length --
    
    return current
  }
  unshift(val){
    const newNode = new Node(val)
    if(!this.head){
      this.head = newNode
      this.tail = this.head
    }else {
      newNode.next = this.head
      this.head = newNode
    }
    
    this.length ++
    return this
  }
  shift(){
    const prevHead = this.head
    if(!this.head) return undefined
    if(this.length == 1){
      this.tail = null
    }
    this.head = prevHead.next
    
    
    this.length --
    return prevHead 
  }
}

const s1 = new SinglyLinkedList()
s1.push(2)
s1.unshift(3)
// s1.push(1)

console.log(s1.shift())
console.log(s1)