class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let prevTail = this.tail;
      prevTail.next = newNode;
      newNode.prev = prevTail;
      this.tail = newNode;
    }

    this.length++;
    return newNode;
  }

  pop() {
    if (this.length == 0) return undefined;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      const oldTail = this.tail;
      const newTail = oldTail.prev;

      newTail.next = null;
      this.tail = newTail;
    }
    this.length--;

    return oldTail;
  }

  shift() {
    if (this.length == 0) return undefined;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      const oldHead = this.head;
      const newHead = oldHead.next;

      newHead.prev = null;
      this.head = newHead;
    }

    this.length--;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index < this.length / 2) {
      let count = this.length - 1;
      let currentIndex = this.tail;
      while (count != index) {
        currentIndex = currentIndex.prev;
        count--;
      }
      return currentIndex;
    } else {
      let count = 0;
      let currentIndex = this.head;
      while (count != index) {
        currentIndex = currentIndex.next;
        count++;
      }
      return currentIndex;
    }
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    } else {
      false;
    }
  }

  insert(index, val) {
    let foundNode = this.get(index);
    const newNode = new Node(val);
    if (foundNode) {
      let prevNode = foundNode;
      let nextNode = foundNode.next;
      prevNode.next = newNode;
      newNode.prev = foundNode;
      newNode.next = nextNode;
      nextNode.prev = newNode;
      this.length++;
      return true;
    } else return false;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    let foundNode = this.get(index - 1);
    if (foundNode) {
      let prevNode = foundNode.prev;
      let nextNode = foundNode.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      this.length--;
      return true;
    } else return false;
  }

  everse() {
    if (this.length <= 1) {
      // Nothing to reverse if the list has 0 or 1 nodes
      return this;
    }

    let current = this.head;
    let temp = null;

    // Swap the head and tail pointers
    this.head = this.tail;
    this.tail = current;

    // Iterate through the list and swap prev and next pointers for each node
    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev; // Move to the next node
    }

    return this;
  }
}

const d1 = new DoublyLinkedList();

d1.push(2);
d1.push(3);
d1.push(1);
// d1.unshift(4)
// d1.unshift(2)
//d1.insert(0,4)
d1.remove(1);
console.log(d1);
