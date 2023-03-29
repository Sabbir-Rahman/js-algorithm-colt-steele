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

  get(index){
    if (index<0||index>this.length) return undefined

    if(index==0) return this.head
    let current = this.head
    let i = 0
    while(current.next){
      current = current.next
      i++
      if(i==index) return current
    }
    return undefined
  }

  set(val,index){
    let prevValue = this.get(index)
    if (!prevValue) return false
    prevValue.val = val

    return true
  }

  insert(index,val){
    if(index<0 ||index>this.length) return false
    else if(index ==0) this.unshift(val)
    else if(index == this.length-1) this.push(val)
    else {
      const newNode = new Node(val)
      const prevNode = this.get(index-1)
      const nextNode = prevNode.next
      prevNode.next = newNode
      newNode.next = nextNode
    }
    this.length ++
    return true
    
    
  }
}

const s1 = new SinglyLinkedList()
s1.push(2)
s1.push(3)
s1.push(1)
s1.insert(1,10)

// console.log(s1.shift())
// console.log(s1.set(4,2))
console.log(s1)