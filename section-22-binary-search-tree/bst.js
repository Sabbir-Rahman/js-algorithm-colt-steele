class Node {
  constructor(val){
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null
  }

  insert(val) {
    const newNode = new Node(val)
    if(this.root == null) {
      this.root = newNode
      return this
    } else {
      var current = this.root
      while(true) {
        if (val < current.val){
          if (current.left == null){
            current.left = newNode
            return this
          } else {
            current = current.left
          }
        } else {
          if (current.right == null){
            current.right = newNode
            return this
          } else {
            current = current.right
          }
        }
      }
    }
  }

  search(val){
    if (this.root == null) return false
    let current = this.root
    while(true){
      if (current.val == val) return true
      else if (val<current.val) {
        if (current.left == null) return false
        current = current.left
      } else {
        if (current.right == null) return false
        current = current.right
      }
    } 
  }
}

const b1 = new BinarySearchTree()
b1.insert(10)
b1.insert(15)
b1.insert(7)
b1.insert(8)
b1.insert(4)
b1.insert(17)

console.log(b1.search(17))